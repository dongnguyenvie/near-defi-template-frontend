import { Supplied, TokenConfig } from '#types/defiContract'
import { cashFormatter, percentFormatter } from '#utils/formatter'
import { Button, Image } from '@chakra-ui/react'

const HEADERS = [
  {
    name: 'Asset',
    className: 'text-left',
  },
  {
    name: 'Deposit Market($)',
  },
  {
    name: 'Deposit Total APY',
  },
  {
    name: 'Borrow Market($)',
  },
  {
    name: 'Borrow Total APY',
  },
  {
    name: 'Liquidity($)',
  },
  {
    name: 'Action',
  },
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
  borrowAPY: number
  supplyAPY: number
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
              <th key={index} scope="col" className={`px-6 py-3 ${header.className}`}>
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assets.map((item, index) => (
            <tr
              key={index}
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 hover:opacity-80"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap capitalize"
              >
                <div className="flex items-center">
                  <Image src={item.thumbnail} w="40px" />
                  <div className="ml-1 flex flex-col justify-start text-left">
                    <span className='text-xl'>{item.symbol}</span>
                    <span className='text-xs text-gray-500'>{item.name}</span>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4 text-right">
                <div>
                  <span>{cashFormatter(item.totalSupplied)}</span>
                  <p className="text-neutral-700">${cashFormatter(item.suppliedBalance)}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <span>{percentFormatter.format(item.supplyAPY)}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <span>{cashFormatter(item.totalBorrowed)}</span>
                  <p className="text-neutral-700">${cashFormatter(item.borrowedBalance)}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <span>{percentFormatter.format(item.borrowAPY)}</span>
                </div>
              </td>
              <td className="px-6 py-4">$ ...</td>
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
