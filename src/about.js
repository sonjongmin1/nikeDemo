import { useEffect } from "react";

const showText = () => {
  useEffect(() => {
    let hideText = document.querySelector(".hideText");
    setTimeout(() => {
      let a = (hideText.style.display = "none");
    }, 2000);

    return () => {
      // 랜더링 될때마다 중첩을 방지하기 위함 기존 a에서 선언된 setTimeout함수 제거
      clearTimeout(a);
    };
  }, []); // 빈 배열을 넣어 컴포넌트 마운트 시에만 실행
};

export default showText;
  