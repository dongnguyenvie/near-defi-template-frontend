import { useMemo, useState } from 'react'
import { ITabItem } from '../types'
import { TabContent } from './TabContent'
import { ITabHeaderProps, TabHeader } from './TabHeader'
export interface ITabsProps {
  tabItems: ITabItem[]
  children: any[]
}

export const Tabs = ({ tabItems, children }: ITabsProps) => {
  const [openTab, setOpenTab] = useState(1)
  const tabHeaderProps: ITabHeaderProps = useMemo(() => {
    return {
      openTab,
      setOpenTab,
      tabItems,
    }
  }, [tabItems, openTab])
  return (
    <div className="flex flex-nowrap w-full flex-col">
      <TabHeader {...tabHeaderProps} />
      <TabContent openTab={openTab}>
        {children}
      </TabContent>
    </div>
  )
}
