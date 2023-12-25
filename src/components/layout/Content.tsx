import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      {children}
    </div>
  )
}

export default Content
