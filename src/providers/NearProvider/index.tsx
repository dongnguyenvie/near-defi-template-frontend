import 'regenerator-runtime/runtime'

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import * as nearAPI from 'near-api-js'
import { ConnectConfig, Near, WalletConnection } from 'near-api-js'

const nearConfig: ConnectConfig = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  headers: {
    'Content-Type': 'application/json',
  },
}

const initNear = async () =>
  await nearAPI.connect(
    Object.assign(
      { deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() } },
      nearConfig
    )
  )
const initWallet = (near: Near) => new nearAPI.WalletConnection(near, null)

interface INearContext {
  walletReady: boolean
  nearReady: boolean
  nearLoading: boolean
  walletLoading: boolean
  near: Near
  wallet: WalletConnection
  signIn: () => void
}
const NearContext = createContext<INearContext>({} as unknown as INearContext)
type NearProviderProps = {
  children: ReactNode
}

function NearProvider({ children }: NearProviderProps) {
  const [near, setNear] = useState<Near>()
  const [wallet, setWallet] = useState<WalletConnection>()
  const [nearLoading, setNearLoading] = useState(false)
  const [walletLoading, setWalletLoading] = useState(false)

  const nearReady = useMemo(() => {
    return !nearLoading && !!near
  }, [near, nearLoading])

  const walletReady = useMemo(() => {
    return !walletLoading && !!wallet
  }, [wallet, walletLoading])

  const connectNear = async () => {
    setNearLoading(false)
    try {
      const near = await initNear()
      setNear(near)
    } catch (error) {
      console.log('connectNear::', error)
    }
    setNearLoading(true)
  }

  const connectWallet = async () => {
    if (!near) return
    setNearLoading(false)
    try {
      const wallet = await initWallet(near)
      setWallet(wallet)
    } catch (error) {
      console.log('connectWallet::', error)
    }
    setNearLoading(true)
  }

  const signIn = () => {
    if (!walletReady) return
    wallet!.requestSignIn(
      'nolannguyen.testnet', // contract requesting access
      'Nearlend Nolan App', // optional
      'http://localhost:3000/markets?flg=success', // optional
      'http://localhost:3000/markets?flg=failure'
    )
  }

  useEffect(() => {
    connectNear()
  }, [])

  useEffect(() => {
    connectWallet()
  }, [near])

  return (
    <NearContext.Provider
      value={{
        walletReady,
        nearReady,
        nearLoading,
        walletLoading,
        near: near!,
        wallet: wallet!,
        signIn,
      }}
    >
      {children}
    </NearContext.Provider>
  )
}

const useNear = () => useContext(NearContext)

export { NearProvider, NearContext, useNear }
