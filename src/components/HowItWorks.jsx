const STEPS = [
  {
    n: '01',
    title: 'Connect your wallet',
    text: 'Click “Connect Wallet” and approve the read-only connection in your injected wallet. No wallet? Demo mode walks you through the same flow.',
  },
  {
    n: '02',
    title: 'Pick a tier',
    text: 'Explorer, Collector, or Founder — each tier is a different number of passes and a deeper slice of the Collective.',
  },
  {
    n: '03',
    title: 'Mint',
    text: 'This is where a real drop would submit a transaction. Here, the mint button never sends anything — it exists so you can rehearse the moment.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.2em] text-aqua-400 uppercase">
        How it works
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Three steps, under a minute.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="glass rounded-2xl p-6">
            <span className="text-gradient text-3xl font-semibold">{s.n}</span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-400">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
