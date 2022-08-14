import useToast from "hooks/useToast";
import React, { useEffect } from "react";

function Toast() {
  const { isToast, resetToast, toastMessage } = useToast();

  useEffect(() => {
    const reset = setTimeout(() => {
      resetToast();
    }, 1000);
    return () => clearTimeout(reset);
  }, [isToast]);

  if (!isToast) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="z-50 px-8 py-2 text-white bg-gray-800 rounded-2xl">
        {toastMessage}
      </div>
    </div>
  );
}

export default Toast;
