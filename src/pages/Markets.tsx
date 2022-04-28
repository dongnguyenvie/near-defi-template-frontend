import { useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useNear } from '#providers/NearProvider'
import { tokenConfig } from '#utils/token'
import { MarketTable } from '#modules/Markets/MarketTable'
import { balanceWithDecimalFormatter } from '#utils/formatter'
import keyBy from 'lodash/keyBy'

export default function Markets() {
  const { defiContract, oracleContract } = useNear()
  const { contract, ready } = defiContract
  const { crytoPriceMap } = oracleContract
  const { data: assetsPagedData } = useQuery(
    'defi.get_assets_paged',
    () => contract.get_assets_paged({ from_index: 0, limit: 10 }),
    {
      enabled: ready,
    }
  )

  const { data: assetsAPYPagedData } = useQuery(
    'defi.get_assets_paged_detailed',
    () => contract.get_assets_paged_detailed({ from_index: 0, limit: 10 }),
    {
      enabled: ready,
    }
  )

  const assetsAPYMap = useMemo(() => {
    return keyBy(assetsAPYPagedData || [], 'token_id')
  }, [assetsAPYPagedData])

  const assets = useMemo(() => {
    return (assetsPagedData || []).map((item) => {
      const [id, token] = item
      const config = tokenConfig[id as keyof typeof tokenConfig] || {}
      const { name, symbol, nameUsd, thumbnail, decimals } = config
      const suppliedBalance = balanceWithDecimalFormatter(token?.supplied.balance, decimals)
      const borrowedBalance = balanceWithDecimalFormatter(token?.borrowed.balance, decimals)
      const priceUsd = crytoPriceMap[config.nameUsd]?.price || 1
      const totalSupplied = suppliedBalance * priceUsd
      const totalBorrowed = borrowedBalance * priceUsd
      const apyInfo = assetsAPYMap[id] || {}
      const borrowAPY = (apyInfo.borrow_apy || 0) as number
      const supplyAPY = (apyInfo.supply_apy || 0) as number

      return {
        ...token,
        id: id,
        name,
        symbol,
        nameUsd,
        thumbnail,
        decimals,
        suppliedBalance,
        borrowedBalance,
        totalSupplied,
        totalBorrowed,
        priceUsd,
        borrowAPY,
        supplyAPY,
      }
    })
  }, [assetsPagedData, crytoPriceMap, assetsAPYMap])

  return (
    <>
      <div className="flex justify-around">
        <Box
          h="130px"
          color="white"
          w="49%"
          className="flex rounded-3xl bg-pink-200 p-4 flex-col justify-between py-6"
        >
          <p className="text-neutral-700">Deposit Market Size</p>
          <span className="text-4xl font-bold text-pink-700">$ 25,750,426.95</span>
        </Box>
        <Box
          h="130px"
          color="white"
          w="49%"
          className="flex rounded-3xl bg-violet-100 p-4 flex-col justify-between py-6"
        >
          <p className="text-neutral-700">Borrow Market Size</p>
          <span className="text-4xl font-bold text-purple-800">$ 25,750,426.95</span>
        </Box>
      </div>
      <div className="mt-5">
        <div className="py-2 flex justify-between">
          <span className="text-lg font-bold">Markets</span>
          <span>
            <input className="form-control block w-full  px-3 py-1.5     text-base   font-normal    text-gray-700   bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition  ease-in-out   m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </span>
        </div>
        <MarketTable assets={assets} />
      </div>
    </>
  )
}
