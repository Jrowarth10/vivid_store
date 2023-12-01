import { cn } from "@/lib/utils";
import exp from "constants";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto px-5 py-3  bg-black text-white  disabled:cursor-not-allowed  rounded-md border border-black hover:bg-white transition  ease-in-out  hover:text-black
         
          `,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
