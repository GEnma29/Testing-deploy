import React from 'react'
import Form from '@/components/forms/from'
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string, number, mixed, date } from 'yup';
import { ControllerInput, ControllerInputPassword, DatePickerWithYear, ImageInput, SwitchWrapper } from '@/components/forms/inputs';
import Button from '../button.component';
import { PublicRoutes, PrivateRoutes, ROLES } from '@/models';
import useSWRMutation from 'swr/mutation';
import { createUser } from '@/services/auth.service';
import { SnackbarUtilities } from '@/utilities';
import { useNavigate, useNavigation } from 'react-router-dom';



const Label: React.FC<{
    label: string,
}> = ({ label }) => {
    return (
        <label className="block text-sm lg:text-sm font-bold text-primary-300">
            {label}
        </label>
    )

}
const UserCreateForm: React.FC<{
    name: string,
    last_name: string,
    address: string,
    email: string,
    phone: string,
    birthday: Date,
    image: string,
    status: true,
    identity: string,
    roles: ROLES,
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
    roles
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
        const { trigger, isMutating } = useSWRMutation(`/users`, createUser)


        const onSubmit = async (data: any) => {

            const formData = new FormData()
            formData.append('first_name', data.name)
            formData.append('last_name', data.last_name)
            formData.append('address', data.address)
            formData.append('email', data.email)
            formData.append('phone_number', data.phone)
            formData.append('birthday', data.birthday)
            formData.append('status', data.status ? 'active' : 'inactive')
            formData.append('image', data.image)
            formData.append('password', data.password)
            formData.append('identity', data.identity)
            formData.append('role[]', roles)
            try {
                const response = await trigger(formData)
                console.log('res', response)
                if (!!response.data) {
                    SnackbarUtilities.success('Usuario creado')
                    goToPreviusPage()

                }
                if (response.code === 401) {
                    SnackbarUtilities.info('seccion expired')
                    gotToPublic(PublicRoutes.LOGIN)
                }
            } catch (error) {

            }
        };

        const validationSchema = object({
            name: string().required(),
            last_name: string().required(),
            identity: string().required(),
            address: string().required(),
            email: string().email().required(),
            password: string().required().max(15),
            phone: string().required(),
            birthday: date().required(),
            image: mixed(),
            status: boolean().required(),
        });

        const resolver = yupResolver(validationSchema);
        return (
            <Form className='flex p-4 w-full flex-wrap-reverse' defaultValues={defautlValues} onSubmit={onSubmit} resolver={resolver} >
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
                            <ControllerInputPassword type='password' name='password' className='lg:ml-2' label={<Label label="Password" />} />
                        </div>
                        {/* <div className='flex mt-2 flex-col'>
                            <Label label='Estado' />
                            <SwitchWrapper name='status' />
                        </div> */}
                        <div className="flex w-full  flex-col-reverse lg:justify-between lg:flex-row items-center">
                            <div className='flex mt-2 flex-col'>
                                <Label label='Estado' />
                                <SwitchWrapper name='status' />
                            </div>
                            <div className='flex w-full ml-0  md:ml-8 xl:ml-36 flex-col w-full '>
                                <Label label='Fecha de nacimiento' />
                                <DatePickerWithYear className='' name='birthday' />
                            </div>
                        </div>
                        <div className="flex mt-4 flex-col lg:flex-row items-center">
                            <Button variant="secondary">Eliminar</Button>
                            <Button className='lg:ml-2'>Guardar</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start lg:w-6/12">
                    <ImageInput name="image" img={image} />
                </div>

            </Form>
        )
    }

export default UserCreateForm;