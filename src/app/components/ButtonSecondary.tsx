import React, { ButtonHTMLAttributes, FC } from "react";
import Typography from "@/components/Typography";
import Link, { LinkProps } from "next/link";

interface IButton extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

const Button: FC<IButton> = ({ className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`${className} group bg-white hover:bg-primary duration-300 sm:px-20 px-10 py-3 outline-offblack border-2 border-primary rounded-primary flex justify-center items-center`}
    >
      <Typography type="body1" className="text-primary group-hover:text-white">
        {rest.children}
      </Typography>
    </Link>
  );
};

export default Button;
