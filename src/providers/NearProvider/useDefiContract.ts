import { WalletConnection } from 'near-api-js'
import * as nearAPI from 'near-api-js'
import { DefiContract } from '#types/defiContract'
import { useMemo } from 'react'

export const defiContractName = import.meta.env.VITE_DEFI_CONTRACT

const initDefiContract = (wallet: WalletConnection): DefiContract =>
  new nearAPI.Contract(wallet.account(), defiContractName, {
    viewMethods: [
      'get_assets_paged',
      'get_assets_paged_detailed',
      'get_asset',
      'ft_metadata',
      'get_account',
    ],
    changeMethods: ['storage_deposit', 'ft_transfer', 'ft_transfer_call'],
  }) as DefiContract

interface OracleContractProps {
  wallet: WalletConnection
}
export const useDefiContract = (props: OracleContractProps) => {
  const { wallet } = props

  const contract = useMemo(() => {
    if (!wallet) return
    return initDefiContract(wallet)
  }, [wallet])

  const ready = useMemo(() => {
    return !!contract
  }, [contract])

  return {
    contract: contract!,
    ready,
  }
}
