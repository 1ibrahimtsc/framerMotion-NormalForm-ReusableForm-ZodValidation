import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

type TRef = HTMLButtonElement;

type TVariant = "solid" | "ghost" | "outline";

type TButtonOptions = {
  variant?: TVariant; // 'solid', 'ghost', 'outline'
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button2 = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };

    return (
      <button
        ref={ref}
        className={cn(getVariant(variant), className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button2;
