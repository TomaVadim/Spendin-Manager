import { useEffect } from "react";

export function useOutsideClick(ref, nameIcon, handleClick) {
  useEffect(() => {
    function handleClickOutside(event) {

      if (event.target.dataset.icon === nameIcon) return handleClick(true);

      if (ref.current && !ref.current.contains(event.target)) {
        handleClick(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}