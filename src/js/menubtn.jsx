import { useEffect } from "react";

const menubtn = () => {
  useEffect(() => {
    let mbMenuModal = document.querySelector(".mb-me-modal");
    let menuIc = document.querySelector(".me-ic");
    let mbMenuIc = document.querySelector(".mb-cl");
    menuIc.addEventListener("click", function () {
      mbMenuModal.classList.add("on");
      menuIc.style.display = "none";
    });
    mbMenuIc.addEventListener("click", function () {
      mbMenuModal.classList.remove("on");
      menuIc.style.display = "block";
    });
  }, []);
};

export default menubtn;
