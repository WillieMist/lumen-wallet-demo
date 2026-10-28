const FAQS = [
  {
    q: 'Do I need a wallet to use this page?',
    a: 'No. If you don’t have one, click “Try demo mode” in the wallet panel — you’ll get a clearly labelled demo address and balance so you can see the whole flow. Nothing is installed, signed, or sent.',
  },
  {
    q: 'Which wallets are supported?',
    a: 'Any injected browser wallet — MetaMask, Rabby, Brave Wallet, and others. This demo deliberately skips WalletConnect and cloud services, so there are no API keys involved.',
  },
  {
    q: 'Which chains does it work on?',
    a: 'The page reads whichever network your wallet is currently on and understands Ethereum, Base, Optimism, and Arbitrum. It never asks you to switch networks.',
  },
  {
    q: 'Is this a real mint?',
    a: 'No. This page is a portfolio demo. It never requests a signature and never submits a transaction — the mint button is a walkthrough of what a real mint would feel like.',
  },
  {
    q: 'Will I pay gas?',
    a: 'No. Because nothing is ever submitted to a chain, no gas is ever spent. Connecting your wallet is free, and demo mode doesn’t touch your funds at all.',
  },
  {
    q: 'What about refunds?',
    a: 'Nothing is purchasable here, so there is nothing to refund. The page exists to demonstrate the frontend flow, not to sell anything.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.2em] text-aqua-400 uppercase">FAQ</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Honest answers.</h2>
      <div className="mt-8 space-y-3">
        {FAQS.map((item) => (
          <details key={item.q} className="glass group rounded-2xl px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {item.q}
              <span
                className="text-lg text-lume-400 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-mist-400">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
