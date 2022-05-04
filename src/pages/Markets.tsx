import { useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useNear } from '#providers/NearProvider'
import { tokenConfig } from '#utils/token'
import { MarketTable } from '#modules/Markets/MarketTable'
import { balanceWithDecimalFormatter } from '#utils/formatter'
import { Title } from '#components/Title'
import keyBy from 'lodash/keyBy'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <Title title="Markets" />
          <div className="w-[240px] h-[38px] relative">
            <input className="w-full h-[38px] text-sm font-medium rounded-[10px] outline outline-2	hover:outline-pink-500 outline-gray-300 px-[30px]" />
            <span className="absolute top-1/2 left-2 -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
        <MarketTable assets={assets} />
      </div>
    </>
  )
}
