import { WalletConnection } from 'near-api-js'
import * as nearAPI from 'near-api-js'
import { useMemo } from 'react'
import { tokenConfig } from '#utils/token'
import { useQuery } from 'react-query'
import { OracleContract } from '#types/oracleContract'
import keyBy from 'lodash/keyBy'

export const oracleContract = import.meta.env.VITE_ORACLE_CONTRACT

const assetIds = Object.keys(tokenConfig)

const initOracleContract = (wallet: WalletConnection) =>
  new nearAPI.Contract(wallet.account(), oracleContract, {
    viewMethods: ['get_price_data'],
    changeMethods: [],
  }) as OracleContract

interface OracleContractProps {
  wallet: WalletConnection
}
export const useOracleContract = (props: OracleContractProps) => {
  const { wallet } = props

  const contract = useMemo(() => {
    if (!wallet) return
    return initOracleContract(wallet)
  }, [wallet])

  const ready = useMemo(() => {
    return !!contract
  }, [contract])

  const { data: cryptoPricesData } = useQuery(
    'oracle.get_price_data',
    () => contract?.get_price_data({ asset_ids: assetIds }),
    {
      enabled: ready,
    }
  )

  const crytoPrices = useMemo(() => {
    return (cryptoPricesData?.prices || []).map((config) => {
      const multiplier = config?.price?.multiplier as unknown as number
      const price = config.price ? multiplier / Math.pow(10, 4) : 1
      let localConfig = tokenConfig[config.asset_id as keyof typeof tokenConfig] || {}
      return {
        price,
        localConfig,
        config,
        symbol: localConfig.symbol,
      }
    })
  }, [cryptoPricesData])

  const crytoPriceMap = useMemo(() => keyBy(crytoPrices, 'asset_id'), [crytoPrices])

  return {
    contract: contract!,
    crytoPrices,
    crytoPriceMap,
    ready,
  }
}
