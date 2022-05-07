import { ITabItem } from '../../modules/Access/types'
import { Tab } from './TabItem'

export interface ITabHeaderProps {
  openTab: number
  setOpenTab: (openTab: number) => void
  tabItems: ITabItem[]
}

export const TabHeader = ({ tabItems, ...rest }: ITabHeaderProps) => {
  return (
    <ul className="flex list-none flex-nowrap pb-0 flex-row relative" role="tablist">
      {tabItems.map((tab) => (
        <Tab {...rest} tab={tab} key={tab.key} />
      ))}
    </ul>
  )
}
