import { ITabCurrency, ITabItem } from './types'

export const BALANCE_TYPE = {
  DEPOSIT: 'Wallet Balance',
  WITHDRAW: 'Available Balance',
}

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
    image: 'ETH.png',
    isPermission: true,
    price: '2689.21',
  },
  {
    name: 'DAI',
    apy: 0.442,
    image: 'DAI.png',
    isPermission: false,
    price: '123.21',
  },
  {
    name: 'USDC',
    apy: 0.276,
    image: 'USDC.png',
    isPermission: false,
    price: '456.21',
  },
  {
    name: 'USDT',
    apy: 0.463,
    image: 'USDT.png',
    isPermission: false,
    price: '456.21',
  },
  {
    name: 'WBTC',
    apy: 0.271,
    image: 'WBTC.png',
    isPermission: false,
    price: '456.21',
  },
  {
    name: 'UNI',
    apy: 0.24,
    image: 'UNI.png',
    isPermission: false,
    price: '456.21',
  },
]

export const useInfoBalance = {
  balance: {
    eth: 12345.678,
    dai: 5555.666,
  },
  available: {
    eth: 88.99,
    dai: 99.88,
  }
}
