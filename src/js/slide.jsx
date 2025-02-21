import { useEffect } from "react";

// 버튼 슬라이드 기능을 구현하는 함수
const btnslide = () => {
  useEffect(() => {
    // 첫 번째 슬라이더
    let cardImgBox = document.querySelector(".card-img-box");
    let prev = document.querySelector("#prev");
    let next = document.querySelector("#next");
    let cardImgWidth = cardImgBox.querySelector("div").offsetWidth + 20;

    const slideLeft = () => {
      cardImgBox.scrollBy({
        left: -cardImgWidth,
        behavior: "smooth",
      });
    };

    const slideRight = () => {
      cardImgBox.scrollBy({
        left: cardImgWidth,
        behavior: "smooth",
      });
    };

    prev.addEventListener("click", slideLeft);
    next.addEventListener("click", slideRight);

    // 두 번째 슬라이더
    let cardImgBox2 = document.querySelector(".card-img-st6-box");
    let prev2 = document.querySelector("#prev2");
    let next2 = document.querySelector("#next2");

    let cardImgWidth2 = cardImgBox2.querySelector("div").offsetWidth + 20;

    const slideLeft2 = () => {
      cardImgBox2.scrollBy({
        left: -cardImgWidth2,
        behavior: "smooth",
      });
    };

    const slideRight2 = () => {
      cardImgBox2.scrollBy({
        left: cardImgWidth2,
        behavior: "smooth",
      });
    };

    prev2.addEventListener("click", slideLeft2);
    next2.addEventListener("click", slideRight2);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      prev.removeEventListener("click", slideLeft);
      next.removeEventListener("click", slideRight);
      prev2.removeEventListener("click", slideLeft2);
      next2.removeEventListener("click", slideRight2);
    };
  }, []);
};

export default btnslide;
