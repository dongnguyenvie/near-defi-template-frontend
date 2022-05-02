interface ITabContentProps {
  openTab: number
}

export const TabContent = ({ openTab }: ITabContentProps) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 rounded">
      <div className="px-4 py-1 flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? 'block' : 'hidden'} id="link1"></div>
          <div className={openTab === 2 ? 'block' : 'hidden'} id="link2"></div>
        </div>
      </div>
    </div>
  )
}
