import { useEffect } from "react";

let detailTab = function () {
  useEffect(() => {
    let detailTabEl = document.querySelectorAll(".detailTab > li");
    let detailContent = document.querySelectorAll(".detailContent > li");

    detailTabEl.forEach((i, index) => {
      i.addEventListener("click", function () {
        detailTabEl.forEach((el) => {
          el.classList.remove("on");
        });

        i.classList.add("on");

        detailContent.forEach((dt) => {
          dt.classList.remove("on");
          index == 0
            ? detailContent[index].classList.add("on")
            : index == 1
            ? detailContent[index].classList.add("on")
            : index == 2
            ? detailContent[index].classList.add("on")
            : index == 3
            ? detailContent[index].classList.add("on")
            : null;
        });
      });
    });
  }, []);
};

export default detailTab;
