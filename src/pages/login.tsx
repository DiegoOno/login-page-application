'use client'

import React from 'react'

import Content from '@/components/layout/Content'
import LoginForm from '@/components/LoginForm'

const Login = () => {
  return (
    <Content>
      <h1
        className='text-2xl font-bold text-center text-white mb-4'
      >
        Bem vindo(a)
      </h1>
      <div className='flex flex-col gap-2 h-1/2 w-1/2 bg-white rounded-xl items-center justify-center'>
        <LoginForm />
      </div>
    </Content>
  )
}

export default Login
