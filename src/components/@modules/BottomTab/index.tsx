import React, { useCallback } from "react";
import { SvgIcon } from "components/@base";
import { activities, useFlow } from "stackflow";

function BottomTab() {
  const { replace } = useFlow();
  const onNavigate = useCallback((screen: keyof typeof activities) => {
    replace(screen, {});
  }, []);

  return (
    <div className="p-8 flex justify-center items-center fixed bottom-0 inset-x-0 border-t-2 border-solid">
      <button
        type="button"
        onClick={() => onNavigate("HomeScreen")}
        className="flex-1 flex justify-center"
      >
        <SvgIcon name="homeSmile" />
      </button>
      <button
        type="button"
        onClick={() => onNavigate("TodoScreen")}
        className="flex-1 flex justify-center"
      >
        <SvgIcon name="check" />
      </button>
      <button
        type="button"
        onClick={() => onNavigate("SettingsScreen")}
        className="flex-1 flex justify-center"
      >
        <SvgIcon name="settings" />
      </button>
    </div>
  );
}

export default BottomTab;
