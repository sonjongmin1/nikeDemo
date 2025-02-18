import { useEffect } from "react";

const useMenuHid = () => {
  useEffect(() => {
    const middleBar = document.querySelector(".middleBar");
    middleBar.addEventListener("click", function () {
      console.log("Hello");
    });
  }, []);
};

export default useMenuHid;
