import { cn } from "@/lib/utils";
import { useContext } from "react";
import { FormElementContext } from ".";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid grid-cols-1 gap-5 justify-items-center", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
