import { listCurrency } from './constants'
import Dropdown from './Dropdown/Dropdown'

export const DepositTab = () => {
  return (
    <div className="deposit-tab-content">
      <div className="w-[320px] mt-[70px] mx-auto">
        <div className="flex w-full">
          <Dropdown list={listCurrency} />
        </div>
      </div>
    </div>
  )
}
