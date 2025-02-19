import { useEffect } from "react";

const btnslide = () => {
  useEffect(() => {
    let prev = document.querySelector("#prev");
    let next = document.querySelector("#next");
    let cardBox = document.querySelector(".card-box");

    // 카드의 이동 거리와 현재 위치 추적 변수
    const slideWidth = 396; // 각 슬라이드의 가로 크기
    let currentPosition = 0; // 초기 위치는 0으로 설정

    // prev 버튼 클릭 시
    prev.addEventListener("click", function () {
      // 이전 페이지로 이동
      currentPosition += slideWidth;
      cardBox.style.transform = `translateX(${currentPosition}px)`;
    });

    // next 버튼 클릭 시
    next.addEventListener("click", function () {
      // 다음 페이지로 이동
      currentPosition -= slideWidth;
      cardBox.style.transform = `translateX(${currentPosition}px)`;
    });
  }, []);
};

export default btnslide;
