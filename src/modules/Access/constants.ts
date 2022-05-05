import { ITabCurrency, ITabItem } from "./types";

export const tabItems: ITabItem[] = [
  {
    key: '1',
    name: 'Deposit',
    order: 1,
  },
  {
    key: '2',
    name: 'Withdraw',
    order: 2,
  },
]

export const listCurrency: ITabCurrency[] = [
  {
    name: 'ETH',
    apy: 0.322,
    image: 'ETH.png'
  },
  {
    name: 'DAI',
    apy: 0.442,
    image: 'DAI.png'
  },
  {
    name: 'USDC',
    apy: 0.276,
    image: 'USDC.png'
  },
  {
    name: 'USDT',
    apy: 0.463,
    image: 'USDT.png'
  },
  {
    name: 'WBTC',
    apy: 0.271,
    image: 'WBTC.png'
  },
  {
    name: 'UNI',
    apy: 0.24,
    image: 'UNI.png'
  },
]