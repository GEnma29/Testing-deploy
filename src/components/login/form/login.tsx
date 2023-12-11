import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import Form from '../../forms/from'
import { ControllerInput } from '../../forms/inputs/input.component';
import { Button } from '../../common';
import { authService } from '../../../services';
import { adapterAccessToken } from '../../../adapters/auth.adapters';
import { userStore } from '../../../stores/user.store';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../../models';
import { persistLocalStorage } from '../../../utilities/local-storage';

type FormLogin = {
  email: string,
  password: string,
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const saveUser = userStore((state) => state.login)
  const [loading, setLoading] = useState<boolean>(false)

  const goToRecoveryPassword = () => {
    navigate(`/${PublicRoutes.RECOVER_PASSWORD}`, { replace: true })
  }
  const defaultValues = {
    email: '',
    password: '',
  }
  const validationSchema = object({
    'email': string().email().required(),
    'password': string().required(),
  })

  const onSubmit = async (data: FormLogin) => {
    setLoading(true)
    const { access_token } = await authService({ email: data.email, password: data.password })
    //TODO use custom hook localStorage 
    localStorage.setItem('access_token', access_token)
    //persistLocalStorage<string>('access_token', access_token)
    // destruct object
    const { secret, name, last_name, roles, email } = adapterAccessToken(access_token);
    // save user
    saveUser({ secret, name, last_name, email, role: { public: roles.public, funkart: roles.funkart } })
    // navigate
    setLoading(false)
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });


  }
  const resolver = yupResolver(validationSchema)
  return (
    <div className='flex flex-col justify-center items-center w-full  lg:w-80  f-full'>
      <h1 className='flex mt-4 text-3xl font-normal text-primary-300 w-full justify-center items-center lg:mt-16 lg:items-start lg:justify-start '> Inicia sesión</h1>
      <Form className='flex flex-col w-full' onSubmit={onSubmit} defaultValues={defaultValues} resolver={resolver}>
        <ControllerInput label={<p className='flex font-normal text-black-300'>Correo</p>} name='email' />
        <ControllerInput label={<p className='flex font-normal text-black-300'>Contraseña</p>} name='password' type='password' />
        <div className='flex my-4 flex-row'>
          <input type='checkbox' name='remember' id='remember' className="h-4 w-4 rounded border-gray-300 text-primary-300 focus:ring-primary-500 checked:bg-primary-300" />
          <p className='flex text-xs  ml-3 font-normal'>Recordar usuario</p>
        </div>
        <div className='flex mt-4 w-ful justify-center items-center'>
          <Button disabled={loading} type='submit'>
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </Button>
        </div>
        <div className='flex my-2'>
          <p>Si olvidaste tu contraseña <a className='underline	' onClick={goToRecoveryPassword} href={''}>Clickea aquí</a></p>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm