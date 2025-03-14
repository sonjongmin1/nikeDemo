import { useEffect } from "react";

const menubtn = () => {
  useEffect(() => {
    let mbMenuModal = document.querySelector(".mb-me-modal");
    let mbMeModalList = document.querySelectorAll(".mb-me-modal-list");
    let menuIc = document.querySelector(".me-ic");
    let mbMenuIc = document.querySelector(".mb-cl");
    let body = document.querySelector("body");
    menuIc.addEventListener("click", function () {
      mbMenuModal.classList.add("on");
      menuIc.style.display = "none";
      body.style.overflow = "hidden";
    });
    mbMenuIc.addEventListener("click", function () {
      mbMenuModal.classList.remove("on");
      menuIc.style.display = "block";
      body.style.overflow = "";
    });

    mbMeModalList.forEach((item) => {
      item.addEventListener("click", function () {
        mbMenuModal.classList.remove("on");
        menuIc.style.display = "block";
        body.style.overflow = "";
      });
    });
  }, []);
};

export default menubtn;
