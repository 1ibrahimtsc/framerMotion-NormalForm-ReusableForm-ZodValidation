import Container from "../components/Container";

import { FormEvent, useState } from "react";
import { z } from "zod";
import NormalForm from "../components/NormalForm/NormalForm";
import NormalFormZod from "../components/NormalForm/NormalFormZod";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "../components/ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const FormComponent = () => {
  const [modal, setModal] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container className="bg-red-100">
      <h1>------NormalForm------</h1>
      <NormalForm />
      <h1>------NormalForm with Zod------</h1>
      <NormalFormZod />
      <h1>------Reusable Form------</h1>
      <Form
        double={true}
        onSubmit={handleSubmit(onsubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>ttttt</span>}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email1"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
};

export default FormComponent;
