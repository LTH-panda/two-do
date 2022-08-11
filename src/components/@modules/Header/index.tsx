import React from "react";

type HeaderProps = {
  left?: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
};

function Header({ left, title, right }: HeaderProps) {
  return (
    <header className="p-4 absolute top-0 z-10 inset-x-0 flex items-center">
      {left && <div className="mr-auto">{left}</div>}
      <h1 className="font-primary text-3xl p-4">{title}</h1>
      <div className="ml-auto">{right}</div>
    </header>
  );
}

export default Header;
