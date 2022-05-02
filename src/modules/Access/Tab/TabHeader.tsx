import { Tab } from './Tab'

export interface ITabHeaderProps {
  openTab: number
  setOpenTab: (openTab: number) => void
}

export const TabHeader = ({ openTab, setOpenTab }: ITabHeaderProps) => {
  return (
    <ul className="flex mb-3 list-none flex-wrap pt-3 pb-0 flex-row relative" role="tablist">
      <Tab openTab={openTab} setOpenTab={setOpenTab} tabIndex={1} tabName="Deposit" key={1} />
      <Tab openTab={openTab} setOpenTab={setOpenTab} tabIndex={2} tabName="Withdraw" key={2} />
    </ul>
  )
}
