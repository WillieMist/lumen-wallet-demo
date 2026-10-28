import { Gem } from './Brand.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Gem className="h-6 w-6" />
          <div>
            <p className="font-semibold">Lumen Collective</p>
            <p className="text-xs text-mist-400">A fictional collective, minted nowhere.</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-mist-400">
          <a href="#top" className="transition hover:text-white">
            X / Twitter
          </a>
          <a href="#top" className="transition hover:text-white">
            Discord
          </a>
          <a href="#top" className="transition hover:text-white">
            GitHub
          </a>
          <a href="mailto:hello@lumen.example" className="transition hover:text-white">
            hello@lumen.example
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-xs leading-relaxed text-mist-400/70 sm:px-6">
        Lumen Collective is a fictional project built as a Web3 frontend demo. This page is a
        demo and no real mint happens here: it never sends a transaction, never asks for a seed
        phrase, and never auto-connects your wallet.
      </p>
    </footer>
  )
}
