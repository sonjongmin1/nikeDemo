import { useState } from "react";
import { Outlet } from "react-router-dom";
import showText from "../about.js";

function About() {
  let [count, setCount] = useState(0);
  showText();

  return (
    <div>
      <button
        onClick={() => {ㅌ
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {count}
      <div className="hideText">2초이내에 텍스트는 사라지는 기능 구현</div>
      <Outlet></Outlet>
    </div>
  );
}

export default About;

// 과제 Detail About page 방문 후 2초지나면 <div> 숨기기
