import React, { ReactNode } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  className,
  position = "top-left",
  onClick,
}) => {
  const ButtonPosition = (position: string) => {
    switch (position) {
      case "top-right":
        return "top-2 right-2";
      case "bottom-left":
        return "bottom-2 left-2";
      case "bottom-right":
        return "bottom-2 right-2";
      default:
        return "top-2 left-2";
    }
  };

  const getButtonPosition = ButtonPosition(position);

  return (
    <button
      onClick={onClick}
      className={`fixed rounded-full w-[60px] h-[60px] flex justify-center items-center ${getButtonPosition} ${className}`}
    >
      {children}
    </button>
  );
};

export { FloatingButton };
