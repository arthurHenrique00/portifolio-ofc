import React from 'react'
import { Glass } from './style'

type LinkProps = React.PropsWithChildren<{
  href: string
  target?: string
  rel?: string
}>

const GlassButton: React.FC<LinkProps> = ({ children, href, target, rel }) => {
  return (
    <Glass href={href} target={target} rel={rel}>
      {children}
    </Glass>
  )
}

export default GlassButton
