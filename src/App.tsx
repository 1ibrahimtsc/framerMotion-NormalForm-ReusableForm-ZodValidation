import Container from "./components/Container";
import Button3 from "./components/ui/button3";
import Button1 from "./components/ui/button1";
import Button2 from "./components/ui/button2";
import Modal1 from "./components/ui/Modal1";
import { FormEvent, useState } from "react";
import { z } from "zod";
import NormalForm from "./components/NormalForm/NormalForm";
import NormalFormZod from "./components/NormalForm/NormalFormZod";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function App() {
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
      <h1>Main content</h1>
      <NormalForm />
      <NormalFormZod />

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
}

export default App;
