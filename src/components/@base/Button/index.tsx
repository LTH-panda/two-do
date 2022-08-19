import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  theme?: "primary" | "secondary";
  isFit?: boolean;
};

function Button({
  title,
  onClick,
  theme = "secondary",
  isFit = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${isFit ? "w-fit" : "w-full"} ${
        theme === "primary" ? "bg-sky-500 text-white" : "bg-gray-200"
      } btn`}
    >
      {title}
    </button>
  );
}

export default Button;
