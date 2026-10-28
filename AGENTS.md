# AGENTS.md — web3-wallet-demo

Project instructions for future coding sessions on this repo. Read before changing anything.

## What this is

A portfolio demo: landing page for "Lumen Collective", a fictional NFT membership mint.
Real wallet connection, zero real transactions — ever.

## Stack

- React 19 + Vite (JavaScript, not TS) + Tailwind CSS v4 via `@tailwindcss/vite`.
  No PostCSS or tailwind config files — theme tokens and keyframes live in `src/index.css`
  under `@theme`.
- wagmi v2 + viem, **injected connector only**. No RainbowKit / WalletConnect / API keys.
- @tanstack/react-query v5 (required by `WagmiProvider`).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build; must pass before finishing any change
- `npx vite preview --port 4174` — serve the built app for a smoke test

## Hard rules (do not break)

- Never send a real transaction, never request a signature, never ask for a seed phrase.
- Never auto-connect on page load (`reconnectOnMount={false}` on `WagmiProvider` in
  `src/main.jsx`; it is a provider prop, not a `createConfig` option).
- Demo mode must stay clearly labelled as a demo (`0xDemo…0000`), never presented as a
  real connection. In demo mode the mint button reads "Demo only — no transaction sent".
- No invented verifiable claims (member counts, floor prices, sold-out stats).
- Mobile-first and responsive; respect `prefers-reduced-motion` (global override at the
  bottom of `src/index.css`).
- No remote/hotlinked images — CSS/SVG only.
- Tier prices are placeholders; that disclaimer lives in README.md, not on the page.

## Layout map

- `src/wagmi.js` — wagmi config, supported chains (mainnet / base / optimism / arbitrum),
  injected connector, `reconnectOnMount: false`.
- `src/App.jsx` — section order: Hero → WalletPanel → Features → MintTiers → HowItWorks →
  Faq → Footer. Demo-mode state lives here and is passed down.
- `src/components/WalletPanel.jsx` — the centerpiece: real-connect / no-wallet / demo states,
  address + chain + balance readout. `useBalance` is only enabled when the connected chain is
  one the config knows.
- `src/components/Brand.jsx` — shared gem logo (useId keeps SVG gradient ids unique).
- Section components are self-contained; keep copy honest and specific. Shared button
  styles are `.btn-primary` / `.btn-ghost` in `src/index.css`.
