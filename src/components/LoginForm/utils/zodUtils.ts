import { FieldErrors } from 'react-hook-form';
import { z, object } from 'zod'

export interface IFormInputs {
  email: string
  password: string
}

interface IErrorFunction {
  error: FieldErrors | any,
  setError: any
}

export const loginFieldsSchema = object({
  email: z.coerce.string()
  .email({ message: 'E-mail inválido' })
  .min(1, { message: 'E-mail obrigatório' }),

  password: z.string()
    .min(1, { message: 'Senha obrigatória' }),
})
