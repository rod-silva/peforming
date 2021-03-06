import React from "react";
import { StyldButton } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyldButton {...rest}>{children}</StyldButton>;
};
