import React from 'react'
import { object, string } from 'yup';
import Form from '../../forms/from'
import { ControllerInput } from '../../forms/inputs/input.component'
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../common';
import { Steps, recoveryStore } from '../../../stores/recovery.store';

type EmailForm = {
    email: string
}
const EmailForm: React.FC = () => {

    const { nextStep } = recoveryStore((state) => state)
    const defaultValues = {
        email: ''
    }
    const onSubmit = (values: EmailForm) => {
        console.log(values)
        nextStep(Steps.Code);

    }
    const validationSchema = object({
        'email': string().email().required(),
    })
    const resolver = yupResolver(validationSchema)

    return (
        <div className='flex w-full lg:w-80'>
            <Form resolver={resolver} defaultValues={defaultValues} onSubmit={onSubmit}>
                <ControllerInput label={<p className='flex text-lg'>Email</p>} name='email' />
                <div className='flex w-full my-4 justify-center items-center'>
                    <Button>
                        Enviar código de verificación
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default EmailForm