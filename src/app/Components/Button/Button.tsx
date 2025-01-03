import { PropsWithChildren, CSSProperties, useState } from "react";
import "../../globals.css";

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  type: "primary" | "default" | "danger";
  size: "sm" | "md" | "lg";
}>;

export const Button = ({
  children,
  onClick,
  type = "default",
  size = "md",
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const typeStyles: Record<ButtonProps["type"], CSSProperties> = {
    primary: {
      backgroundColor: isHovered ? "#6891bd" : "#6891bd", // Darker shade on hover
      borderColor: isHovered ? "#f2ede6" : "", // Change border color
      color: isHovered ? "#f2ede6" : "",
    },
    default: {
      backgroundColor: isHovered ? "#000" : "#dadde3", // Light gray on hover
      borderColor: isHovered ? "#a0a3a8" : "",
      color: isHovered ? "#dadde3" : "#000",
    },
    danger: {
      backgroundColor: isHovered ? "#000" : "#f2ede6", // Red tint on hover
      borderColor: isHovered ? "#940d06" : "#940d06",
      color: isHovered ? "#940d06" : "#940d06",
    },
  };

  const sizeStyles: Record<ButtonProps["size"], CSSProperties> = {
    sm: {
      padding: "0.5rem",
      fontSize: "0.75rem",
      fontWeight: "bold",
    },
    md: {
      padding: "0.75rem",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    lg: {
      padding: "1rem",
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
  };

  return (
    <div className="flex justify-center">
      <button
        className="button"
        style={{ ...typeStyles[type], ...sizeStyles[size] }}
        onMouseEnter={() => setIsHovered(true)} // Trigger hover effect
        onMouseLeave={() => setIsHovered(false)} // Remove hover effect
        onClick={onClick || (() => {})}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
