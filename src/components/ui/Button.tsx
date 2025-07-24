import React from "react";

type Variant = "standard" | "outlined";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const getStyles = (variant?: Variant): string => {
  if (variant === "outlined") {
    return "border-amber-50 border-1 rounded-xl border-solid";
  }

  if (variant === "standard") {
    return "";
  }

  return "";
};

export const Button: React.FC<IProps> = ({
  variant,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        p-2
        rounded
        transition
        ${getStyles(variant)}
        ${
          disabled
            ? "bg-gray-200 text-gray-950 opacity-60"
            : "hover:bg-amber-50 hover:text-gray-950 cursor-pointer"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
