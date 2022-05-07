import { faArrowUpRightFromSquare, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useMemo, useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Tabs } from '../../components/Tab/Tabs'
import { listCurrency, tabItems, useInfoBalance } from './constants'
import { InputAccess } from './InputAccess'
import { RequestApprove } from './RequestApprove'
import { ITabCurrency } from './types'

export const AccessTab = () => {
  const [itemSelected, setItemSelected] = useState<ITabCurrency>(listCurrency[0])
  const [list, setList] = useState<ITabCurrency[]>(listCurrency)
  const [openTab, setOpenTab] = useState(1)

  const handleRequestApproveCurrency = useCallback(() => {
    if (itemSelected.isPermission) return

    // call some thing
  }, [itemSelected])

  const dropDownProps = useMemo(() => {
    return {
      list,
      setItemSelected,
      itemSelected,
    }
  }, [itemSelected, list])

  const tabContent = [] // Add some custom component for each tab
  return (
    <div className="lg:mr-10 w-[560px]">
      <Tabs
        tabContent={tabContent}
        tabHeaderProps={{
          openTab,
          setOpenTab,
          tabItems,
        }}
      >
        <div className="w-[320px] mt-[70px] mx-auto">
          <Dropdown {...dropDownProps} />
          <div className="divide w-full h-[1px] bg-gray-200 mt-6"></div>
          <div className="flex justify-between mt-4">
            <div className="text-sm text-gray-400">
              Price: $ {itemSelected?.price || 0}
              <span className="pl-1">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
            </div>
            <div className="text-sm text-gray-400 cursor-pointer hover:text-blue-400">
              Market Details
              <span className="pl-1">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          {!!itemSelected?.isPermission ? (
            <InputAccess
              useInfoBalance={useInfoBalance}
              itemSelected={itemSelected}
              openTab={openTab}
            />
          ) : (
            <RequestApprove requestApprove={handleRequestApproveCurrency} />
          )}
        </div>
      </Tabs>
    </div>
  )
}
