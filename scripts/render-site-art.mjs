import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("public/site-art");

const copper = "#d99768";
const cream = "#efe6d7";

function svgBuffer(svg) {
  return Buffer.from(svg);
}

function noisePattern(id, opacity = 0.18) {
  return `
    <filter id="${id}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="4" seed="8"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 ${opacity}"/>
      </feComponentTransfer>
    </filter>
  `;
}

function distressOverlay(width, height, seed = 11) {
  return `
    <filter id="distress-${seed}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="5" seed="${seed}"/>
      <feColorMatrix type="matrix" values="0.8 0 0 0 0.1  0 0.72 0 0 0.08  0 0 0.6 0 0.05  0 0 0 0.3 0"/>
    </filter>
    <rect width="${width}" height="${height}" filter="url(#distress-${seed})" opacity="0.22"/>
  `;
}

function titleFontSize(line) {
  if (line.length > 10) {
    return 82;
  }
  if (line.length > 7) {
    return 94;
  }
  return 108;
}

function coverSvg({ title, titleLines, subtitle, palette, author = "C. J. W. ARMSTRONG" }) {
  const [top, mid, bottom] = palette;
  const lines = titleLines ?? [title];
  const yPositions =
    lines.length === 3 ? [82, 392, 650] : lines.length === 2 ? [190, 492] : [370];

  return svgBuffer(`
    <svg width="840" height="1260" viewBox="0 0 840 1260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${noisePattern("coverNoise", 0.2)}
        <linearGradient id="paper" x1="0" y1="0" x2="840" y2="1260">
          <stop stop-color="${top}"/>
          <stop offset="0.54" stop-color="${mid}"/>
          <stop offset="1" stop-color="${bottom}"/>
        </linearGradient>
        <linearGradient id="vignette" x1="420" y1="0" x2="420" y2="1260">
          <stop stop-color="#000" stop-opacity="0"/>
          <stop offset="1" stop-color="#000" stop-opacity="0.62"/>
        </linearGradient>
      </defs>
      <rect width="840" height="1260" fill="url(#paper)"/>
      <rect width="840" height="1260" filter="url(#coverNoise)" opacity="0.48"/>
      <g opacity="0.22" fill="#1a1110" font-family="Georgia, serif" font-size="25">
        ${Array.from({ length: 26 }, (_, row) =>
          `<text x="${row % 2 ? -10 : 20}" y="${56 + row * 42}">Spirit, science fiction, sacred hunger, black stars, road songs, hidden maps, cosmic questions.</text>`,
        ).join("")}
      </g>
      <rect width="840" height="1260" fill="url(#vignette)"/>
      <g transform="translate(82 96)">
        <rect x="-22" y="0" width="710" height="104" rx="5" fill="#070707" transform="rotate(-6 333 52)"/>
        <rect x="80" y="310" width="556" height="104" rx="5" fill="#070707" transform="rotate(-5 358 362)"/>
        <rect x="12" y="548" width="702" height="128" rx="5" fill="#070707" transform="rotate(-7 363 612)"/>
        ${lines.map((line, index) => (
          `<text x="336" y="${yPositions[index]}" text-anchor="middle" fill="#efc6ba" font-family="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" font-size="${titleFontSize(line)}" letter-spacing="4">${line}</text>`
        )).join("")}
      </g>
      <g transform="translate(0 845)">
        <path d="M0 250C78 184 112 159 161 183C187 195 209 221 243 203C293 176 328 101 383 143C418 170 432 245 489 211C549 175 560 79 625 123C670 153 684 228 731 215C767 205 797 160 840 132V415H0V250Z" fill="#020202"/>
        <rect x="0" y="302" width="840" height="120" fill="#020202"/>
        <rect x="92" y="110" width="72" height="92" fill="#020202" transform="rotate(-10 128 156)"/>
        <rect x="228" y="74" width="64" height="120" fill="#020202" transform="rotate(12 260 134)"/>
        <path d="M486 140l80-76 48 96z" fill="#020202"/>
        <path d="M658 100c47 12 74 48 80 106c-56-2-89-37-80-106z" fill="#020202"/>
      </g>
      <rect x="92" y="1115" width="558" height="58" fill="#e8c0a0" transform="rotate(-6 371 1144)"/>
      <text x="374" y="1155" text-anchor="middle" fill="#15100e" font-family="Arial, sans-serif" font-size="35" font-weight="700" letter-spacing="3" transform="rotate(-6 374 1155)">${author}</text>
      <text x="64" y="1226" fill="#080808" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="5">${subtitle}</text>
    </svg>
  `);
}

function arcaneEyeSvg(cx, cy, scale = 1, opacity = 0.4) {
  const dotRing = Array.from({ length: 18 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 18;
    const radius = index % 3 === 0 ? 112 : 92;
    const x = Math.round(Math.cos(angle) * radius);
    const y = Math.round(Math.sin(angle) * radius);
    const r = index % 3 === 0 ? 4 : 2.5;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${copper}" opacity="${index % 3 === 0 ? 0.5 : 0.32}"/>`;
  }).join("");

  return `
    <g transform="translate(${cx} ${cy}) scale(${scale})" opacity="${opacity}" stroke="${copper}" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-420 0L-282 -118L-116 -158L0 -128L116 -158L282 -118L420 0L282 118L116 158L0 128L-116 158L-282 118Z" stroke-width="2"/>
      <path d="M-344 0L-224 -82L-96 -108L0 -86L96 -108L224 -82L344 0L224 82L96 108L0 86L-96 108L-224 82Z" stroke-width="1.6"/>
      <path d="M-258 0C-174 -76 -82 -112 0 -112C82 -112 174 -76 258 0C174 76 82 112 0 112C-82 112 -174 76 -258 0Z" stroke-width="2.3"/>
      <path d="M-162 0C-104 -54 -49 -76 0 -76C49 -76 104 -54 162 0C104 54 49 76 0 76C-49 76 -104 54 -162 0Z" stroke-width="1.4"/>
      <circle cx="0" cy="0" r="69" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="41" stroke-width="2"/>
      <circle cx="0" cy="0" r="18" fill="${copper}" fill-opacity="0.28" stroke-width="1.5"/>
      <path d="M0 -132L38 -62L0 -38L-38 -62Z" stroke-width="1.2" opacity="0.72"/>
      <path d="M0 132L38 62L0 38L-38 62Z" stroke-width="1.2" opacity="0.72"/>
      <path d="M-84 -154L-30 -92M84 -154L30 -92M-84 154L-30 92M84 154L30 92" stroke-width="1"/>
      <path d="M-492 -6C-442 -44 -400 -58 -356 -54M492 -6C442 -44 400 -58 356 -54M-492 6C-442 44 -400 58 -356 54M492 6C442 44 400 58 356 54" stroke-width="1.4" opacity="0.72"/>
      <path d="M-522 -152C-378 -230 -190 -242 -26 -184M522 -152C378 -230 190 -242 26 -184M-522 152C-378 230 -190 242 -26 184M522 152C378 230 190 242 26 184" stroke-width="1" opacity="0.42"/>
      <path d="M-276 -188C-156 -274 144 -276 276 -188M-276 188C-156 274 144 276 276 188" stroke-width="1" opacity="0.36"/>
      <g opacity="0.7">${dotRing}</g>
      <path d="M-16 -52L0 -96L16 -52M-16 52L0 96L16 52" stroke-width="1.1" opacity="0.56"/>
    </g>
  `;
}

function heroStageSvg() {
  return svgBuffer(`
    <svg width="1800" height="980" viewBox="0 0 1800 980" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${noisePattern("grain", 0.2)}
        <radialGradient id="warm" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1360 245) rotate(116) scale(600 520)">
          <stop stop-color="#9a5e3a" stop-opacity="0.5"/>
          <stop offset="0.52" stop-color="#6e3e2a" stop-opacity="0.2"/>
          <stop offset="1" stop-color="#8f5736" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="teal" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(850 405) rotate(90) scale(500 820)">
          <stop stop-color="#15343b" stop-opacity="0.68"/>
          <stop offset="0.62" stop-color="#10252a" stop-opacity="0.36"/>
          <stop offset="1" stop-color="#14333a" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="eyeCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1050 405) rotate(90) scale(110 150)">
          <stop stop-color="#25373a" stop-opacity="0.45"/>
          <stop offset="1" stop-color="#030506" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="floorFade" x1="900" y1="600" x2="900" y2="980">
          <stop stop-color="#030506" stop-opacity="0"/>
          <stop offset="1" stop-color="#030506"/>
        </linearGradient>
        <linearGradient id="rockFace" x1="860" y1="780" x2="1660" y2="980">
          <stop stop-color="#806852"/>
          <stop offset="0.52" stop-color="#4e3d31"/>
          <stop offset="1" stop-color="#1d1510"/>
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="12"/>
        </filter>
      </defs>
      <rect width="1800" height="980" fill="#060b0d"/>
      <rect width="1800" height="980" fill="url(#teal)"/>
      <rect width="1800" height="980" fill="url(#warm)"/>
      <rect width="1800" height="980" filter="url(#grain)" opacity="0.7"/>
      ${distressOverlay(1800, 980, 18)}
      <g opacity="0.24" stroke="#d9a170" stroke-linecap="round">
        <path d="M115 74C424 30 745 30 1040 88C1290 137 1518 122 1745 52" fill="none"/>
        <path d="M80 820C448 706 742 699 1070 780C1312 840 1528 828 1772 752" fill="none"/>
      </g>
      ${arcaneEyeSvg(1050, 408, 1.42, 0.34)}
      <g opacity="0.18" stroke="#d0b08d" stroke-linecap="round">
        <path d="M310 655L650 288"/>
        <path d="M380 750L728 548"/>
        <path d="M1340 652L1662 472"/>
        <path d="M230 425L92 480"/>
      </g>
      <g opacity="0.98">
        <ellipse cx="1285" cy="886" rx="520" ry="74" fill="#050403" filter="url(#softShadow)" opacity="0.78"/>
        <path d="M764 886C815 808 908 770 1006 798L1088 760L1152 778L1236 740L1338 792C1462 750 1608 779 1688 870C1518 941 964 956 764 886Z" fill="url(#rockFace)"/>
        <path d="M790 865L900 822L1016 810L1088 782L1156 796L1238 766L1358 806L1454 792L1548 812L1654 856" stroke="#b18d67" stroke-opacity="0.5" stroke-width="4" fill="none"/>
        <path d="M812 899C935 860 1034 862 1130 889C1260 928 1450 904 1644 872" stroke="#2a1d15" stroke-width="16" fill="none" opacity="0.38"/>
        <path d="M828 879L910 846L982 856L1030 824L1086 844L1144 816L1210 842L1290 804L1378 832L1462 814L1572 842" stroke="#2c2019" stroke-opacity="0.42" stroke-width="9" fill="none"/>
        <path d="M984 818L1032 805L1050 835L1002 852Z" fill="#92765b" opacity="0.55"/>
        <path d="M1358 796L1404 785L1427 820L1378 836Z" fill="#94765d" opacity="0.46"/>
        <path d="M1106 782L1148 774L1162 794L1120 810Z" fill="#2e241c" opacity="0.38"/>
        <path d="M1216 830L1268 812L1298 840L1238 858Z" fill="#9c7d5f" opacity="0.24"/>
      </g>
      <g transform="translate(1575 540)" opacity="0.82">
        <path d="M0 280C35 172 72 82 144 4" stroke="#6d6b3a" stroke-width="8" stroke-linecap="round"/>
        <path d="M84 96C150 85 196 45 224 0C164 5 120 39 84 96Z" fill="#66703f"/>
        <path d="M54 162C116 152 158 116 183 70C126 74 88 104 54 162Z" fill="#74814a"/>
        <path d="M22 232C77 218 112 184 139 136C89 143 51 176 22 232Z" fill="#5f6b3c"/>
        <path d="M126 190C178 186 218 160 248 116C198 113 158 136 126 190Z" fill="#4f6037"/>
      </g>
      <rect y="610" width="1800" height="370" fill="url(#floorFade)"/>
    </svg>
  `);
}

function bookPagesSvg() {
  return svgBuffer(`
    <svg width="560" height="720" viewBox="0 0 560 720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pageEdge" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#e8e1d6"/>
          <stop offset="0.55" stop-color="#f7f1e8"/>
          <stop offset="1" stop-color="#b6aa9a"/>
        </linearGradient>
      </defs>
      <g transform="translate(84 30) rotate(3)">
        <rect x="105" y="38" width="344" height="624" fill="url(#pageEdge)"/>
        <g stroke="#b8ad9f" stroke-width="1" opacity="0.5">
          ${Array.from({ length: 24 }, (_, i) => `<path d="M428 ${62 + i * 24}L448 ${58 + i * 24}"/>`).join("")}
        </g>
        <rect x="82" y="28" width="364" height="642" fill="#303638" opacity="0.5"/>
        <rect x="75" y="28" width="377" height="642" fill="none" stroke="#080808" stroke-width="5" opacity="0.72"/>
      </g>
    </svg>
  `);
}

function booksEyeSvg() {
  return svgBuffer(`
    <svg width="1400" height="560" viewBox="0 0 1400 560" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${noisePattern("bookNoise", 0.14)}
        <radialGradient id="center" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(900 265) rotate(90) scale(220 420)">
          <stop stop-color="#6d402b" stop-opacity="0.62"/>
          <stop offset="1" stop-color="#071011" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1400" height="560" fill="#081012"/>
      <rect width="1400" height="560" fill="url(#center)"/>
      <rect width="1400" height="560" filter="url(#bookNoise)" opacity="0.64"/>
      ${distressOverlay(1400, 560, 22)}
      ${arcaneEyeSvg(900, 270, 0.78, 0.5)}
      <g opacity="0.2" stroke="#e1c4a0">
        <path d="M348 150L1188 420"/>
        <path d="M442 478L1102 90"/>
        <path d="M790 80V454"/>
        <path d="M622 266H1140"/>
      </g>
    </svg>
  `);
}

function quoteMountainSvg() {
  return svgBuffer(`
    <svg width="1400" height="430" viewBox="0 0 1400 430" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${noisePattern("mountainNoise", 0.18)}
        <linearGradient id="sky" x1="700" y1="0" x2="700" y2="430">
          <stop stop-color="#151a1b"/>
          <stop offset="0.55" stop-color="#0b0f10"/>
          <stop offset="1" stop-color="#040607"/>
        </linearGradient>
        <radialGradient id="mist" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(935 92) rotate(90) scale(230 470)">
          <stop stop-color="#b08a6a" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#9f765a" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="snow" x1="708" y1="30" x2="708" y2="280">
          <stop stop-color="#c8c6bd" stop-opacity="0.22"/>
          <stop offset="1" stop-color="#c8c6bd" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="430" fill="url(#sky)"/>
      <rect width="1400" height="430" fill="url(#mist)"/>
      <rect width="1400" height="430" filter="url(#mountainNoise)" opacity="0.58"/>
      <path d="M0 308L144 216L242 260L356 164L476 270L610 142L744 306H0Z" fill="#263033" opacity="0.5"/>
      <path d="M150 330L338 164L438 258L610 80L744 268L902 146L1084 330H150Z" fill="#192124" opacity="0.72"/>
      <path d="M428 430L616 76L724 242L828 116L1058 430H428Z" fill="#080b0c"/>
      <path d="M610 80L670 176L640 158L616 210L592 158L548 210Z" fill="url(#snow)"/>
      <path d="M828 116L902 218L862 196L838 248L812 188L766 244Z" fill="url(#snow)" opacity="0.8"/>
      <path d="M0 350C172 300 310 282 454 308C610 336 710 316 848 282C1004 244 1176 246 1400 206V430H0Z" fill="#0b1011" opacity="0.62"/>
      <path d="M0 396C254 342 508 342 722 372C918 400 1140 382 1400 326V430H0Z" fill="#050708" opacity="0.78"/>
    </svg>
  `);
}

function galaxySvg() {
  return svgBuffer(`
    <svg width="1600" height="520" viewBox="0 0 1600 520" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${noisePattern("spaceNoise", 0.26)}
        <radialGradient id="core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(920 240) rotate(18) scale(540 190)">
          <stop stop-color="#f1b27a" stop-opacity="0.6"/>
          <stop offset="0.28" stop-color="#a33c68" stop-opacity="0.5"/>
          <stop offset="0.62" stop-color="#334f85" stop-opacity="0.38"/>
          <stop offset="1" stop-color="#05070a" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280 165) rotate(90) scale(230 360)">
          <stop stop-color="#3d78a9" stop-opacity="0.44"/>
          <stop offset="1" stop-color="#376a9b" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="redCloud" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1255 185) rotate(90) scale(230 300)">
          <stop stop-color="#a5444f" stop-opacity="0.34"/>
          <stop offset="1" stop-color="#a5444f" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="520" fill="#05070a"/>
      <rect width="1600" height="520" fill="url(#core)"/>
      <rect width="1600" height="520" fill="url(#blue)"/>
      <rect width="1600" height="520" fill="url(#redCloud)"/>
      <rect width="1600" height="520" filter="url(#spaceNoise)" opacity="0.48"/>
      <g opacity="0.34" stroke="#e0b284" fill="none">
        <path d="M686 282C836 192 1034 158 1256 180"/>
        <path d="M700 312C884 242 1088 238 1306 282"/>
        <path d="M726 224C936 124 1128 102 1328 136"/>
      </g>
      <g fill="${cream}">
        ${Array.from({ length: 160 }, (_, i) => {
          const x = (97 * i + 41) % 1540 + 20;
          const y = (53 * i + 77) % 470 + 22;
          const r = i % 17 === 0 ? 2.5 : i % 9 === 0 ? 1.7 : i % 5 === 0 ? 1.1 : 0.65;
          const o = i % 11 === 0 ? 0.84 : i % 7 === 0 ? 0.64 : 0.34;
          return `<circle cx="${x}" cy="${y}" r="${r}" opacity="${o}"/>`;
        }).join("")}
      </g>
    </svg>
  `);
}

async function writePng(filename, svg, width) {
  await sharp(svg, { density: 180 }).resize({ width }).png().toFile(path.join(outDir, filename));
}

async function writeHeroStage() {
  const base = await sharp(heroStageSvg(), { density: 180 }).resize({ width: 1800 }).png().toBuffer();
  const pages = await sharp(bookPagesSvg(), { density: 180 }).resize({ width: 560 }).png().toBuffer();
  const coverShadow = svgBuffer(`
    <svg width="500" height="690" viewBox="0 0 500 690" xmlns="http://www.w3.org/2000/svg">
      <filter id="blur">
        <feGaussianBlur stdDeviation="18"/>
      </filter>
      <rect x="54" y="60" width="392" height="586" rx="10" fill="#000" opacity="0.58" filter="url(#blur)" transform="rotate(3 250 345)"/>
    </svg>
  `);
  const cover = await sharp(path.join(outDir, "ashes-cover.png"))
    .resize({ width: 390, height: 585, fit: "cover" })
    .rotate(3, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(base)
    .composite([
      { input: pages, left: 1050, top: 82 },
      { input: coverShadow, left: 1082, top: 86 },
      { input: cover, left: 1116, top: 112 },
    ])
    .png()
    .toFile(path.join(outDir, "home-hero-stage.png"));
}

await fs.mkdir(outDir, { recursive: true });
await writePng("ashes-cover.png", coverSvg({
  title: "PNEUMANAUTS",
  titleLines: ["PNEUMANAUTS"],
  subtitle: "DEBUT NOVEL",
  palette: ["#c4906e", "#a56e69", "#191213"],
}), 840);
await writePng("velvet-static-cover.png", coverSvg({
  title: "THE ORIGINS OF PNEUMANAUTS",
  titleLines: ["ORIGINS", "PNEUMANAUTS"],
  subtitle: "THE NOVEL",
  palette: ["#5aa0a0", "#234f56", "#111619"],
}), 840);
await writePng("glass-orchard-cover.png", coverSvg({
  title: "THE SEMI OFFICIAL SOUNDTRACK",
  titleLines: ["SEMI", "OFFICIAL", "SOUNDTRACK"],
  subtitle: "THE NOVEL",
  palette: ["#d1b86c", "#75522f", "#17120d"],
}), 840);
await writeHeroStage();
await writePng("books-eye-panel.png", booksEyeSvg(), 1400);
await writePng("quote-mountain.png", quoteMountainSvg(), 1400);
await writePng("signup-galaxy.png", galaxySvg(), 1600);
