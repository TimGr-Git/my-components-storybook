import { PropsWithChildren, CSSProperties, useState } from "react";
import "../../globals.css";

type AppHeaderProps = PropsWithChildren<{
  type: "default" | "minimal";
}>;

export const AppHeader = ({ type = "default" }: AppHeaderProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const typeStyles: Record<AppHeaderProps["type"], CSSProperties> = {
    default: {
      backgroundColor: "#8f705c",
      height: "3rem",
      width: "100%",
      color: "#f2ede6",
    },
    minimal: {
      backgroundColor: isHovered ? "#8f705c" : "#f2ede6",
      borderColor: isHovered ? "#8f705c" : "#f2ede6",
      color: "#f2ede6",
      // height: isHovered ? "3rem" : "0",
      width: "100%",
    },
  };

  return (
    <div className="flex justify-center">
      <div
        className="flex items-center justify-start"
        style={{ ...typeStyles[type] }}
        onMouseEnter={() => setIsHovered(true)} // Trigger hover effect
        onMouseLeave={() => setIsHovered(false)} // Remove hover effect
      >
        <button
          type="button"
          className={`w-6 h-12 p-2 flex gap-1 flex-col col flex-nowrap z-10 cursor-pointer`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default AppHeader;
