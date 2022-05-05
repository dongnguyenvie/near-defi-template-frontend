import React, { PropsWithChildren } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropdownItem } from './DropdownItem'

interface IDropdownProps<T> {
  list: T[]
}

const Dropdown = <T,>({ list }: PropsWithChildren<IDropdownProps<T>>) => {
  const [itemSelected, setItemSelected] = React.useState<T | null>(list[0] || null)

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="relative inline-flex align-middle w-full group">
          <div className="w-full flex justify-between items-center">
            <button
              className={
                'flex items-center justify-between text-white font-bold uppercase text-sm py-3 pb-4 rounded  outline-none focus:outline-none ease-linear transition-all duration-150 bg-transparent '
              }
              type="button"
            >
              <img className="w-10" src="/assets/my-assets/ETH.png" alt="" />
              <span className="pl-2 text-xl text-black">ETH</span>
              <FontAwesomeIcon icon={faAngleDown} className="text-slate-600 ml-6 text-xs w-4 h-4" />
            </button>
            <div className="flex flex-col justify-between text-right">
              <p className="text-xs text-slate-400-500">Deposit Total APY</p>
              <p className="text-base text-pink-500">
                {!!itemSelected ? itemSelected['apy'] : '0'}%
              </p>
            </div>
          </div>
          <ul
            className={`group-hover:block absolute -bottom-0 translate-y-full w-[319px] shadow-dropdown py-3 rounded-[10px] hidden`}
          >
            {list.map((l, index) => {
              return <DropdownItem item={l} key={index} onSelect={setItemSelected} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dropdown
