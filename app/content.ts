export const navigation = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/series", label: "Series" },
  { href: "/about", label: "About" },
  { href: "/mailing-list", label: "Subscribe" },
  { href: "/contact", label: "Contact" },
] as const;

export const substackUrl = "https://pneumanauts.substack.com/";
export const substackSubscribeUrl = "https://pneumanauts.substack.com/subscribe";

export const substackSections = {
  novel: "https://pneumanauts.substack.com/s/the-novel",
  fiction: "https://pneumanauts.substack.com/s/fiction",
  essays: "https://pneumanauts.substack.com/s/essays",
} as const;

const postImages = {
  origins:
    "https://substackcdn.com/image/fetch/$s_!EmVT!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32fa6735-f2ee-48fc-aeef-e12283debb01_913x973.jpeg",
  soundtrack:
    "https://substackcdn.com/image/fetch/$s_!ozxB!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Facc56d0a-32b1-4de9-a97f-8406afd4c4dc_1588x2454.jpeg",
  sleepOrSwim:
    "https://substackcdn.com/image/fetch/$s_!ym10!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d011957-5145-4f97-ab40-86b891583a91_1280x1322.jpeg",
  wormholes:
    "https://substackcdn.com/image/fetch/$s_!SI57!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F97f62892-2e7a-410f-8b83-4bb62a4425f7_975x1148.jpeg",
  extraterrestrial:
    "https://substackcdn.com/image/fetch/$s_!ugIo!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64521f38-b269-4df6-b663-df53abbd5e96_510x736.jpeg",
} as const;

export const featuredRelease = {
  eyebrow: "Debut novel",
  title: "Pneumanauts",
  subtitle:
    "A speculative road story about spirit-seekers, stoner-doom mythology, and the hunger for meaning.",
  summary:
    "C. J. W. Armstrong's debut novel is being published by Eclogue Press, with essays, fiction, and behind-the-book notes gathered at The Pneumanaut on Substack.",
};

export const books = [
  {
    title: "The Origins of 'Pneumanauts'",
    collection: "The Novel",
    summary:
      "A long-form account of how the novel moved from early notes and rewrites to publication with Eclogue Press.",
    accent: "teal",
    href: "https://pneumanauts.substack.com/p/the-origins-of-pneumanauts",
    image: postImages.origins,
  },
  {
    title: "Pneumanauts: The (Semi) Official Soundtrack",
    collection: "The Novel",
    summary:
      "A 25-track companion for the debut novel, tuned to stoner doom, heavy psych, sludge, and space-rock atmosphere.",
    accent: "gold",
    href: "https://pneumanauts.substack.com/p/pneumanauts-the-semi-official-soundtrack",
    image: postImages.soundtrack,
  },
  {
    title: "Sleep or Swim - Pt. 1",
    collection: "Fiction",
    summary:
      "A science-fiction short story from Armstrong's fiction archive, originally published in 2021 and continued on The Pneumanaut.",
    accent: "teal",
    href: "https://pneumanauts.substack.com/p/sleep-or-swim-pt-1",
    image: postImages.sleepOrSwim,
  },
  {
    title: "Are Wormholes Stairways to Heaven?",
    collection: "Essays",
    summary:
      "A cosmic-theological essay asking what black holes, wormholes, and possible baby universes might do to our imagination of God and heaven.",
    accent: "ember",
    href: "https://pneumanauts.substack.com/p/are-wormholes-stairways-to-heaven",
    image: postImages.wormholes,
  },
  {
    title: "Extraterrestrial Evangelism?",
    collection: "Essays",
    summary:
      "A theological thought experiment about alien life, mission, salvation, humility, and the limits of human certainty.",
    accent: "gold",
    href: "https://pneumanauts.substack.com/p/extraterrestrial-evangelism",
    image: postImages.extraterrestrial,
  },
] as const;

export const series = [
  {
    title: "The Novel",
    stage: "Pneumanauts",
    summary:
      "Publication notes, influences, soundtrack entries, and behind-the-scenes essays for Armstrong's debut novel.",
    href: substackSections.novel,
  },
  {
    title: "Fiction",
    stage: "Short stories",
    summary:
      "Speculative fiction that carries The Pneumanaut's interest in faith, longing, and strange worlds into narrative form.",
    href: substackSections.fiction,
  },
  {
    title: "Essays",
    stage: "Cosmic nonfiction",
    summary:
      "Long-form nonfiction on theology, science fiction, cosmology, games, myth, technology, and the sacred.",
    href: substackSections.essays,
  },
] as const;

export const mailingListBenefits = [
  "New posts from The Pneumanaut delivered through Substack",
  "Updates on Pneumanauts, fiction, essays, and publication news",
  "Free and paid subscription options managed by Substack",
] as const;

export const contactDetails = [
  {
    label: "Primary publication",
    value: "The Pneumanaut on Substack",
  },
  {
    label: "Debut novel",
    value: "Pneumanauts, published by Eclogue Press",
  },
  {
    label: "Updates",
    value: "Subscribe on Substack for new posts and book news",
  },
] as const;
