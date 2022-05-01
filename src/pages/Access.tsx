import { Title } from '#components/Title'
import { CardAsset } from '#modules/Access/CardAsset/CardAsset'
import { Tabs } from '#modules/Access/Tab/Tabs'
import React from 'react'

export default function Access() {
  return (
    <div>
      <Title title="My Assets" />
      <CardAsset />
      <Tabs color="pink" />
    </div>
  )
}
