import CunruIconSVG from '#assets/icons/svg/cunru.svg?component'
import JieDaiIconSVG from '#assets/icons/svg/jiedai.svg?component'
import { Image } from '@chakra-ui/react'
import React from 'react'

export const CardAsset = () => {
  return (
    <div className="flex justify-between gap-x-4 flex-wrap lg:flex-nowrap">
      <div className="p-6 lg:w-3/4 lg:mb-0 mb-4 w-full bg-white rounded-2xl bg-slate-200">
        <div className="cards">
          <div className="card-container flex items-center flex-wrap md:flex-nowrap">
            <div className="card-children deposit w-full sm:w-1/3 flex items-center h-fit  mb-4 md:mb-0">
              <div className="image bg-pink-600 p-3 w-fit rounded-xl mr-4">
                <CunruIconSVG className="fill-white w-6" />
              </div>
              <div className="text flex flex-col">
                <div className="title text-sm">Deposit Total</div>
                <div className="value font-bold text-lg">$ 0</div>
              </div>
            </div>
            <div className="card-children deposit w-full sm:w-1/3 flex items-center h-fit  mb-4 md:mb-0">
              <div className="image bg-indigo-600 p-3 w-fit rounded-xl mr-4">
                <JieDaiIconSVG className="fill-white w-6" />
              </div>
              <div className="text">
                <div className="title text-sm">Borrow Total</div>
                <div className="value font-bold text-lg">$ 0</div>
              </div>
            </div>
            <div className="card-children deposit w-full sm:w-1/3 flex items-center h-fit">
              <div className="image w-fit rounded-xl mr-4">
                <img
                  src="/assets/my-assets/output-onlinegiftools.gif"
                  className="bg-transparent w-16"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="text flex justify-between items-center flex-1">
                  <div className="title text-sm">Used Ratio</div>
                  <div className="font-bold text-lg text-gray-400">10 %</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 bg-gray-300">
                  <div className="bg-pink-600 h-2.5 rounded-full w-6"></div>
                </div>
                <div className="text flex justify-between items-center flex-1">
                  <div className="title text-sm">Maximum</div>
                  <div className="font-medium text-xs text-black-400">$ 0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 w-full bg-white rounded-2xl bg-slate-200">
        <div className="card-children deposit flex flex-col">
          <div className="flex items-center">
            <div className="image w-fit rounded-full mr-2 w-6">
              <Image src="/assets/my-assets/WPC.png" alt="" className="fill-white w-6" />
            </div>
            <div className="text text-sm">
              <p>Pending claim WPC</p>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <div className="value font-bold text-lg">0</div>
            <button className="bg-pink-500 px-4 py-0 rounded-full font-normal h-7 w-20 text-white">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
