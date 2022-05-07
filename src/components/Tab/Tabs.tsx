import { Children, useMemo, useState } from 'react'
import { ITabItem } from '../../modules/Access/types'
import { TabContent } from './TabContent'
import { ITabHeaderProps, TabHeader } from './TabHeader'
export interface ITabsProps {
  tabContent: any[]
  children: any
  tabHeaderProps: ITabHeaderProps
}

export const Tabs = ({ tabHeaderProps, tabContent, children }: ITabsProps) => {
  return (
    <div className="flex flex-nowrap w-full flex-col">
      <TabHeader {...tabHeaderProps} />
      <TabContent {...tabHeaderProps} tabContent={tabContent}>
        {children}
      </TabContent>
    </div>
  )
}
