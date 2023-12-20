import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string, number, mixed } from 'yup';
import Form from '@/components/forms/from';
import {
  ControllerInput,
  Select,
  SwitchWrapper,
} from '@/components/forms/inputs';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/common';

const options = [
  {
    label: 'por asiento',
    value: 'per_seat',
  },
  {
    label: 'general',
    value: 'general',
  },
];

const Label = ({ label }: { label: string }) => {
  return <label className="font-bold text-primary-300">{label}</label>;
};
const EntryForm: React.FC<{
  name: string;
  label: string;
  price: number;
  seats_per_table: number;
  color: string;
  max_entries: number;
  type: string;
  index: number;
  full_table: boolean;
  active: boolean;
  sendData: (data: any) => void;
}> = ({
  name,
  label,
  type,
  price,
  seats_per_table,
  active,
  full_table,
  max_entries,
  color,
  sendData,
}) => {
    const { eventId } = useParams();
    const defaultValues = {
      name,
      label,
      price,
      seats_per_table,
      color,
      max_entries,
      type,
      full_table,
      active,
    };
    const onSubmit = (values: any) => {
      const data = {
        event_id: Number(eventId),
        name: String(values.name),
        label: String(values.label),
        //price: Number(values.price),
        seats_per_table: String(values.seats_per_table),
        full_table: String(values.full_table),
        type: String(values.type),
        active: String(values.active),
        properties: JSON.stringify({
          start_index: values.index,
          color: values.color,
          max_seats: values.max_entries,
        }),
        //amount: String(values.price),

        // price: String(values.price),
        // amount: String(values.price),
        // active: String(values.active),
        // index: String(values.index),
        // event_id: eventId || '',
        // full_table: String(values.full_table),
        // max_entries: String(values.max_entries),
        // seats_per_table: String(values.seats_per_table),
        // properties: JSON.stringify({
        //     start_index: values.index,
        //     color: values.color,
        //     max_seats: values.max_entries,
        // })
      };
      sendData(data);
      console.log(values);
    };
    const validationSchema = object({
      name: string().required(),
      label: string().required(),
      // price: number().required(),
      seats_per_table: number().required(),
      color: string(),
      max_entries: number().required(),
      type: string().required(),
      full_table: boolean().required(),
      active: boolean().required(),
      index: number().required(),
    });

    const resolver = yupResolver(validationSchema);
    return (
      <Form
        className="flex flex-col p-2"
        defaultValues={defaultValues}
        resolver={resolver}
        onSubmit={onSubmit}
      >
        <div className="flex items-center justify-center flex-col w-full lg:flex-row">
          <ControllerInput label={<Label label="nombre" />} name="name" />
          <div className="flex w-full flex-col ml-2">
            <Label label="type" />
            <Select options={options} name="type" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full lg:flex-row">
          <ControllerInput label={<Label label="Etiqueta" />} name="label" />
          {/* <div className="flex w-full flex-col ml-2">
          <ControllerInput label={<Label label="Precio ($)" />} name="price" />
        </div> */}
        </div>
        <div className="flex items-center justify-center flex-col w-full lg:flex-row">
          <ControllerInput
            label={<Label label="Asientos por mesa" />}
            name="seats_per_table"
          />
          <div className="flex w-full flex-col ml-2">
            <ControllerInput label={<Label label="Color" />} name="color" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full lg:flex-row">
          <ControllerInput
            label={<Label label="Número máximo de asientos" />}
            name="max_entries"
          />
          <div className="flex mt-6 w-full flex-col ml-2">
            <SwitchWrapper label="Mesa Completa" name="full_table" />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full lg:flex-row">
          <ControllerInput
            label={<Label label="Indice inicial para creación" />}
            name="index"
          />
          <div className="flex mt-6 w-full flex-col ml-2">
            <SwitchWrapper name="active" />
          </div>
        </div>
        <div className="flex mt-8">
          <Button variant="secondary">Eliminar</Button>
          <div className="flex w-full ml-2">
            <Button type="submit">Guardar</Button>
          </div>
        </div>
      </Form>
    );
  };

export default EntryForm;
