import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IUsedRatioProps } from './types'

const mockAPY = {
  availableAmount: '0',
  depositAPY: '2.98%',
  depositAmount: '0',
  marketLiquidity: '1.685K',
  maximumLTVRatio: '80%',
  miningAPY: '0.17%',
}
export const UsedRatio = () => {
  const {
    availableAmount,
    depositAPY,
    depositAmount,
    marketLiquidity,
    maximumLTVRatio,
    miningAPY,
  }: IUsedRatioProps = mockAPY

  return (
    <div className="bg-pink-500 relative rounded-3xl w-full lg:w-[344px] h-[497px] mt-[64px]">
      <div className="bg-white rounded-3xl absolute top mt-1 w-full lg:w-[344px] h-[497px] px-8 pt-10 pb-[22px]">
        <div className="flex items-stretch border-dotted border-b-2 pb-10">
          <div className="image mr-4">
            <img
              className="w-[72px] rounded-xl"
              src="https://wepiggy.static.fortop.site/app/static/lowRisk.aa37608b.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-sm text-gray-400">
              Used Ratio
              <span className="pl-1">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
            </h3>
            <h3 className="text-lg text-green-500 mt-[2px]">{availableAmount}%</h3>
            <div className="w-full rounded-full h-1.5 bg-gray-300 relative">
              <div className="bg-pink-600 h-1.5 rounded-full w-[80%]"></div>
              <div className="max absolute left-[80%] -top-2 -ml-1">
                <div className="w-0 h-0 border-4 border-solid border-t-gray-800 border-l-transparent border-r-transparent border-b-transparent"></div>
              </div>
              <div className="max absolute left-[80%] bottom-4 -ml-1 -translate-x-[64%]">
                <h3 className="text-xs text-gray-400 border-dotted border-b-2 leading-none">Max</h3>
              </div>
              <div className="max absolute left-[100%] -bottom-2 -ml-1">
                <div className="w-0 h-0 border-4 border-solid border-b-gray-800 border-l-transparent border-r-transparent border-t-transparent"></div>
              </div>
              <div className="max absolute left-[100%] -bottom-6 -ml-1 -translate-x-[86%]">
                <h3 className="text-xs text-gray-400 border-dotted border-b-2 leading-none">
                  Liquidation
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-[100px] items-center mt-2 border-dotted border-b-2">
          <div className="text-gray-400 text-sm">
            <p>Deposit Amount</p>
            <p>
              (ETH) <FontAwesomeIcon icon={faCircleInfo} />
            </p>
          </div>
          <div className="value text-lg text-black">{depositAmount}</div>
        </div>
        <div className="flex justify-between w-full h-[100px] items-center mt-2 border-dotted border-b-2">
          <div className="text-gray-400 text-sm">
            Available Amount <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className="value">{availableAmount}</div>
        </div>
        <div className="h-[140px] flex items-center w-full">
          <div className="h-[94px] justify-between flex flex-col w-full">
            <div className="flex justify-between">
              <p className="text-gray-400">Deposit APY</p>
              <p>{depositAPY}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Mining APY</p>
              <p>{miningAPY}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">Market Liquidity</p>
              <p>{marketLiquidity}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400">
                Maximum LTV Ratio <FontAwesomeIcon icon={faCircleInfo} />
              </p>
              <p>{maximumLTVRatio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
