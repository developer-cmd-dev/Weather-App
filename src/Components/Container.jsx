import React from 'react'

function Container({children}) {
  return (
    <div className='
    
    h-[calc(100vh-64px)] py-3  flex items-center justify-center flex-col
    sm:h-[calc(100vh-64px)] sm:py-3  sm:flex sm:items-center sm:justify-center sm:flex-col
    md:h-[calc(100vh-64px)] md:py-3  md:flex md:items-center md:justify-center md:flex-col
    lg:h-[calc(100vh-96px)] lg:flex lg:flex-row lg:items-center lg:justify-around

    '
    >{children}</div>
  )
}

export default Container