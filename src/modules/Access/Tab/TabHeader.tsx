import { Tab } from './Tab'
import RingIconSVG from '#assets/icons/svg/ring.svg?component'

export interface ITabHeaderProps {
  color: string
  openTab: number
  setOpenTab: (openTab: number) => void
}

export const TabHeader = ({ color, openTab, setOpenTab }: ITabHeaderProps) => {
  return (
    <ul
      className="flex mb-3 list-none flex-wrap pt-3 pb-0 flex-row border-b border-solid border-gray-300 relative"
      role="tablist"
    >
      <Tab
        color={color}
        openTab={openTab}
        setOpenTab={setOpenTab}
        tabIndex={1}
        tabName="Deposits"
        key={1}
      />
      <Tab
        color={color}
        openTab={openTab}
        setOpenTab={setOpenTab}
        tabIndex={2}
        tabName="Borrowings"
        key={2}
      />
      <div
        className={`group absolute right-0 top-1/2 -translate-y-1/2 flex items-center px-4 h-9 rounded-full bg-slate-200 ${
          color && `hover:bg-${color}-500`
        } cursor-pointer`}
      >
        <div className="icon">
          <RingIconSVG className="fill-slate-400 group-hover:fill-white w-4 block mr-1" />
        </div>
        <div className="text text-black group-hover:text-white font-medium text-xs">
          Liquidation Reminder Settings
        </div>
      </div>
    </ul>
  )
}
