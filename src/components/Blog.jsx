import { useEffect, useState } from "react";

export const posts = [
  {
    slug: "crash-guards",
    title: "Are aftermarket crash guards on bikes actually useful?",
    date: "Aug 2026",
    readTime: "4 min read",
    excerpt:
      "A cheaper way to not get hurt — until a foot gets tangled in the hoop. My take, plus a stationary drop that leaked the clutch.",
    content: (
      <>
        <p>
          The crash guard, according to me, is a cheaper option to make sure we
          don&apos;t get hurt. That said, if a foot gets entangled in the crash
          guard, that is a different issue. If the legs get tangled inside the
          hoop, then God only can help us.
        </p>
        <p>
          In a skid, the handlebar is usually tilted. If it is tilted to the
          left, most likely we are bound to fall on the right — and in that
          case it may not even touch the tank at all. The impact that actually
          bothers me: the legs can get stuck, and the tank can still need a
          paint job.
        </p>
        <h3 className="mt-8 mb-3 text-lg font-bold text-white">
          A stationary drop
        </h3>
        <p>
          My bike once fell to my left while stationary, for some godforsaken
          reason. Nothing absolutely happened to the tank. I still had a leak
          from the clutch assembly, thanks to the footrest which got tilted and
          hit the assembly. That was pretty easy to get fixed.
        </p>
        <h3 className="mt-8 mb-3 text-lg font-bold text-white">
          So why have one?
        </h3>
        <p>
          Secondly, it protects the engine in a fall. Imagine the engine hitting
          a brick or a stone — which of course are very common in India.
        </p>
        <p>
          Again, this is what I can think of as the reason for having a crash
          guard. Tell me if my thinking is wrong.
        </p>
      </>
    ),
  },
  {
    slug: "useless-accessories",
    title: "How adding useless accessories on bikes makes it useless",
    date: "Aug 2026",
    readTime: "5 min read",
    excerpt:
      "Panniers, top box, crash bars, tank bag, tall screen — at some point the bike stops being a bike and becomes a cupboard on two wheels.",
    image: "/images/useless-accessories.png",
    imageAlt:
      "Adventure motorcycle loaded with aftermarket luggage, crash guards, and touring accessories",
    content: (
      <>
        <p>
          There is a special kind of bike that never leaves the showroom floor
          in your head: orange tank, knobby tyres, ready for a Sunday ghat. Then
          we start bolting things on. Side cases. A top box. A tank bag. Engine
          guards. A headlight grille. Handguards. A skid plate. A windshield tall
          enough to need its own pincode.
        </p>
        <p>
          Each part has a story. &quot;Touring.&quot; &quot;Protection.&quot;
          &quot;Just in case.&quot; Stack them together and the motorcycle
          becomes a cupboard that happens to have an engine. You feel every kilo
          in traffic. You do not filter the same way. You do not park the same
          way. You definitely do not pick it up the same way when it tips over
          at a signal — which, in India, it will.
        </p>
        <p>
          The accessories are not always useless one by one. The pile is. A
          crash guard that saves a fairing on a slow drop can also catch a boot.
          Luggage that is brilliant on a 600 km day is dead weight for a 6 km
          grocery run. A mesh over the headlight looks &quot;adventure&quot; and
          then you ride at night in rain and wonder why you paid extra to make
          the lamp worse.
        </p>
        <p>
          If the bike needs a forklift of aluminium before you trust it on the
          road, maybe the problem is not the stock motorcycle. Maybe we are
          dressing it until it cannot do the one job it had: be light enough,
          simple enough, and honest enough to ride.
        </p>
      </>
    ),
  },
];

export function BlogPage({ initialSlug, onNavigateHome, onSelectPost }) {
  const [openSlug, setOpenSlug] = useState(initialSlug || null);
  const openPost = posts.find((post) => post.slug === openSlug);

  useEffect(() => {
    setOpenSlug(initialSlug || null);
  }, [initialSlug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [openSlug]);

  function handleSelect(slug) {
    setOpenSlug(slug);
    if (onSelectPost) onSelectPost(slug);
  }

  function handleBackToAll() {
    setOpenSlug(null);
    if (onSelectPost) onSelectPost(null);
  }

  return (
    <section className="min-h-screen px-4 pt-28 pb-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumbs matching portfolio.waitgroup.dev/blogs/ */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
          <button
            type="button"
            onClick={onNavigateHome}
            className="transition-colors hover:text-[#b8ff6a]"
          >
            Home
          </button>
          <span>/</span>
          {openPost ? (
            <>
              <button
                type="button"
                onClick={handleBackToAll}
                className="transition-colors hover:text-[#b8ff6a]"
              >
                Blogs
              </button>
              <span>/</span>
              <span className="truncate text-white/90 max-w-[240px] sm:max-w-md">
                {openPost.title}
              </span>
            </>
          ) : (
            <span className="text-white">Blogs</span>
          )}
        </nav>

        {openPost ? (
          <article className="glass rounded-[2rem] p-6 sm:p-12 shadow-2xl">
            <button
              type="button"
              onClick={handleBackToAll}
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#b8ff6a] transition-colors hover:underline"
            >
              ← Back to all blogs
            </button>

            <header className="mb-8">
              <h1 className="mb-3 text-2xl font-extrabold text-white sm:text-4xl leading-tight">
                {openPost.title}
              </h1>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <span>{openPost.date}</span>
                <span>•</span>
                <span>{openPost.readTime}</span>
              </div>
            </header>

            {openPost.image && (
              <img
                src={openPost.image}
                alt={openPost.imageAlt || ""}
                className="mb-8 w-full rounded-2xl border border-white/20 object-cover max-h-[420px]"
              />
            )}

            <div className="space-y-4 text-base leading-relaxed text-white/85">
              {openPost.content}
            </div>

            <footer className="mt-12 pt-8 border-t border-white/15">
              <button
                type="button"
                onClick={handleBackToAll}
                className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                ← Back to all blogs
              </button>
            </footer>
          </article>
        ) : (
          <div>
            <header className="mb-8">
              <h1 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
                Blogs
              </h1>
              <p className="text-sm text-white/65 sm:text-base">
                Thoughts, technical deep dives, and notes by Rahul Pareek.
              </p>
            </header>

            {/* List of articles styled like portfolio.waitgroup.dev/blogs/ */}
            <div className="space-y-5">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => handleSelect(post.slug)}
                  className="glass group cursor-pointer rounded-2xl p-6 transition-all duration-200 hover:border-white/40 hover:-translate-y-0.5"
                >
                  <header className="mb-2">
                    <h2 className="text-xl font-bold text-white transition-colors group-hover:text-[#b8ff6a] sm:text-2xl">
                      {post.title}
                    </h2>
                  </header>
                  <p className="mb-4 text-sm leading-relaxed text-white/75">
                    {post.excerpt}
                  </p>
                  <footer className="flex items-center gap-3 text-xs text-white/50">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span className="ml-auto font-medium text-[#b8ff6a] opacity-0 transition-opacity group-hover:opacity-100">
                      Read article →
                    </span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogPage;
