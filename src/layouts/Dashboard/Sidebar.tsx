import { Box, BoxProps } from '@chakra-ui/react'
import { navDashboard, navDashboard2 } from './navConfig'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRoutes, useMatch, useLocation, Link } from 'react-router-dom'
import { A } from '#components/A'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation()

  const isPathActive = (path: string) => {
    return path === location.pathname
  }
  return (
    <Box
      transition="3s ease"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      className="sidebar text-white"
      {...rest}
    >
      <ul className="flex flex-col py-2 space-y-1 w-full">
        <li className="px-5 mb-7 mt-4">
          <div className="flex flex-row items-center justify-center h-8">
            <div className="text-stone-50 text-2xl font-bold">
              <span className="text-4xl">
                <FontAwesomeIcon icon={faEarth} />
              </span>
              <span className="ml-1">Near API</span>
            </div>
          </div>
        </li>
        {navDashboard.map((item, idx) => {
          const isActive = isPathActive(item.path)

          return (
            <li key={idx}>
              <A
                url={item.path}
                className={`
                relative flex flex-row items-center h-12 focus:outline-none  border-l-4 border-transparent hover:border-indigo-500 pr-6 mx-3 rounded-2xl
                ${
                  isActive
                    ? 'bg-white text-pink-500 font-bold  '
                    : 'hover:bg-white  hover:text-pink-500'
                }
                `}
              >
                <span className="inline-flex justify-center items-center ml-4">{item.icon}</span>
                <span className="ml-2 text-sm tracking-wide truncate">{item.title}</span>
              </A>
            </li>
          )
        })}

        <li className="border-t border-pink-300 py-2 mx-2 rounded" />

        {navDashboard2.map((item, idx) => {
          const isActive = false
          return (
            <li key={idx}>
              <A
                url={item.path}
                className={`
                relative flex flex-row items-center h-12 focus:outline-none  border-l-4 border-transparent hover:border-indigo-500 pr-6 mx-3 rounded-2xl
                ${
                  isActive
                    ? 'bg-white text-pink-500 font-bold  '
                    : 'hover:bg-white  hover:text-pink-500'
                }
                `}
              >
                <span className="inline-flex justify-center items-center ml-4">{item.icon}</span>
                <span className="ml-2 text-sm tracking-wide truncate">{item.title}</span>
              </A>
            </li>
          )
        })}
      </ul>
    </Box>
  )
}
