import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FormElementContext } from ".";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
        "md:grid-cols-2": double,
      })}
    >
      <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
        <button className="btn w-full md:w-fit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};
