import React from "react";

type SettingsCellProps = {
  title: string;
};

function SettingsCell({ title }: SettingsCellProps) {
  return <div className="p-8 text-xl font-primary">{title}</div>;
}

export default SettingsCell;
