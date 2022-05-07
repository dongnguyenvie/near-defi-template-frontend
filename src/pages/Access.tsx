import { AccessTab } from '#modules/Access/AccessTab'
import { UsedRatio } from '#modules/Access/UsedRatio'
import React from 'react'

export default function Access() {
  return (
    <div className="flex justify-center flex-wrap lg:flex-nowrap">
      <AccessTab />
      <UsedRatio />
    </div>
  )
}
