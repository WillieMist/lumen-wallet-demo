import { useState } from 'react'
import { useAccount } from 'wagmi'
import Faq from './components/Faq.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import MintTiers from './components/MintTiers.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import WalletPanel from './components/WalletPanel.jsx'

export default function App() {
  // Demo mode is a purely local, clearly-labelled simulation for visitors
  // without an injected wallet. It never touches wagmi, an RPC, or a network.
  const [demoMode, setDemoMode] = useState(false)
  const { status } = useAccount()

  // The three panel states (real connection / no wallet / demo) stay mutually
  // exclusive. Demo may only be entered from a fully disconnected state — not
  // while a connect request is still pending — so a wallet approving in its
  // popup can never land underneath the demo view.
  const enterDemo = () => {
    if (status === 'disconnected') setDemoMode(true)
  }

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-ink-950">
      {/* Ambient background: two slow gradient blobs + a fading dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-[70%] rounded-full bg-lume-500/20 blur-[120px]" />
        <div className="animate-blob-slow absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-aqua-400/10 blur-[120px]" />
        <div className="dot-grid absolute inset-x-0 top-0 h-[52rem]" />
      </div>

      <div className="relative">
        <SiteHeader />
        <main>
          <Hero onTryDemo={enterDemo} />
          <WalletPanel
            demoMode={demoMode}
            onEnterDemo={enterDemo}
            onExitDemo={() => setDemoMode(false)}
          />
          <Features />
          <MintTiers demoMode={demoMode} />
          <HowItWorks />
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  )
}
