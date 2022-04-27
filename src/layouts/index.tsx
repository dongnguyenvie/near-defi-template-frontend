import { createContext, ReactNode, useContext, useState } from 'react'
import { Dashboard } from './Dashboard'
import { Fullpage } from './Fullpage'

type variant = 'main' | 'fullpage'
interface ILayoutContext {
  children?: ReactNode
  variant?: variant
  onChangeVariant: (variant: variant) => void
}
interface LayoutProps {
  children?: ReactNode
  variant?: variant
}
const initCtxt = {
  variant: 'main',
} as unknown as ILayoutContext

const LayoutContext = createContext<ILayoutContext>(initCtxt)

export default function Layout({ variant = 'main', children, ...otherProps }: LayoutProps) {
  if (variant === 'fullpage') {
    return <Fullpage {...otherProps}> {children} </Fullpage>
  }
  return <Dashboard {...otherProps}> {children} </Dashboard>
}

export const LayoutProvider = (props: any) => {
  const [variant, setVariant] = useState(initCtxt.variant)

  return (
    <LayoutContext.Provider value={{ variant, onChangeVariant: setVariant }}>
      <Layout {...props} variant={variant} />
    </LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)
