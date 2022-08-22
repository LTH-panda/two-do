import { Cell, SvgIcon } from "components/@base";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function SettingsMenual() {
  const { push } = useFlow();

  const onMenual = useCallback(() => push("MenualScreen", {}), []);

  return (
    <button type="button" onClick={onMenual}>
      <Cell
        title="어떻게 사용하나요?"
        right={<SvgIcon name="chevronRight" size={25} />}
      />
    </button>
  );
}

export default SettingsMenual;
