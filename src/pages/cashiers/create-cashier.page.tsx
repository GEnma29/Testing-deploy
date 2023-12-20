import React from 'react'
import CreateLayout from '@/components/manager/create-user'
import { ROLES } from '@/models';

const CreateCrashierUser: React.FC = () => {
    return (
        <CreateLayout roles={ROLES.CASHBOX} />
    )
}

export default CreateCrashierUser;