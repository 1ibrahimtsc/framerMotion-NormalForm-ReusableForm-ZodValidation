import { cn } from "@/lib/utils";
import { FieldValues, useForm } from "react-hook-form";
//import Button1 from "../ui/button1";
import { error } from "console";
//import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./Validation";

/*
const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(8, "Password is too short"),
});

type TNormalForm = z.infer<typeof SignUpSchema>;
*/

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "border border-gray-300 rounded-lg shadow-sm p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        <div
          className={cn(" grid grid-cols-1 gap-5 justify-items-center", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="w-full"
              type="text"
              id="email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="w-full"
              type="text"
              id="password"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div className="w-full max-w-md">
            <label className="block" htmlFor="district">
              District
            </label>
            <select>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
              <option value="">four</option>
              <option value="">five</option>
            </select>
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="message">
              message
            </label>
            <textarea></textarea>
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="agree">
              agree
            </label>
            <input className="" type="checkbox" />
          </div>
        </div>
        <div
          className={cn(
            " grid grid-cols-1 gap-5 justify-items-center bg-green-400 my-8",
            {
              "md:grid-cols-2": double,
            }
          )}
        >
          <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <button className="btn w-full md:w-fit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NormalForm;
