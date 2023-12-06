import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import Form from '../../forms/from'
import { ControllerInput } from '../../forms/inputs/input.component';
import { Button } from '../../common';

type FormLogin = {
  email: string,
  password: string,
}

const LoginForm: React.FC = () => {
  const defaultValues = {
    email: '',
    password: '',
  }
  const validationSchema = object({
    'email': string().email().required(),
    'password': string().required(),
  })

  const onSubmit = (data: FormLogin) => console.log(data)
  const resolver = yupResolver(validationSchema)
  return (
    <div className='flex w-80  f-full'>
      <Form onSubmit={onSubmit} defaultValues={defaultValues} resolver={resolver}>
        <ControllerInput label={<p className='flex font-normal text-black-300'>Correo</p>} name='email' />
        <ControllerInput label={<p className='flex font-normal text-black-300'>Contraseña</p>} name='password' type='password' />
        <div className='flex mt-4 w-ful justify-center items-center'>
          <Button type='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm