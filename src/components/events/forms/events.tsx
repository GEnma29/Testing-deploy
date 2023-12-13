import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string, number, mixed } from 'yup';
import Form from '@/components/forms/from';
import {
  Textarea,
  Select,
  ControllerInput,
  ImageInput,
  SwitchWrapper,
} from '@/components/forms/inputs';
import { Button } from '@/components/common';
import { TicketIcon } from '@/icons';

const options = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];

const EventsForm: React.FC<{
  name: string;
  position: number;
  description: string;
  enabled: boolean;
  image: string;
  isLoading: boolean;
  sendData: (data: any) => void;
  children?: React.ReactNode;
}> = ({
  name,
  position,
  description,
  enabled,
  image,
  sendData,
  isLoading,
  children,
  ...rest
}) => {
  const defaultValues = {
    name,
    position,
    description,
    enabled,
    image,
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmit = async (data: any) => {
    const form = new FormData();
    form.append('name', data.name);
    form.append('image', data.image);
    form.append('position', data.position);
    form.append('description', data.description);
    form.append('active', data.enabled);
    form.append('base_id', '100001');
    form.append('category_id', '100001');
    form.append('start_date', new Date().toUTCString());

    sendData(form);
  };

  const validationSchema = object({
    name: string().required(),
    position: number().required(),
    description: string().required(),
    enabled: boolean().required(),
    image: mixed(),
  });

  const resolver = yupResolver(validationSchema);

  return (
    <Form
      className="flex p-4  w-full h-full  mt-8 flex-wrap-reverse"
      onSubmit={onSubmit}
      resolver={resolver}
      defaultValues={defaultValues}
    >
      <div className="flex w-full lg:w-6/12">
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex w-full">
              <ControllerInput
                label={
                  <p className="flex font-bold text-primary-300">
                    Nombre del evento
                  </p>
                }
                name="name"
              />
            </div>
            <div className="flex w-full  lg:ml-3">
              <div className="flex w-full flex-col">
                <p className="flex font-bold text-primary-300">Posición</p>
                <Select name="position" options={options} />
              </div>
            </div>
          </div>
          <div>
            <p className="flex font-bold text-primary-300">Descripción</p>
            <Textarea name="description" />
          </div>
          <div className="flex mt-2 flex-col w-full">
            <p className="flex font-bold text-primary-300">Estado</p>
            <SwitchWrapper name="enabled" />
          </div>
          <div className="flex mt-16 w-full items-center justify-center lg:items-start lg:justify-start lg:w-80">
            <Button>
              {isLoading ? (
                <>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="">Loading...</span>
                  </div>
                </>
              ) : (
                <p>Guardar</p>
              )}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center lg:items-start lg:justify-start lg:w-6/12">
        <ImageInput name="image" img={image} />
        {children}
        {/* {name !== '' && (<div className='flex mt-3 lg:ml-8 w-full lg:w-[24rem]'>
                    <Button variant='secondary' >
                        Entradas <TicketIcon className='flex ml-2' />
                    </Button>

                </div>)} */}
      </div>
    </Form>
  );
};

export default EventsForm;
