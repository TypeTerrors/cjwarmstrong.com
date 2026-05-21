import Link from "next/link";

const highlights = [
  "Next.js App Router",
  "Vercel-ready deployment",
  "Search indexing basics",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10">
      <nav className="flex items-center justify-between py-4 text-sm text-slate-300">
        <Link className="font-semibold tracking-wide text-white" href="/">
          CJW Armstrong
        </Link>
        <a
          className="rounded-full border border-white/15 px-4 py-2 transition hover:border-sky-300/60 hover:text-sky-100"
          href="mailto:hello@cjwarmstrong.com"
        >
          Contact
        </a>
      </nav>

      <section className="flex flex-1 items-center py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Website Starter
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              A clean foundation for your new site.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This project is ready for content, pages, deployment on Vercel,
              and Google indexing through a generated sitemap and robots file.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-sky-300 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-sky-200"
                href="#next-steps"
              >
                Start building
              </a>
              <a
                className="rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:border-sky-300/60"
                href="https://vercel.com/new"
                rel="noreferrer"
                target="_blank"
              >
                Deploy on Vercel
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-sky-950/30 backdrop-blur">
            <p className="text-sm font-medium text-slate-300">Included setup</p>
            <ul className="mt-5 space-y-4">
              {highlights.map((item) => (
                <li
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-slate-100"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="mb-10 rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-slate-300"
        id="next-steps"
      >
        <h2 className="text-2xl font-semibold text-white">Next steps</h2>
        <p className="mt-3 leading-7">
          Replace this starter copy with your actual site content, then connect
          the repository to Vercel. Point your Cloudflare DNS records to Vercel
          after adding the domain in your Vercel project settings.
        </p>
      </section>
    </main>
  );
}
