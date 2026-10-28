# Lumen Collective — Web3 Wallet-Connect Demo

A polished, mobile-first landing page for a fictional NFT membership mint ("Lumen
Collective"), built as a portfolio demo of Web3 frontend work. The wallet connection is
real; the mint is not.

## What this is

- React 19 + Vite + Tailwind CSS v4 (via `@tailwindcss/vite`, no PostCSS config file)
- wagmi v2 + viem, using the **injected connector only** (MetaMask, Rabby, Brave Wallet, …)
- @tanstack/react-query v5 (required by `WagmiProvider`)
- No RainbowKit, no WalletConnect Cloud, no API keys, no cloud project id

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npx vite preview --port 4174   # serve the production build
```

## How the wallet connect works

- On load, the page checks for an injected wallet (`window.ethereum`). If one is present,
  **Connect Wallet** connects through wagmi's `injected()` connector. The connection is
  read-only: no signatures, no transactions.
- Once connected, the live wallet panel shows your shortened address (with a copy button),
  the current chain name (Ethereum, Base, Optimism, or Arbitrum), and your native balance,
  fetched via viem through wagmi's `useBalance` hook.
- The page **never auto-connects** on load (`reconnectOnMount={false}` on
  `WagmiProvider` in `src/main.jsx` — a `createConfig` option there would be ignored) —
  connecting is always an explicit click.
- **No wallet installed?** The panel shows a clear "No wallet detected" state and offers
  **demo mode**: a clearly labelled fake address (`0xDemo…0000`) with a demo balance and a
  persistent banner stating it is not a real connection. Demo mode is local React state —
  it never pretends to be a real connection and touches no network.

## Demo disclaimer

- **Prices and tiers are demo placeholders.** Nothing on this page is purchasable, and no
  real mint happens here — the mint button never sends a transaction.
- The page makes no verifiable claims (no sold-out counts, floor prices, or member numbers).
- Contact links in the footer are placeholders.
- All visuals are CSS/SVG; there are no remote images.
