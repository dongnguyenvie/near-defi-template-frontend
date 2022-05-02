import { useState } from 'react'
import { TabContent } from './TabContent'
import { TabHeader } from './TabHeader'

export interface ITabsProps {}

export const Tabs = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <TabHeader openTab={openTab} setOpenTab={setOpenTab} />
        <TabContent openTab={openTab} />
      </div>
    </div>
  )
}
