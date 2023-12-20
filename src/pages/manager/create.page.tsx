import React from 'react'
import CreateLayout from '@/components/manager/create-user'
import { ROLES } from '@/models';

const CreatePage: React.FC = () => {
    return (
        <CreateLayout roles={ROLES.MANAGER_LOGISTICS} />
    )
}

export default CreatePage;