import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { baseToastMessage, baseToastVisible } from "states/base";

function useToast() {
  const [isToast, setIsToast] = useRecoilState(baseToastVisible);
  const flashToast = useCallback(() => setIsToast(true), []);
  const resetToast = useCallback(() => setIsToast(false), []);

  const [toastMessage, setToastMessage] = useRecoilState(baseToastMessage);

  return { isToast, toastMessage, flashToast, resetToast, setToastMessage };
}

export default useToast;
