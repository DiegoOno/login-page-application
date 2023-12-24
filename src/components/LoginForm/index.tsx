import { useReducer } from 'react'

import { TextField, Button, CircularProgress } from '@mui/material'

import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginFieldsSchema, IFormInputs } from './utils/zodUtils'



const LoginForm = () => {
  const [isLoading, toggleIsLoading] = useReducer((state) => !state, false)
  const { handleSubmit, register, formState: { errors }, setError } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFieldsSchema),
  })

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    try {
      loginFieldsSchema.parse(data)
      toggleIsLoading()
      // TODO: Implement login
      //toggleIsLoading()
    } catch (error: FieldErrors<IFormInputs> | any) {
      console.error(error)
    }
  }

  return (
    <form className='flex flex-col gap-4 w-[80%] h-[40%] sm:w-1/2 sm:h-1/2' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={errors.email ? errors.email.message : 'E-mail'}
        {...register('email')}
        className='bg-white'
        error={!!errors.email}
      />

      <TextField
        label={errors.password ? errors.password.message : 'Senha'}
        type='password'
        {...register('password')}
        className='bg-white'
        error={!!errors.password}
      />

      <Button
        className='bg-[#2C5364] hover:bg-[#203A43] focus:bg-[#0F2027] w-1/2 self-end items-center cursor-pointer disabled:bg-[#2C5364]/3'
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={18} className='text-white' /> : null}
        <span className='self-center flex-1 text-center text-white font-semibold'>Login</span>
      </Button>
    </form>
  )
}

export default LoginForm