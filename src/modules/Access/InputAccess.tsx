import React, { useCallback, useMemo, useRef } from 'react'
import { BALANCE_TYPE } from './constants'
import { IInputAccessProps } from './types'

export const InputAccess = ({ useInfoBalance, itemSelected, openTab }: IInputAccessProps) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

  const typeBalance = useMemo(() => {
    const walletBalance = BALANCE_TYPE.DEPOSIT
    const availableBalance = BALANCE_TYPE.WITHDRAW
    return openTab === 1 ? walletBalance : availableBalance
  }, [openTab])

  const balance = useMemo(() => {
    const value = useInfoBalance[openTab === 1 ? 'balance' : 'available']
    return `${value[itemSelected?.name?.toLowerCase()] || '0'}`
  }, [itemSelected, openTab])

  const handleSetMaxValueInput = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      (inputRef?.current as any).value = balance
      event.preventDefault()
    },
    [balance]
  )

  return (
    <div>
      <div className="w-[496px] mx-auto mt-10 relative z-0">
        <input
          placeholder="Please enter the withdraw amount"
          className="rounded-xl border-gray-300 border-[1px] px-4 pr-[106px] h-16 w-full focus:border-blue-500 focus:shadow-inputAmount"
          ref={inputRef}
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 uppercase text-blue-600 h-11 px-5 font-medium rounded-[22px] border-transparent bg-blue-50">
          max
        </button>
      </div>
      <div className="balance mt-8 text-center text-sm">
        <p>
          {typeBalance} {balance} {itemSelected?.name || ''}
        </p>
      </div>
      <button
        onClick={handleSetMaxValueInput}
        className="mx-auto mt-[29px] block rounded-full bg-pink-500 text-white w-[248px] h-[54px]"
      >
        Submit
      </button>
    </div>
  )
}
