import { SvgIcon } from "components/@base";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

type HeaderProps = {
  back?: "back" | "close";
  title?: string;
};

function Header({ back, title }: HeaderProps) {
  const { pop } = useFlow();
  const onBack = useCallback(() => pop(), []);

  return (
    <header className="p-8">
      {back && (
        <button type="button" onClick={onBack}>
          {back === "back" ? (
            <SvgIcon name="chevronLeft" />
          ) : (
            <SvgIcon name="close" />
          )}
        </button>
      )}
      <h1 className="font-primary text-3xl">{title}</h1>
    </header>
  );
}

export default Header;
