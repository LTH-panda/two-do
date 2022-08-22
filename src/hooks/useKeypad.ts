import { useState } from "react";

function useKeypad() {
  const [isOpenKeypad, setIsOpenKeypad] = useState<boolean>(false);

  const initialClientHeight = window.innerHeight;

  function handleResize() {
    if (window.visualViewport.height < initialClientHeight)
      return setIsOpenKeypad(true);
    if (
      document.activeElement?.tagName === "INPUT" ||
      document.activeElement?.tagName === "TEXTAREA"
    )
      return setIsOpenKeypad(true);

    return setIsOpenKeypad(false);
  }

  window.addEventListener("resize", handleResize);

  return { isOpenKeypad };
}

export default useKeypad;
