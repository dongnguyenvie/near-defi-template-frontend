import { Contract } from 'near-api-js'

export interface IDefiSmartcontract extends Contract {
  get_assets_paged(payload: { from_index: number; limit: number }): Promise<ITokenEntries[]>
}

type ITokenEntries = [string, IToken]
interface IToken {
  supplied: Supplied
  borrowed: Supplied
  reserved: string
  last_update_timestamp: string
  config: ITokenConfig
}

interface ITokenConfig {
  reserve_ratio: number
  target_utilization: number
  target_utilization_rate: string
  max_utilization_rate: string
  volatility_ratio: number
  extra_decimals: number
  can_deposit: boolean
  can_withdraw: boolean
  can_use_as_collateral: boolean
  can_borrow: boolean
}

interface Supplied {
  shares: string
  balance: string
}
