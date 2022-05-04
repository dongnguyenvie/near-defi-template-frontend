import { AccessTab } from '#modules/Access/AccessTab'
import { CardRight } from '#modules/Access/CardRight'
import React from 'react'

export default function Access() {
  const mockAPY = {
    availableAmount: '0',
    depositAPY: '2.98%',
    depositAmount: '0',
    marketLiquidity: '1.685K',
    maximumLTVRatio: '80%',
    miningAPY: '0.17%',
  }

  return (
    <div className="flex justify-center flex-wrap lg:flex-nowrap">
      <AccessTab />
      <CardRight {...mockAPY} />
    </div>
  )
}
