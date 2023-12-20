import React from 'react'
import Form from '@/components/forms/from'
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string, number, mixed, date } from 'yup';
import { ControllerInput, DatePickerWithYear, ImageInput, SwitchWrapper } from '@/components/forms/inputs';
import Button from '../button.component';
import { PrivateRoutes, PublicRoutes, ROLES } from '@/models';
import useSWRMutation from 'swr/mutation';
import { UpdateUser } from '@/services/auth.service';
import { SnackbarUtilities } from '@/utilities';
import { useNavigate, useParams } from 'react-router-dom';
import Private from '@/pages/private/private';



const Label: React.FC<{
    label: string,
}> = ({ label }) => {
    return (
        <label className="block text-sm lg:text-sm font-bold text-primary-300">
            {label}
        </label>
    )

}
const UserEditForm: React.FC<{
    name: string,
    last_name: string,
    address: string,
    email: string,
    phone: string,
    birthday: Date,
    image: string,
    status: true,
    identity: string,
}> = ({
    name,
    last_name,
    address,
    email,
    phone,
    birthday,
    status,
    image,
    identity,
}) => {
        const defautlValues = {
            name,
            last_name,
            address,
            email,
            phone,
            birthday,
            status,
            identity,
            image,
        }
        const { userId } = useParams()
        const navigate = useNavigate()
        const goToPreviusPage = () => {
            navigate(-1)
        }
        const gotToPrivate = (route: string) => {
            navigate(`/private/${route}`, { replace: true })
        }
        const gotToPublic = (route: string) => {
            navigate(`/public/${route}`, { replace: true })
        }

        const { trigger, isMutating } = useSWRMutation(`/users/${userId}`, UpdateUser)
        const handleSubmit = async (data: any) => {
            const formData = new FormData()
            formData.append('first_name', data.name)
            formData.append('last_name', data.last_name)
            formData.append('address', data.address)
            formData.append('email', data.email)
            formData.append('phone_number', data.phone)
            formData.append('birthday', data.birthday)
            formData.append('status', data.status ? 'active' : 'inactive')
            formData.append('image', data.image)
            formData.append('identity', data.identity)
            try {
                const response = await trigger(formData)
                console.log('res', response)
                if (!!response.data) {
                    SnackbarUtilities.success('Usuario actualizado')
                    gotToPrivate(PrivateRoutes.MANAGER)
                }
                if (response.code === 401) {
                    SnackbarUtilities.info('seccion expired')
                    gotToPublic(PublicRoutes.LOGIN)
                }
            } catch (error) {
                console.log(error)
                SnackbarUtilities.error('Error al actualizar usuario')

            }



        }
        const validationSchema = object({
            name: string().required(),
            last_name: string().required(),
            identity: string().required(),
            address: string().required().max(25),
            email: string().email().required(),
            phone: string().required().max(15),
            birthday: date().required(),
            image: mixed(),
            status: boolean().required(),
        });

        const resolver = yupResolver(validationSchema);
        return (
            <Form className='flex p-4 w-full flex-wrap-reverse' defaultValues={defautlValues} onSubmit={handleSubmit} resolver={resolver} >
                <div className="flex w-full lg:w-6/12">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col lg:flex-row items-center">
                            <ControllerInput name="name" label={<Label label='Name' />} />
                            <ControllerInput className='lg:ml-2 ' name="last_name" label={<Label label='Apellido' />} />
                        </div>
                        <ControllerInput name="address" label={<Label label='Dirección' />} />
                        <div className="flex flex-col lg:flex-row items-center">
                            <ControllerInput name="identity" label={<Label label="Cédula/Pasaporte" />} />
                            <ControllerInput type="tel" className='lg:ml-2 ' name="phone" label={<Label label="Número de teléfono" />} />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center">
                            <ControllerInput name="email" label={<Label label="Correo" />} />
                            <div className='flex flex-col w-full ml-2'>
                                <Label label='Fecha de nacimiento' />
                                <DatePickerWithYear name='birthday' />
                            </div>
                        </div>
                        <div className='flex mt-2 flex-col'>
                            <Label label='Estado' />
                            <SwitchWrapper name='status' />
                        </div>
                        <div className="flex mt-4 flex-col lg:flex-row items-center">
                            <Button variant="secondary">Eliminar</Button>
                            <Button type='submit' className='lg:ml-2'>Guardar</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start lg:w-6/12">
                    <ImageInput name="image" img={image} />
                </div>
            </Form>
        )
    }

export default UserEditForm