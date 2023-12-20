import React from 'react'
import CreateLayout from '@/components/manager/create-user'
import { ROLES } from '@/models';

const CreateProtocolUser: React.FC = () => {
    return (
        <CreateLayout roles={ROLES.EVENT_LOGISTICS} />
    )
}

export default CreateProtocolUser;