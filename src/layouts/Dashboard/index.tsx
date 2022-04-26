import {
  Box,
  Drawer,
  DrawerContent,
  DrawerHeader,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { NavigationWithConnected } from './NavigationWithConnected'
import { Sidebar } from './Sidebar'

interface DashboardProps {
  children: ReactNode
}
export const Dashboard = (props: DashboardProps) => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure({})

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        closeOnOverlayClick={true}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm"
      >
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <Sidebar onClose={onClose} w={{ base: 'full', md: '100%' }} />
        </DrawerContent>
      </Drawer>
      {/* <Navigation onOpen={onOpen} /> */}
      <NavigationWithConnected onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}
