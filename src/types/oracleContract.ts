import { Contract } from 'near-api-js'

export interface OracleContract extends Contract {
  get_price_data(payload?: { asset_ids: string[] }): Promise<CryptoPrices>
}

interface CryptoPrices {
  timestamp: string
  recency_duration_sec: number
  prices: CrytoPrice[]
}

interface CrytoPrice {
  asset_id: string
  price?: PriceConfig
}

interface PriceConfig {
  multiplier: string
  decimals: number
}
