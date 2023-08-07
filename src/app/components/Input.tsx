import React, { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={`${className} bg-secondary py-3 px-6 w-full placeholder-offblack placeholder-opacity-60 text-offblack  outline-offset-0 rounded-primary`}
      {...rest}
    />
  );
};

export default Input;
