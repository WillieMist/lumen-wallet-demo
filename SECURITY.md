# Security Policy

This is a **demo / portfolio project** — a landing page for a fictional NFT
membership mint (Lumen Collective). The wallet connection is real (read-only),
but the mint is not: this page **never sends a transaction, never asks for a
signature, and never asks for a seed phrase**.

- There are no secrets, API keys, or credentials in this repository. Wallet
  connection uses the browser's injected provider only (no WalletConnect
  Cloud project id, no third-party keys). If you find anything that looks
  like a secret, please report it so we can remove it.
- The demo-mode address (`0xDemo…0000`) is clearly labelled as a demo and is
  never presented as a real connection.
- If you find a security issue, please open a GitHub issue describing it
  (without posting any exploit that affects other people). For a sensitive
  issue, contact the repository owner directly instead.
- Dependencies are kept up to date on a best-effort basis; `npm audit` is the
  first check for any reported dependency vulnerability.
