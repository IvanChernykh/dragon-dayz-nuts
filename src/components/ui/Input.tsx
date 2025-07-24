import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return <input className={`bg-gray-800 p-2 ${className}`} {...props} />;
};
