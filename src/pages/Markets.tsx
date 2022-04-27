import React, { useEffect } from 'react'
import { useLayout } from '#layouts/index'
import { Box, Button, Center } from '@chakra-ui/react'

const HEADERS = [
  'Asset',
  'Deposit Market($)',
  'Deposit Total APY',
  'Borrow Market($)',
  'Borrow Total APY',
  'Liquidity($)',
  'Action',
]
export default function Markets() {
  return (
    <>
      <div className="flex justify-around">
        <Box
          h="130px"
          color="white"
          w="49%"
          className="flex rounded-3xl bg-pink-200 p-4 flex-col justify-between py-6"
        >
          <p className="text-neutral-700">Deposit Market Size</p>
          <span className="text-4xl font-bold text-pink-700">$ 25,750,426.95</span>
        </Box>
        <Box
          h="130px"
          color="white"
          w="49%"
          className="flex rounded-3xl bg-violet-100 p-4 flex-col justify-between py-6"
        >
          <p className="text-neutral-700">Borrow Market Size</p>
          <span className="text-4xl font-bold text-purple-800">$ 25,750,426.95</span>
        </Box>
      </div>
      <div className="mt-5">
        <div className="py-2 flex justify-between">
          <span className="text-lg font-bold">Markets</span>
          <span>
            <input className="form-control block w-full  px-3 py-1.5     text-base   font-normal    text-gray-700   bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition  ease-in-out   m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </span>
        </div>
        <MarkeTable />
      </div>
    </>
  )
}

function MarkeTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {HEADERS.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <tr
              key={idx}
              className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                ETH
              </th>
              <td className="px-6 py-4">$ 10.016M</td>
              <td className="px-6 py-4">3.16%</td>
              <td className="px-6 py-4">$ 5.162M</td>
              <td className="px-6 py-4">6.19%</td>
              <td className="px-6 py-4">$ 4.868M</td>
              <td className="px-6 py-4 text-right">
                <div className='flex justify-center'>
                  <Button colorScheme="pink" size="xs">
                    Deposit
                  </Button>
                  <Button colorScheme="purple" size="xs" className='ml-1'>
                    Borrow
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
