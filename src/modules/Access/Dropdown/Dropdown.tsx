import React from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)

  const handleClickDropdownPopover = React.useCallback(() => {
    setDropdownPopoverShow((prev) => !prev)
  }, [])

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
              onClick={handleClickDropdownPopover}
            >
              <img className="w-10" src="/assets/my-assets/ETH.png" alt="" />
              <span className="pl-2 text-xl text-black">ETH</span>
              <FontAwesomeIcon icon={faAngleDown} className="text-slate-600 ml-6 text-xs w-4 h-4" />
            </button>
            <div className="flex flex-col justify-between text-right">
              <p className="text-xs text-slate-400-500">Deposit Total APY</p>
              <p className="text-base  text-pink-500">3.22%</p>
            </div>
          </div>
          <ul
            className={`group-hover:block absolute -bottom-0 translate-y-full w-[319px] shadow-dropdown py-3 rounded-[10px] hidden ${
              dropdownPopoverShow ? 'block ' : 'hidden'
            }`}
          >
            <li className="h-12 text-base font-medium text-black hover:bg-pink-100 cursor-pointer transition-all ease-linear duration-150">
              <a
                className={
                  'flex justify-between items-center w-full whitespace-nowrap h-full px-6 font-medium'
                }
                onClick={(e) => e.preventDefault()}
              >
                <div className="flex items-center">
                  <img className="w-6" src="/assets/my-assets/ETH.png" alt="" />
                  <span className="font-medium text-black text-base ml-2 block">ETH</span>
                </div>
                <span className="text-sm text-pink-500">3.22%</span>
              </a>
            </li>
            <li className="h-12 text-base font-medium text-black hover:bg-pink-100 cursor-pointer transition-all ease-linear duration-150">
              <a
                className={
                  'flex justify-between items-center w-full whitespace-nowrap h-full px-6 font-medium'
                }
                onClick={(e) => e.preventDefault()}
              >
                <div className="flex items-center">
                  <img className="w-6" src="/assets/my-assets/ETH.png" alt="" />
                  <span className="font-medium text-black text-base ml-2 block">ETH</span>
                </div>
                <span className="text-sm text-pink-500">3.22%</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dropdown
