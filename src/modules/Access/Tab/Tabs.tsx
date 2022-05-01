import { useState } from 'react'
import { TableBorrowings } from '../Table/TableBorrowings/TableBorrowings'
import { TableDeposit } from '../Table/TableDeposit/TableDeposit'
import { TabContent } from './TabContent'
import { TabHeader } from './TabHeader'

export interface ITabsProps {
  color: string
}

export const Tabs = ({ color }: ITabsProps) => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <TabHeader color={color} openTab={openTab} setOpenTab={setOpenTab} />
        <TabContent openTab={openTab} />
      </div>
    </div>
  )
}
