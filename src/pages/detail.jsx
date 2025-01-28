import { useState } from "react";
import useCustomEffect from "../detail.js";

function Detail() {
  useCustomEffect();
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      // 이미 열려 있으면 닫기
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // 열려 있지 않으면 추가
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <>
      <div className="detailBox">
        <ul className="sideMenu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <h3 onClick={() => (index === 0 ? null : toggleAccordion(index))}>
                <span>{item.title}</span>
                {index !== 0 && (
                  <span
                    className={`underArrow ${
                      activeIndices.includes(index) ? "on" : ""
                    }`}
                  ></span>
                )}
              </h3>
              <ul
                className={`accordion ${
                  index === 0 || activeIndices.includes(index) ? "on" : ""
                }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="sideMenu2"></div>
        <div className="detailMain">
          <div>Test1</div>
          <div>Test2</div>
          <div>Test3</div>
        </div>
      </div>
    </>
  );
}

const menuItems = [
  {
    title: "남성 신발(994)",
    subItems: [
      "라이프스타일",
      "조던",
      "러닝",
      "농구",
      "축구",
      "트레이닝 및 짐",
      "스케이트보딩",
      "골프",
      "테니스",
      "샌들 & 슬리퍼",
    ],
  },
  {
    title: "성별 (1)",
    subItems: ["남성", "여성", "유니섹스"],
  },
  {
    title: "키즈",
    subItems: ["남아", "여아"],
  },
  {
    title: "스포츠",
    subItems: ["라이프스타일", "Performance", "러닝", "트레이닝 및 짐"],
  },
  {
    title: "키즈연령",
    subItems: ["주니어(7-15세)"],
  },
  {
    title: "가격대",
    subItems: ["0 - 50,000원", "50,000 - 100,000원", "150,000 - 200,000원"],
  },
  {
    title: "할인율",
    subItems: ["20% 이상"],
  },
  {
    title: "색상",
    subItems: [
      "블랙",
      "블루",
      "브라운",
      "그린",
      "그레이",
      "멀티컬러",
      "오렌지",
      "핑크",
      "퍼플",
    ],
  },
  {
    title: "브랜드",
    subItems: ["나이키 스포츠웨어", "조던", "NikeLab", "ACG"],
  },
  {
    title: "컬렉션",
    subItems: ["폼포짓", "나이키 로말레오", "에어포스1", "에어맥스"],
  },
  {
    title: "에어맥스",
    subItems: ["에어맥스 1", "에어맥스 90", "에어맥스 180", "에어맥스 2017"],
  },
];

export default Detail;
