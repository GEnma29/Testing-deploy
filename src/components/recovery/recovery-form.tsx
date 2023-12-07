import React from 'react'
import { Steps, recoveryStore } from '../../stores/recovery.store'
import EmailForm from './forms/email'
import NewPassword from './forms/new-password'


const RECOVERY_FORM = {
    [Steps.Email]: <EmailForm />,
    [Steps.Code]: <NewPassword />,
}

const RecoveryForm: React.FC = () => {
    const { current_step } = recoveryStore((state) => state)
    return <div className='flex flex-col w-full items-center justify-center lg:mt-16'>
        <div className='flex mt-16 mb-4'>
            <h2 className='flex text-primary-300 font-bold text-3xl'>Recuperar Contraseña</h2>
        </div>
        {RECOVERY_FORM[current_step]}
    </div >
}

export default RecoveryForm