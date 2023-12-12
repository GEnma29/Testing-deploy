import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { boolean, object, string, number, mixed } from 'yup'
import Form from '../../forms/from'
import { Textarea, Select, ControllerInput, ImageInput, SwitchWrapper } from '@/components/forms/inputs'
import { Button } from '@/components/common'
import { EventsInstance, createEvent } from '@/services/events.service'
import useSWRMutation from 'swr/mutation'

const options = [{
    value: 1,
    label: '1'
},
{
    value: 2,
    label: '2'
},
{
    value: 3,
    label: '3'
},
{
    value: 4,
    label: '4'
},
{
    value: 5,
    label: '5'
},
{
    value: 6,
    label: '6'
},
{
    value: 7,
    label: '7'
},
{
    value: 8,
    label: '8'
},
{
    value: 9,
    label: '9'
},
{
    value: 10,
    label: '10'
}
]

const EventsForm: React.FC<{
    name: string
    position: number
    description: string
    enabled: boolean
    image: string
    sendData: (data: any) => void
}> = ({ name, position, description, enabled, image, sendData }) => {
    const defaultValues = {
        name,
        position,
        description,
        enabled,
        image,

    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const onSubmit = async (data: any) => {
        const form = new FormData();
        form.append("name", data.name)
        form.append("image", data.image)
        form.append("position", data.position)
        form.append("description", data.description)
        form.append("active", data.enabled)
        form.append("base_id", '100001');
        form.append("category_id", '100001');
        form.append("start_date", new Date().toUTCString());

        sendData(form)
    }

    const validationSchema = object({
        name: string().required(),
        position: number().required(),
        description: string().required(),
        enabled: boolean().required(),
        image: mixed(),
    })

    const resolver = yupResolver(validationSchema)

    return (

        <Form className='flex p-4  w-full h-full  mt-8 flex-wrap-reverse' onSubmit={onSubmit} resolver={resolver} defaultValues={defaultValues}>
            <div className='flex w-full lg:w-6/12'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <div className='flex w-full'>
                            <ControllerInput label={<p className='flex font-bold text-primary-300'>Nombre del evento</p>} name='name' />
                        </div>
                        <div className='flex w-full  lg:ml-3'>
                            <div className='flex w-full flex-col'>
                                <p className='flex font-bold text-primary-300'>Posición</p>
                                <Select name='position' options={options} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='flex font-bold text-primary-300'>Descripción</p>
                        <Textarea name='description' />
                    </div>
                    <div className='flex mt-2 flex-col w-full'>
                        <p className='flex font-bold text-primary-300'>Estado</p>
                        <SwitchWrapper name='enabled' />
                    </div>
                    <div className='flex mt-16 w-full items-center justify-center lg:items-start lg:justify-start lg:w-80'>
                        <Button >
                            Guardar
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex w-full items-center justify-center lg:items-start lg:justify-start lg:w-6/12'>
                <ImageInput name='image' img={image} />
            </div>
        </Form>)
}

export default EventsForm
