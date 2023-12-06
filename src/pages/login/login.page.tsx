import React from 'react'

// import { object, string, number, date, InferType } from 'yup';
import Layout from '../../components/login/layout/layout';
import { LoginForm } from '../../components/login/form';
import { LoginFragment } from '../../components/login';

// type FormLogin = {
//     email: string,
//     password: string,
// }
const Login: React.FC = () => {
    // const defaultValues = {
    //     email: '',
    //     password: '',
    // }
    // const validationSchema = object({
    //     'email': string().email().required(),
    //     'password': string().required(),
    // })

    // const onSubmit = (data: FormLogin) => console.log(data)
    // const resolver = yupResolver(validationSchema)
    return (
        <Layout form={<LoginForm />} element={<LoginFragment />} />
        // <div>
        //     <h1>Login</h1>
        //     <Form onSubmit={onSubmit} defaultValues={defaultValues} resolver={resolver}>
        //         <ControllerInput name='email' />
        //         <ControllerInput rules={{ maxLength: 5 }} name='password' type='password' />
        //         <button type='submit'>Login</button>
        //     </Form>
        // </div>
    )
}

export default Login