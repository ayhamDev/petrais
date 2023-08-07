import React, { FC } from "react";

export default function Wrapper(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${props.className} max-w-[1200px] h-full mx-auto px-6`}>
      {props.children}
    </div>
  );
}
