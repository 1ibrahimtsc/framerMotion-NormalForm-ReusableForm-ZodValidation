import * as React from "react";

import { cn } from "@/lib/utils";

const Button3 = ({ className, outline }) => {
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
};

export default Button3;
