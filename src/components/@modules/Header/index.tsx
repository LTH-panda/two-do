import React from "react";

type HeaderProps = {
  left?: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
};

function Header({ left, title, right }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center px-2 iosPTop">
      {left && <div className="mr-auto">{left}</div>}
      <h1 className="px-4 py-4 text-4xl font-primary">{title}</h1>
      {right && <div className="ml-auto">{right}</div>}
    </header>
  );
}

export default Header;
