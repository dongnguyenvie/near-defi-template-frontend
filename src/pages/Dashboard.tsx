import { Title } from '#components/Title'
import { CardAsset } from '#modules/Dashboard/CardAsset/CardAsset'
import { Tabs } from '#modules/Dashboard/Tab/Tabs'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <Title title="My Assets" />
      <CardAsset />
      <Tabs color="pink" />
    </div>
  )
}
