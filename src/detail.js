import { useEffect } from "react";

const useCustomEffect = () => {
  useEffect(() => {
    let detailMain = document.querySelectorAll(".detailMain > div");

    detailMain.forEach((i) => {
      i.addEventListener("click", function () {
        i.style.backgroundColor = "red";
      });
    });
  }, []);
};

export default useCustomEffect;
