export interface ITabItem {
  key: string
  name: string
  order: number
}
export interface ITabCurrency {
  name: string
  image: string
  apy: number
  isPermission: boolean
  price: string
}

export interface IUsedRatioProps {
  depositAmount: string
  availableAmount: string
  depositAPY: string
  miningAPY: string
  marketLiquidity: string | null
  maximumLTVRatio: string
}

export interface IInputAccessProps {
  openTab: number
  useInfoBalance: any
  itemSelected: ITabCurrency
}

export interface IRequestApproveProps {
  requestApprove: () => void
}
