import React from "react";
import * as Icons from "./icons";

type SvgIconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
};

function SvgIcon({ name, size = 30, color = "#000" }: SvgIconProps) {
  const Icon = Icons[name];

  return <Icon width={size} height={size} color={color} />;
}

export default SvgIcon;
