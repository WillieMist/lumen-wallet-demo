import { useState } from 'react'
import { useAccount } from 'wagmi'

const TIERS = [
  {
    name: 'Explorer',
    price: '0.05 ETH',
    blurb: 'Start your collection and see what the Collective is about.',
    perks: ['1 membership pass', 'Access to public drops', 'Community channels'],
    popular: false,
  },
  {
    name: 'Collector',
    price: '0.15 ETH',
    blurb: 'The full membership — every perk, every drop, every door.',
    perks: ['3 membership passes', 'Collector vault access', 'Governance voting', 'Members-only events'],
    popular: true,
  },
  {
    name: 'Founder',
    price: '0.5 ETH',
    blurb: 'For the ones who want their name in the light.',
    perks: [
      '10 membership passes',
      'Everything in Collector',
      'Founder badge, named in the vault',
      'First look at artist collabs',
    ],
    popular: false,
  },
]

export default function MintTiers({ demoMode }) {
  const [note, setNote] = useState('')
  const { isConnected } = useAccount()

  const handleMint = (tierName) => {
    setNote(
      `“${tierName}” is where a real drop would submit a transaction — this demo sends nothing.`,
    )
  }

  return (
    <section id="tiers" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.2em] text-aqua-400 uppercase">Mint tiers</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Three ways in.</h2>
      <p className="mt-3 max-w-xl text-mist-400">
        Every tier mints membership passes — same collective, deeper access.
      </p>

      <div className="mt-10 grid gap-6 pt-2 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col rounded-2xl p-6 ${
              t.popular
                ? 'border border-lume-500/50 bg-gradient-to-b from-lume-500/15 to-transparent shadow-[0_12px_60px_rgba(124,92,255,0.25)]'
                : 'glass'
            }`}
          >
            {t.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-lume-500 to-aqua-400 px-3 py-1 text-xs font-semibold whitespace-nowrap text-ink-950">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="mt-1 text-sm text-mist-400">{t.blurb}</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">
              {t.price}
              <span className="ml-1 text-sm font-normal text-mist-400">per pass</span>
            </p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {t.perks.map((perk) => (
                <li key={perk} className="flex gap-2 text-sm text-mist-300">
                  <span className="text-aqua-400" aria-hidden="true">
                    ◆
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {demoMode ? (
                <button disabled className="btn-ghost w-full">
                  Demo only — no transaction sent
                </button>
              ) : isConnected ? (
                <button onClick={() => handleMint(t.name)} className="btn-primary w-full">
                  Mint {t.name}
                </button>
              ) : (
                <a href="#wallet" className="btn-ghost w-full">
                  Connect wallet to mint
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {note && <p className="mt-8 text-center text-sm text-amber-300">{note}</p>}
    </section>
  )
}
