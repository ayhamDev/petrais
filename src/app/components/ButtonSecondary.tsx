import React, { ButtonHTMLAttributes, FC } from "react";
import Typography from "@/components/Typography";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  return (
    <button
      className={`${className} group bg-white hover:bg-primary duration-300 sm:px-20 px-10 py-3 outline-offblack border-2 border-primary rounded-primary`}
      {...rest}
    >
      <Typography type="body1" className="text-primary group-hover:text-white">
        {rest.children}
      </Typography>
    </button>
  );
};

export default Button;
