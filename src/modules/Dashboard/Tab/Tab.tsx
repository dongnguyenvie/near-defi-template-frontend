import { useMemo } from 'react'

export interface ITabProps {
  tabIndex: number
  openTab: number
  color: string
  tabName: string
  setOpenTab: (openTab: number) => void
}

export const Tab = ({ tabIndex, openTab, color, tabName, setOpenTab }: ITabProps) => {
  const handleStyleTab = useMemo(() => {
    const colorDeposit = openTab === 1 ? `text-${color}-600` : 'text-indigo-600'
    const borderColorDeposit = openTab === 1 ? `border-${color}-600` : 'border-indigo-600'
    const classNameActivate = `${colorDeposit} ${borderColorDeposit}`
    const classNameInActivate = 'text-gray-400 border-transparent'

    return openTab === tabIndex ? classNameActivate : classNameInActivate
  }, [color, tabIndex, openTab])
  return (
    <li
      className={`mr-6 last:mr-0 text-center pb-3 border-b-4 border-solid ease-linear duration-300 ${handleStyleTab}`}
    >
      <a
        className="text-2xl font-medium px-4 py-3"
        onClick={(e) => {
          e.preventDefault()
          setOpenTab(tabIndex)
        }}
        data-toggle="tab"
        href="#"
        role="tablist"
      >
        {tabName}
      </a>
    </li>
  )
}
