import { IColumnsProps, Table, TYPE_TABLE } from '../Table'

const borrowingsConfig: IColumnsProps[] = [
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
    name: 'Borrow Total APY',
    onSort: () => null,
  },
  {
    key: '3',
    children: null,
    isHover: false,
    isSort: false,
    name: 'Borrow Amount',
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
    name: 'Action',
    onSort: () => null,
  },
]
const rows = []
export const TableBorrowings = () => {
  return <Table columns={borrowingsConfig} rows={rows} name={TYPE_TABLE.BORROW} />
}
