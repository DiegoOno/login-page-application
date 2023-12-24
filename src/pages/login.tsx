'use client'

import React from 'react'

import Content from '@/components/layout/Content'
import LoginForm from '@/components/LoginForm'

const Login = () => {
  return (
    <Content>
      <div className='flex flex-col gap-2 h-1/2 w-1/2 bg-white rounded-xl items-center justify-center'>
        <LoginForm />
      </div>
    </Content>
  )
}

export default Login
