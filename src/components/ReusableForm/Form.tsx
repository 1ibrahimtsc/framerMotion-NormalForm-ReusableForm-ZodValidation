import { TForm } from "@/Types";
import { cn } from "@/lib/utils";
import { createContext } from "react";

export const FormElementContext = createContext<{ double: boolean }>(null);
// provider

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-300 rounded-lg shadow-sm p-5 mx-auto",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
