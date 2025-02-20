import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    // 롤링 배너 복제본 생성
    let roller = document.querySelector(".rolling-list");
    roller.id = "roller1";

    let clone = roller.cloneNode(true);
    clone.id = "roller2";

    document.querySelector(".wrap").appendChild(clone);

    document.querySelector("#roller1").style.left = "0px";
    document.querySelector("#roller2").style.left =
      document.querySelector(".rolling-list ul").offsetWidth + "px";

    roller.classList.add("original");
    clone.classList.add("clone");
  }, []);

  return <div className="wrap"></div>; // JSX 반환
};

export default Banner;
