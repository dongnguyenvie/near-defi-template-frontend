import { IColumnsProps, Table, TYPE_TABLE } from "../Table"

const depositConfig: IColumnsProps[] = [
  {
    key: '1',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Asset',
    onSort: () => null,
  },
  {
    key: '2',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Deposit Total APY',
    onSort: () => null,
  },
  {
    key: '3',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Deposit Amount',
    onSort: () => null,
  },
  {
    key: '4',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Your wallet balance',
    onSort: () => null,
  },
  {
    key: '5',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Use as collateral',
    onSort: () => null,
  },
  {
    key: '6',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Action',
    onSort: () => null,
  },
]
const rows = [
  {
    key: '1',
    asset: 'BTC/USDT',
    apy: '79%',
    amount: '100$',
    balance: '1000$',
    collateral: '100$',
    action: 'Delete',
  },
  {
    key: '2',
    asset: 'BTC/USDT',
    apy: '79%',
    amount: '100$',
    balance: '1000$',
    collateral: '100$',
    action: 'Delete',
  },
  {
    key: '3',
    asset: 'BTC/USDT',
    apy: '79%',
    amount: '100$',
    balance: '1000$',
    collateral: '100$',
    action: 'Delete',
  },
]

export const TableDeposit = () => {
  return <Table columns={depositConfig} rows={rows} name={TYPE_TABLE.DEPOSIT}/>
}
