import { SvgIcon } from "components/@base";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

type BackProps = {
  theme: "back" | "close";
};

function Back({ theme }: BackProps) {
  const { pop } = useFlow();
  const onBack = useCallback(() => pop(), []);

  return (
    <button type="button" onClick={onBack} className="p-4">
      {theme === "back" ? (
        <SvgIcon name="chevronLeft" />
      ) : (
        <SvgIcon name="close" />
      )}
    </button>
  );
}

export default Back;
