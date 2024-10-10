import React from 'react'
import { cn } from '../../lib/helpers'

const ResponsiveWrapper = ({ children, className }) => {
  return (
    <div className={ cn('xl:w-[1150px] mx-auto md:w-[85%] w-[90%]', className) }>{ children }</div>
  )
}

export default ResponsiveWrapper