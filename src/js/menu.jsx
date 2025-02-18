import { useEffect } from "react";

const useMenuHid = () => {
  useEffect(() => {
    let middleBar = document.querySelector(".middleBar");
    let midBarHid = document.querySelector(".middleBar-hid");
    let mainIntro = document.querySelector(".main-intro");
    middleBar.addEventListener("mouseenter", function () {
      midBarHid.classList.add("on");
      mainIntro.classList.add("on");
    });
  }, []);
};

export default useMenuHid;
