import React from 'react';
import { mixed, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../forms/from';
import { ControllerInput } from '../../forms/inputs/input.component';
import { Button } from '../../common';

type NewPasswordForm = {
  code: string;
  new_password: string;
};

const NewPassword: React.FC = () => {
  const defaultValues = {
    code: '',
    new_password: '',
  };
  const onSubmit = (values: NewPasswordForm) => {
    console.log(values);
  };
  const validationSchema = object({
    code: string().required(),
    new_password: string().required(),
  });

  const resolver = yupResolver(validationSchema);
  return (
    <div className="flex w-full lg:w-80">
      <Form
        defaultValues={defaultValues}
        resolver={resolver}
        onSubmit={onSubmit}
      >
        <ControllerInput
          label={<p className="flex text-lg">Code</p>}
          name="code"
        />
        <ControllerInput
          label={<p className="flex text-lg">New Password</p>}
          type="password"
          name="new_password"
        />
        <div className="flex w-full my-4 justify-center items-center">
          <Button>Guardar</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewPassword;
