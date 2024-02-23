import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import Button1 from "../../components/ui/button1";
import { error } from "console";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
            {errors.name && <span>ttttt</span>}
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
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="w-full"
              type="text"
              id="password"
              {...register("password", {
                required: true,
                minLength: 3,
                maxLength: 8,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span>This is required</span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span>Max length exceeded</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span>Min length exceeded</span>
            )}
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
