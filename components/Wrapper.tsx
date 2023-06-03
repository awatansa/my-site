import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Wrapper(props: Props) {
  const { children, className } = props;

  return <div className={`w-full h-full ${className ? className : ""}`}>{children}</div>;
}
