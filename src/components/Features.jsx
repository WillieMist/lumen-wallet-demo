const ICONS = {
  spark: 'M12 2l2.3 7.7L22 12l-7.7 2.3L12 22l-2.3-7.7L2 12l7.7-2.3z',
  vault: 'M7 11V8a5 5 0 0 1 10 0v3M5 11h14v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9z',
  vote: 'M9 12l2 2 4-4m7-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  event: 'M7 3v3m10-3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z',
  chain: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
  shield: 'M12 3l7 3v5c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6zM9 12l2 2 4-4',
}

const FEATURES = [
  {
    icon: 'spark',
    title: 'Curated drops',
    text: 'Members get first access to limited releases from the Collective’s roster of light artists. Fewer, better drops — never a flood.',
  },
  {
    icon: 'vault',
    title: 'The collector vault',
    text: 'A token-gated archive of unreleased studies, works in progress, and past drops. Your pass is the key.',
  },
  {
    icon: 'vote',
    title: 'A say in what’s next',
    text: 'Pass holders vote on which artists and formats the Collective pursues next. Governance is part of the membership, not an afterthought.',
  },
  {
    icon: 'event',
    title: 'Events, online and off',
    text: 'Members-only streams, studio visits, and occasional in-person gatherings. Come for the art, stay for the people.',
  },
  {
    icon: 'chain',
    title: 'On-chain provenance',
    text: 'Your membership lives in your wallet, not in a database you don’t control. Portable, verifiable, yours.',
  },
  {
    icon: 'shield',
    title: 'Zero-risk rehearsal',
    text: 'This demo lets you walk the entire flow — connect, pick, mint — without spending anything or sending a transaction.',
  },
]

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-lume-400"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.2em] text-aqua-400 uppercase">Why Lumen</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        More than a JPEG.
      </h2>
      <p className="mt-3 max-w-xl text-mist-400">
        A pass is a key — to drops, to the archive, to the people making the work.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="glass rounded-2xl p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
              <Icon name={f.icon} />
            </div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-400">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
