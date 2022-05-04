export interface IColumnsProps {
  key: string
  name: string
  isSort: boolean
  isHover: boolean
  children: React.ReactNode
  onSort: () => void
}
export interface ITableProps {
  columns: IColumnsProps[]
  rows: any[]
  name: TYPE_TABLE
}

export enum TYPE_TABLE {
  DEPOSIT = 'deposit',
  BORROW = 'borrow',
}

export const Table = ({ columns, rows, name }: ITableProps) => {
  if (!Array.isArray(columns) || !Array.isArray(rows)) return <></>

  return (
    <div className="overflow-x-auto w-full" key={name}>
      <table className="min-w-full text-sm divide-y divide-gray-300 table-auto">
        <thead>
          <tr>
            {columns.map(({ children, key, ...rest }) => {
              return (
                <TableHeader key={key} {...rest}>
                  {children}
                </TableHeader>
              )
            })}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {rows.map(({ key, ...rest }) => {
            return (
              <tr key={key}>
                {Object.keys(rest).map((k) => {
                  return (
                    <td key={k} className="p-4 text-gray-700 whitespace-nowrap">
                      {rest[k]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {!rows.length && (
        <div className=" mt-28 text-center">
          <img
            className="w-72 h-44 block mx-auto"
            src="/assets/my-assets/nothing-borrow.png"
            alt=""
          />
          <div className="text-md">
            {name === TYPE_TABLE.DEPOSIT ? 'No deposits yet' : 'Nothing borrowed yet'}
          </div>
          <button
            className={`px-8 mt-6 text-white h-9 rounded-full ${
              name === TYPE_TABLE.DEPOSIT ? 'bg-pink-500' : 'bg-indigo-500'
            }`}
          >
            {name === TYPE_TABLE.DEPOSIT ? 'Deposit now' : 'Borrow now'}
          </button>
        </div>
      )}
    </div>
  )
}

const TableHeader = ({ name, isSort, children, onSort }: IColumnsProps) => {
  return (
    <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
      <div className="flex items-center">
        {name}
        {children}
        {isSort && (
          <svg
            onClick={() => onSort && onSort()}
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1.5 text-gray-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </div>
    </th>
  )
}
