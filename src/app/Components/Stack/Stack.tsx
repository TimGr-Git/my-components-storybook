import { PropsWithChildren, CSSProperties } from "react";
import "../../globals.css";

type StackProps = PropsWithChildren & {
  orientation: "horizontal" | "vertical";
};

export const Stack = ({ children, orientation = "horizontal" }: StackProps) => {
  const orientationStyles: Record<StackProps["orientation"], CSSProperties> = {
    horizontal: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      alignItems: "center",
    },
    vertical: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-start",
    },
  };

  return <div style={{ ...orientationStyles[orientation] }}>{children}</div>;
};
export default Stack;
