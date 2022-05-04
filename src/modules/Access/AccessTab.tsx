import { tabItems } from './constants'
import { DepositTab } from './DepositTab'
import { Tabs } from './Tab/Tabs'
import { WithDrawTab } from './WithDrawTab'

export const AccessTab = () => {
  return (
    <div className="lg:mr-10 w-full lg:w-fit">
      <Tabs tabItems={tabItems}>
        <DepositTab />
        <WithDrawTab />
      </Tabs>
    </div>
  )
}
