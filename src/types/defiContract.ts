import { Contract } from 'near-api-js'

export interface DefiContract extends Contract {
  get_assets_paged(payload: { from_index: number; limit: number }): Promise<TokenEntries[]>
}

export type TokenEntries = [string, Token]
export interface Token {
  supplied: Supplied
  borrowed: Supplied
  reserved: string
  last_update_timestamp: string
  config: TokenConfig
}

export interface TokenConfig {
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

export interface Supplied {
  shares: string
  balance: string
}
