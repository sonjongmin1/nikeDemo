import { useEffect } from "react";

const acd = () => {
  useEffect(() => {
    let acd = document.querySelectorAll(".side-menu-de");
    let arBtn = document.querySelectorAll(".ar-btn");

    arBtn.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        // 클릭한 버튼에 해당하는 acd 요소의 "on" 클래스를 toggle
        acd[index].classList.toggle("on");
        arBtn[index].classList.toggle("on");
      });
    });
  }, []);
};

export default acd;
