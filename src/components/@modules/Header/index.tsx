import React from "react";

type HeaderProps = {
  left?: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
};

function Header({ left, title, right }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center pt-4 backdrop-blur">
      {left && <div className="mr-auto">{left}</div>}
      <h1 className="px-8 py-4 text-4xl font-primary">{title}</h1>
      {right && <div className="ml-auto">{right}</div>}
    </header>
  );
}

export default Header;
