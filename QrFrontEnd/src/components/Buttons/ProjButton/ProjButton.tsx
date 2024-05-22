import React, { MouseEventHandler } from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large" | "none";
  backgroundColor?: string;
  color?: string;
  text: string;
  border?: string;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  outline?: string;
  hoverColor?: string;
  hoverUnderline?: boolean;
  transition?: boolean;
  hoverZoom?: string;
  hoverBackgroundColor?: string;
  margin?: string;
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
  transition,
  hoverZoom,
  hoverBackgroundColor,
  margin
}) => {
  const buttonStyle = {
    padding:
      size === "small"
        ? "8px 16px"
        : size === "medium"
        ? "12px 24px"
        : size === "large"
        ? "16px 32px"
        : "none",
    backgroundColor: backgroundColor ?? "transparent",
    outline: outline ?? "none",
    color: color ?? "black",
    border: border ?? "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    transition: transition ? "0.3s ease" : "none",
    textDecorationThickness: '2px', // Товщина підкреслення
    textUnderlineOffset: '4px',
    margin: margin ?? "0"
  };

  return (
    <button
      onClick={onClick}
      type={type}
      style={buttonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.color = hoverColor ?? color!;
        e.currentTarget.style.textDecoration = hoverUnderline ? "underline" : "none" 
        e.currentTarget.style.transform = hoverZoom ? `scale(${hoverZoom})` : "none"
        e.currentTarget.style.backgroundColor = hoverBackgroundColor! ?? backgroundColor!
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = color! ?? "initial"
        e.currentTarget.style.textDecoration = "none"
        e.currentTarget.style.transform = "none"
        e.currentTarget.style.backgroundColor = backgroundColor!
      }}
    >
      {text}
    </button>
  );
};

export default Button;
