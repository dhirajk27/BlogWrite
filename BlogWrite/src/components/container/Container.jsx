import React, { Children } from 'react'

export const Container = () => {
  return (
    <div className='w-full max-w-7xl mx-auto'>{Children}</div>
  )
}

export default Container
