import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  theme?: "primary" | "secondary";
};

function Button({ title, onClick, theme = "secondary" }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        theme === "primary" && "!bg-sky-500 text-white"
      } btn isHover`}
    >
      {title}
    </button>
  );
}

export default Button;
