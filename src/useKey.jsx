import { useEffect } from "react";

export function useKey(key, action) {
  //ESC key
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);
      //cleanup effect
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
