import { useEffect, useState } from "react";

const posts = [
  {
    slug: "crash-guards",
    title: "Are aftermarket crash guards on bikes actually useful?",
    date: "Aug 2026",
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

export default function Blog() {
  const [openSlug, setOpenSlug] = useState(null);
  const openPost = posts.find((post) => post.slug === openSlug);

  useEffect(() => {
    if (!openSlug) return;
    document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
  }, [openSlug]);

  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-3xl font-extrabold text-white">Blog</h2>
        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-white/70">
          Short notes. Mostly bikes. Occasionally software, if the coffee
          allows.
        </p>

        {openPost ? (
          <article className="glass rounded-3xl p-6 sm:p-10">
            <button
              type="button"
              onClick={() => setOpenSlug(null)}
              className="mb-6 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              ← All posts
            </button>
            <p className="mb-2 text-xs tracking-wide text-[#b8ff6a] uppercase">
              {openPost.date}
            </p>
            <h3 className="mb-6 text-2xl font-extrabold text-white sm:text-3xl">
              {openPost.title}
            </h3>
            {openPost.image && (
              <img
                src={openPost.image}
                alt={openPost.imageAlt}
                className="mb-8 w-full rounded-2xl border border-white/20 object-cover"
              />
            )}
            <div className="space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {openPost.content}
            </div>
          </article>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <button
                key={post.slug}
                type="button"
                onClick={() => setOpenSlug(post.slug)}
                className="glass group flex flex-col overflow-hidden rounded-3xl text-left transition-colors hover:border-white/40"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs tracking-wide text-[#b8ff6a] uppercase">
                    {post.date}
                  </p>
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75">
                    {post.excerpt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
