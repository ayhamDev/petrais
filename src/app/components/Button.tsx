import React, { ButtonHTMLAttributes, FC } from "react";
import Typography from "@/components/Typography";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  return (
    <button
      className={`${className} bg-primary hover:opacity-75 duration-300 px-20 py-3 outline-offblack rounded-offshape`}
      {...rest}
    >
      <Typography type="body1" className="text-white">
        {rest.children}
      </Typography>
    </button>
  );
};

export default Button;
