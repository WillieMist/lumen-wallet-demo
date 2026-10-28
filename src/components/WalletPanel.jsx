import { useState } from 'react'
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { chains } from '../wagmi'
import { Gem } from './Brand.jsx'

function shorten(address) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`
}

export default function WalletPanel({ demoMode, onEnterDemo, onExitDemo }) {
  const { address, isConnected, chainId } = useAccount()
  const { connect, connectors, isPending, error } = useConnect()
  const { disconnect } = useDisconnect()

  const hasInjected =
    typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
  // Some injected wallets never set window.ethereum and only announce via
  // EIP-6963; wagmi lists those as injected connectors whose id is the wallet's
  // rdns. Trust the connector list over the bare window.ethereum check and
  // prefer a named discovery match over the generic targetless connector.
  const namedInjected = connectors.find((c) => c.type === 'injected' && c.id !== 'injected')
  const injectedConnector = namedInjected ?? connectors.find((c) => c.type === 'injected')
  const hasWallet = hasInjected || namedInjected !== undefined
  const chain = chains.find((c) => c.id === chainId)

  // Demo mode never reads from a network — its view is purely local state.
  const balance = useBalance({
    address,
    query: { enabled: isConnected && !demoMode && !!chain },
  })

  const status = demoMode ? 'demo' : isConnected ? 'live' : 'off'
  const statusLabel = demoMode ? 'Demo mode' : isConnected ? 'Connected' : 'Not connected'

  return (
    <section id="wallet" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14">
      <div className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-6 shadow-[0_20px_80px_rgba(124,92,255,0.16)] sm:p-8">
        <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Gem className="h-9 w-9" />
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Live wallet panel</h2>
                <p className="text-xs text-mist-400">
                  Read-only — this page never signs or sends anything.
                </p>
              </div>
            </div>
            <StatusPill tone={status}>{statusLabel}</StatusPill>
          </div>

          {demoMode ? (
            <DemoView onExitDemo={onExitDemo} />
          ) : isConnected ? (
            <ConnectedView
              address={address}
              chain={chain}
              chainId={chainId}
              balance={balance}
              onDisconnect={() => disconnect()}
            />
          ) : (
            <NotConnectedView
              hasWallet={hasWallet}
              connector={injectedConnector}
              isPending={isPending}
              error={error}
              onConnect={connect}
              onEnterDemo={onEnterDemo}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function StatusPill({ tone, children }) {
  const tones = {
    off: 'border-white/15 bg-white/5 text-mist-400',
    live: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
    demo: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  }
  const dots = {
    off: 'bg-mist-400',
    live: 'bg-emerald-400',
    demo: 'bg-amber-400',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[tone]}`} />
      {children}
    </span>
  )
}

function Row({ label, mono = false, children }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3">
      <span className="shrink-0 text-sm text-mist-400">{label}</span>
      <span className={`flex items-center gap-2 text-right text-sm ${mono ? 'font-mono' : ''}`}>
        {children}
      </span>
    </div>
  )
}

function ConnectedView({ address, chain, chainId, balance, onDisconnect }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard unavailable — the full address is still visible in the wallet.
    }
  }

  return (
    <div className="mt-6 space-y-3">
      <Row label="Address" mono>
        {shorten(address)}
        <button
          onClick={copy}
          className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-mist-400 transition hover:border-white/30 hover:text-white"
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </Row>
      <Row label="Network">
        {chain ? (
          chain.name
        ) : (
          <div className="min-w-0">
            Unknown network (chain id {chainId})
            <span className="block text-xs text-mist-400">
              This demo understands Ethereum, Base, Optimism, and Arbitrum.
            </span>
          </div>
        )}
      </Row>
      <Row label="Native balance" mono>
        {!chain || balance.isError
          ? 'Unavailable'
          : balance.data
            ? `${balance.data.formatted} ${balance.data.symbol}`
            : '…'}
      </Row>
      <p className="pt-1 text-xs text-mist-400">
        Connected read-only via your injected wallet. No signatures, no transactions — your keys
        never leave your wallet.
      </p>
      <button onClick={onDisconnect} className="btn-ghost">
        Disconnect
      </button>
    </div>
  )
}

function DemoView({ onExitDemo }) {
  return (
    <div className="mt-6 space-y-3">
      <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
        Demo mode — this is <span className="font-semibold">not</span> a real wallet connection.
        Nothing was signed, sent, or read from any network.
      </div>
      <Row label="Address" mono>
        0xDemo…0000
      </Row>
      <Row label="Network">None — demo mode</Row>
      <Row label="Balance" mono>
        2.4500 ETH <span className="font-sans text-xs text-mist-400">(demo value)</span>
      </Row>
      <p className="text-xs text-mist-400">
        Demo mode exists so you can rehearse the mint flow without a wallet. Exit any time.
      </p>
      <button onClick={onExitDemo} className="btn-ghost">
        Exit demo mode
      </button>
    </div>
  )
}

function NotConnectedView({ hasWallet, connector, isPending, error, onConnect, onEnterDemo }) {
  return (
    <div className="mt-6 space-y-4">
      {hasWallet ? (
        <>
          <p className="text-sm text-mist-400">
            An injected wallet was detected (MetaMask or similar). Connecting is read-only.
          </p>
          <button
            onClick={() => connector && onConnect({ connector })}
            disabled={isPending || !connector}
            className="btn-primary"
          >
            {isPending ? 'Connecting…' : 'Connect Wallet'}
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3">
            <button disabled className="btn-primary">
              No wallet detected
            </button>
            <button onClick={onEnterDemo} className="btn-ghost">
              Try demo mode
            </button>
          </div>
          <p className="text-sm text-mist-400">
            Install MetaMask or any injected wallet to connect for real — or rehearse the whole
            flow in demo mode, clearly labelled, with nothing sent.
          </p>
        </>
      )}
      {error && <p className="text-sm text-red-400">Connection failed: {error.message}</p>}
    </div>
  )
}
