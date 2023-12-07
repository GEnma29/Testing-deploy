import React from 'react'
import Layout from '../../components/common/layout/layout'
import { LoginFragment } from '../../components/common'
import RecoveryForm from '../../components/recovery/recovery-form'

const RecoverPassword: React.FC = () => {
    return (
        <Layout form={<RecoveryForm />} element={<LoginFragment />} />
    )
}

export default RecoverPassword