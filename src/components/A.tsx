import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AProps {
  url: string
  target?: string
  children: ReactNode
  className?: string
}
export const A = ({ url, target = '_self', children, className = '' }: AProps) => {
  if (url.match(/^(http(s)?|ftp):\/\//) || target === '_blank') {
    return (
      <a href={url} target={target} className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={url} className={className}>
      {children}
    </Link>
  )
}
