import * as React from "react";

import { cn } from "@/lib/utils";

const Button1 = ({ className, variant }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";
      default:
        return "btn-solid";
    }
  };
  return <button className={cn(getVariant(variant), className)}>Click</button>;
};

export default Button1;

/*
 return (
    <button
      className={cn(
        "bg-red-500 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10": outline,
        },
        className
      )}
    >
      Click
    </button>
  );
  
*/
