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

    midBarHid.addEventListener("mouseleave", function () {
      midBarHid.classList.remove("on");
      mainIntro.classList.remove("on");
    });
  }, []);
};

export default useMenuHid;
