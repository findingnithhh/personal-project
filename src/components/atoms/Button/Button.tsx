import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "neutral"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  color = "neutral",
  type = "button",
  onClick,
}) => {
  const ButtonSize = (size: string) => {
    switch (size) {
      case "xs":
        return "px-3 py-2 text-xs text-center text-gray-100 rounded-md";
      case "sm":
        return "px-3 py-2 text-sm text-center text-gray-100 rounded-md";
      case "md":
        return "px-5 py-2.5 text-sm text-center text-gray-100 rounded-md";
      case "lg":
        return "px-5 py-3 text-base text-center text-gray-100 rounded-md";
      case "xl":
        return "px-6 py-3.5 text-base text-center text-gray-100 rounded-md";
      default:
        return "px-5 py-2.5 text-sm text-center text-gray-100 rounded-md";
    }
  };

  const ButtonColor = (color: string) => {
    switch (color) {
      case "neutral":
        return "bg-[#232A33]";
      case "primary":
        return "bg-[#646EE4]";
      case "secondary":
        return "bg-[#EF47BC]";
      case "info":
        return "bg-[#00B5FF]";
      case "success":
        return "bg-[#00935F]";
      case "warning":
        return "bg-[#FFBE00]";
      case "error":
        return "bg-[#FF5861]";
      default:
        return "bg-blue-500";
    }
  };

  const getButtonSize = ButtonSize(size);
  const getButtonColor = ButtonColor(color);
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${getButtonColor} ${getButtonSize} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export { Button };
