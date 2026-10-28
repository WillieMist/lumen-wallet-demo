import { useAccount } from 'wagmi'
import { Gem } from './Brand.jsx'

export default function Hero({ onTryDemo }) {
  // Demo mode only exists for the fully disconnected state; hide its
  // affordances while a connect request is pending or a wallet is connected,
  // so the two can never be conflated.
  const { status } = useAccount()
  const showDemo = status === 'disconnected'

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-lume-500/30 bg-lume-500/10 px-3 py-1 text-xs font-medium tracking-wide text-lume-400">
            NFT membership mint · portfolio demo
          </p>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            One membership for <span className="text-gradient">curated drops</span>, collector
            access, and a collective that shows up.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mist-400">
            Lumen Collective mints membership passes that unlock artist drops, a token-gated
            vault, and members-only events. Connect your wallet to see the flow live — or
            rehearse it in demo mode, zero risk.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#wallet" className="btn-primary">
              Connect Wallet
            </a>
            {showDemo && (
              <a href="#wallet" onClick={onTryDemo} className="btn-ghost">
                Try demo mode →
              </a>
            )}
          </div>
          {showDemo && (
            <p className="mt-5 text-sm text-mist-400">
              No wallet yet? Try demo mode — no real transaction happens on this page.
            </p>
          )}
        </div>

        {/* CSS/SVG-only visual: the Lumen pass */}
        <div className="relative mx-auto hidden w-full max-w-sm lg:block" aria-hidden="true">
          <div
            className="glass-strong animate-rise relative rounded-3xl p-6 shadow-[0_20px_80px_rgba(124,92,255,0.22)]"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="flex items-center justify-between text-xs tracking-widest text-mist-300">
              <span>LUMEN PASS</span>
              <span className="rounded-full border border-white/10 px-2 py-0.5 tracking-normal">
                DEMO
              </span>
            </div>
            <Gem className="mx-auto my-8 h-28 w-28 drop-shadow-[0_0_35px_rgba(124,92,255,0.55)]" />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-mist-300">Holder</span>
                <span className="font-mono">0xYou…soon</span>
              </div>
              <div className="flex justify-between rounded-lg bg-white/5 px-3 py-2">
                <span className="text-mist-300">Perks</span>
                <span>Drops · Vault · Events</span>
              </div>
            </div>
          </div>
          <div className="glass absolute -top-4 -left-8 rounded-xl px-3 py-2 text-xs text-mist-300 shadow-lg">
            ◆ On-chain provenance
          </div>
          <div className="glass absolute -right-6 -bottom-4 rounded-xl px-3 py-2 text-xs text-mist-300 shadow-lg">
            ✦ Governance ready
          </div>
        </div>
      </div>
    </section>
  )
}
