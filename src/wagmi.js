import { http, createConfig } from 'wagmi'
import { arbitrum, base, mainnet, optimism } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

// Chains the demo understands. The page only *reads* from your wallet —
// it never asks you to switch networks, sign a message, or send a transaction.
export const chains = [mainnet, base, optimism, arbitrum]

export const config = createConfig({
  chains,
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
})
