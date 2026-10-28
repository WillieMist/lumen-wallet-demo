import { Gem } from './Brand.jsx'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Gem className="h-7 w-7" />
          <span className="font-semibold tracking-tight">Lumen Collective</span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-6 text-sm text-mist-400 md:flex">
            <a href="#wallet" className="transition hover:text-white">
              Wallet
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#tiers" className="transition hover:text-white">
              Tiers
            </a>
            <a href="#how" className="transition hover:text-white">
              How it works
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>
          <span className="rounded-full border border-aqua-400/30 bg-aqua-400/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-aqua-400">
            DEMO — no real mint
          </span>
        </div>
      </div>
    </header>
  )
}
