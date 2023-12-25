import AuthenticatedPage from '@/components/layout/AuthenticatedPage'
import Content from '@/components/layout/Content'
import React from 'react'

const Dashboard = () => {
  return (
    <AuthenticatedPage>
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h1 className='text-3xl text-white font-semibold'>
          Dashboard
        </h1>
      </div>
    </AuthenticatedPage>
  )
}

export default Dashboard
