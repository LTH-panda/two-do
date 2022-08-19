import { RefObject, useEffect } from "react";

function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void
) {
  useEffect(() => {
    const listener = (e: Event) => {
      // ref가 활성화 돼있지않거나, ref 자식의 요소를 클릭 할 때
      if (!ref.current || ref.current.contains(e.target as Node)) return null;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
