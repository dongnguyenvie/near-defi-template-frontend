interface ITabContentProps {
  openTab: number
  tabContent: any[]
  children: any
}

export const TabContent = ({ openTab, tabContent, children }: ITabContentProps) => {
  const isOpenTab = (index: number) => (openTab === index + 1 ? 'block' : 'hidden')

  return (
    <div className="relative flex flex-col min-w-0 break-words shadow-assetTab bg-white rounded-3xl rounded-tl-none w-full h-[497px]">
      {children}
      <div className="px-4 py-1">
        {tabContent.map((Component, index) => {
          return (
            <div className={isOpenTab(index)} key={index}>
              {Component}
            </div>
          )
        })}
      </div>
    </div>
  )
}
