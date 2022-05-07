import { PropsWithChildren, useMemo } from 'react'

interface IDropdownItem<T> {
  item: T
  onSelect: (item: T) => void
}

export const DropdownItem = <T,>({ item, onSelect }: PropsWithChildren<IDropdownItem<T>>) => {
  const apy = useMemo(() => {
    return `${item['apy'] || 0}%`
  }, [item])

  const imagePath = useMemo(() => {
    return `/assets/my-assets/${item['image']}`
  }, [item])

  const name = useMemo(() => {
    return `${item['name'] || ''}`
  }, [item])

  const handleSelectItem = () => {
    onSelect(item)
  }

  return (
    <li className="h-12 text-base font-medium text-black hover:bg-pink-100 cursor-pointer transition-all ease-linear duration-150">
      <a
        className="flex justify-between items-center w-full whitespace-nowrap h-full px-6 font-medium"
        onClick={handleSelectItem}
      >
        <div className="flex items-center">
          <img className="w-6" src={imagePath} alt="" />
          <span className="font-medium text-black text-base ml-2 block">{name}</span>
        </div>
        <span className="text-sm text-pink-500">{apy}</span>
      </a>
    </li>
  )
}
