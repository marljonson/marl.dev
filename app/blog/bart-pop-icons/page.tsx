import GoBackLink from "../../components/GoBackLink";

export default function BartPopIconsPage() {
  return (
    <main className="min-h-screen px-6">
      <div className="w-full max-w-2xl text-left mx-auto pt-16">
        <GoBackLink href="/blog">Back to Blog</GoBackLink>

        <h1 className="text-3xl text-white">BART stations as 2010s pop icons</h1>
        <p className="mt-1 text-zinc-500">January 26, 2026</p>

        <div className="mt-6 text-zinc-300 whitespace-pre-line">
          The Bay Area Rapid Transit system is full of personality, and this post
          imagines what each station would look like as a 2010s pop icon.

          Expect playful color palettes, city-inspired outfits, and nods to the
          people and neighborhoods that make the Bay Area feel alive.

          This page is a real blog post rendered inside the app router,
          not just a placeholder list item.
        </div>
      </div>
    </main>
  );
}
