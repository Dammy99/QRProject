import React, { MouseEventHandler } from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  color?: string;
  text?: string;
  border?: string;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  outline?: string;
  hoverColor?: string;
  hoverUnderline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size,
  backgroundColor,
  color,
  border,
  text,
  type,
  onClick,
  outline,
  hoverColor,
  hoverUnderline,
}) => {
  const buttonStyle = {
    padding:
      size === "small"
        ? "8px 16px"
        : size === "medium"
        ? "12px 24px"
        : "16px 32px",
    backgroundColor: backgroundColor ?? "transparent",
    outline: outline ?? "none",
    color: color,
    border: border ?? "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "underline",
    transition: "0.3s ease",
    textDecorationThickness: '2px', // Товщина підкреслення
    textUnderlineOffset: '4px',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      style={buttonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.color = hoverColor ?? "initial";
        e.currentTarget.style.textDecoration = hoverUnderline ? "underline" : "none" 
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = "initial"
        e.currentTarget.style.textDecoration = "none"
      }}
    >
      {text}
    </button>
  );
};

export default Button;
