import React from "react";

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <h1 className="text-3xl font-primary">{title}</h1>;
}

export default Title;
