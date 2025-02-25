import { useEffect } from "react";

const useMbSlide = () => {
  useEffect(() => {
    let ftMenuA = document.querySelectorAll(".ft-a");
    let ftMenu = document.querySelectorAll(".ft-menu");
    let ftMenuA2 = document.querySelectorAll(".ft-a2");
    let ftMenu2 = document.querySelectorAll(".ft-menu2");

    ftMenuA.forEach((btn, index) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        ftMenu[index].classList.toggle("on");
        ftMenuA[index].classList.toggle("on");
      });
    });

    ftMenuA2.forEach((btn2, index2) => {
      btn2.addEventListener("click", function (event) {
        event.preventDefault();
        ftMenu2[index2].classList.toggle("on");
        ftMenuA2[index2].classList.toggle("on");
      });
    });

    // 수정된 부분: useEffect의 닫는 괄호를 추가했습니다.
  }, []);
};

export default useMbSlide;
