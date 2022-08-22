import React, { useCallback } from "react";
import { SvgIcon } from "components/@base";
import { activities, useFlow } from "stackflow";
import { useActivity } from "@stackflow/react";

function BottomTab() {
  const { name } = useActivity();
  const { replace } = useFlow();
  const onNavigate = useCallback((screen: keyof typeof activities) => {
    replace(screen, {});
  }, []);

  return (
    <div className="flex items-center justify-center bg-white border-t-2 border-solid iosBottomTab">
      <button
        type="button"
        onClick={() => onNavigate("HomeScreen")}
        className="flex justify-center flex-1 p-8"
      >
        <SvgIcon
          name="homeSmile"
          color={name === "HomeScreen" ? "#000" : "#cbd5e1"}
          size={30}
        />
      </button>
      <button
        type="button"
        onClick={() => onNavigate("SettingsScreen")}
        className="flex justify-center flex-1 p-8"
      >
        <SvgIcon
          name="settings"
          color={name === "SettingsScreen" ? "#000" : "#cbd5e1"}
          size={30}
        />
      </button>
    </div>
  );
}

export default BottomTab;
