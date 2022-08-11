import React from "react";
import { SvgIcon } from "components/@base";

function BottomTab() {
  return (
    <div className="p-4 flex justify-center items-center">
      <button type="button" className="flex-1 flex justify-center">
        <SvgIcon name="homeSmile" />
      </button>
      <button type="button" className="flex-1 flex justify-center">
        <SvgIcon name="check" />
      </button>
      <button type="button" className="flex-1 flex justify-center">
        <SvgIcon name="settings" />
      </button>
    </div>
  );
}

export default BottomTab;
