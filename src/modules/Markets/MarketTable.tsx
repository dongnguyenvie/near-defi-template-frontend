import { Supplied, TokenConfig } from '#types/defiContract'
import { cashFormatter } from '#utils/formatter'
import { Button } from '@chakra-ui/react'

const HEADERS = [
  'Asset',
  'Deposit Market($)',
  'Deposit Total APY',
  'Borrow Market($)',
  'Borrow Total APY',
  'Liquidity($)',
  'Action',
]
interface Assets {
  id: string
  name: string
  symbol: string
  nameUsd: string
  thumbnail: string
  decimals: number
  suppliedBalance: any
  borrowedBalance: any
  totalSupplied: number
  totalBorrowed: number
  priceUsd: number
  reserved: string
  last_update_timestamp: string
  config: TokenConfig
}

interface MarketTableProps {
  assets: Assets[]
}
export function MarketTable({ assets }: MarketTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {HEADERS.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assets.map((item, index) => (
            <tr
              key={index}
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap capitalize"
              >
                {item.symbol}
              </th>
              <td className="px-6 py-4 text-right">
                <div>
                  <span>{cashFormatter(item.totalSupplied)}</span>
                  <p className="text-neutral-700">${cashFormatter(item.suppliedBalance)}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <span>{cashFormatter(item.totalBorrowed)}</span>
                  <p className="text-neutral-700">${cashFormatter(item.borrowedBalance)}</p>
                </div>
              </td>
              <td className="px-6 py-4">Borrow Market($)</td>
              <td className="px-6 py-4">6.19% Borrow Total APY</td>
              <td className="px-6 py-4">$ 4.868M Liquidity($)</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-center">
                  <Button colorScheme="pink" size="xs">
                    Deposit
                  </Button>
                  <Button colorScheme="purple" size="xs" className="ml-1">
                    Borrow
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
