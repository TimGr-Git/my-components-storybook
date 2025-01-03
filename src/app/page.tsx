"use client"; // allows interactivity, such as onClick, to work in any child components of the page without needing to explicitly mark each child as a Client Component.

import "./globals.css";
import Button from "./Components/Button/Button";
import Stack from "./Components/Stack/Stack";
import AppHeader from "./Components/AppHeader/AppHeader";

export default function Home() {
  const sizes = ["sm", "md", "lg"] as const; // Sizes of buttons
  const types = ["primary", "default", "danger"] as const; // Types of buttons
  const sizeMap: Record<string, string> = {
    sm: "Small",
    md: "Medium",
    lg: "Large",
  };

  const handleClick = (type: string, size: string) => {
    console.log(
      `${type.charAt(0).toUpperCase()}${type.slice(1)} button of size ${sizeMap[size].charAt(0).toLowerCase()}${sizeMap[size].slice(1)} clicked`
    );
  };

  // Function to generate a stack for a specific type with all sizes
  const createStackForType = (type: (typeof types)[number]) => {
    return (
      <Stack key={type} orientation="horizontal">
        {sizes.map((size) => (
          <Button
            key={`${type}-${size}`}
            type={type}
            size={size}
            onClick={() => handleClick(type, size)}
          >
            {`${type.charAt(0).toUpperCase()}${type.slice(1)} ${sizeMap[size]}`}
          </Button>
        ))}
      </Stack>
    );
  };
  // Backgroundcolors: current: #f2ede6   alternative?: #e8decc
  return (
    <>
      <AppHeader type="minimal" />
      <div
        style={{
          backgroundColor: "#f2ede6",
          height: "100%", // Use calc() to subtract AppHeader height
          minHeight: "calc(100vh - 0.25rem)",
        }}
      >
        <h1 className="text-3xl p-4 flex justify-center content-center font-bold underline">
          Dynamic Button Stacks
        </h1>

        <div className="flex items-center flex-col">
          {types.map((type) => (
            <div key={type} className="m-4">
              <h2 className="text-xl font-semibold mb-4">{`${type.charAt(0).toUpperCase()}${type.slice(1)} Buttons`}</h2>
              {createStackForType(type)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
