import { ReactNode } from 'react'

interface DashboardProps {
  children: ReactNode
}
export const Fullpage = (props: DashboardProps) => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      {props.children}
    </div>
  )
}
