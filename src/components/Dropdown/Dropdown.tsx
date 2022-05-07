import React, { PropsWithChildren, useCallback, useState } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropdownItem } from './DropdownItem'

interface IDropdownProps<T> {
  list: T[]
  setItemSelected: (item: T) => void
  itemSelected: T
}

const Dropdown = <T,>({
  list,
  setItemSelected,
  itemSelected,
}: PropsWithChildren<IDropdownProps<T>>) => {
  const [isShown, setIsShown] = useState(false)
  
  const handleSetItemSelected = useCallback((item: T) => {
    setItemSelected(item)
    setIsShown(false)
  }, [])

  return (
    <>
      <div className="flex flex-wrap w-full flex-col">
        <div className="relative inline-flex align-middle w-full">
          <div className="w-full flex justify-between items-center ">
            <button
              className={
                'flex items-center justify-between text-white font-bold uppercase text-sm py-3 pb-4 rounded  outline-none focus:outline-none ease-linear transition-all duration-150 bg-transparent '
              }
              type="button"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <img
                className="w-10"
                src={`/assets/my-assets/${itemSelected['image'] || ''}`}
                alt=""
              />
              <span className="pl-2 text-xl text-black">{itemSelected['name'] || ''}</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`text-slate-600 ml-6 text-xs w-4 h-4 duration-150 ease-linear ${
                  isShown ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className="flex flex-col justify-between text-right">
              <p className="text-xs text-slate-400-500 border-b border-dotted border-gray-400">
                Deposit Total APY
              </p>
              <p className="text-base text-pink-500 font-medium">
                {!!itemSelected ? itemSelected['apy'] : '0'}%
              </p>
            </div>
          </div>
          <ul
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={`${
              isShown ? 'block' : 'hidden'
            } absolute -bottom-0 translate-y-full w-[319px] shadow-dropdown py-3 rounded-[10px] bg-white z-10`}
          >
            {list.map((l, index) => {
              return <DropdownItem item={l} key={index} onSelect={handleSetItemSelected} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dropdown
