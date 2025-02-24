import useMenuHid from "../../js/menu.jsx";
import { NavLink } from "react-router-dom";

function middleBar() {
  useMenuHid();
  return (
    <>
      <header className="middleBar">
        <NavLink to={"/nikeDemo"}>
          <div className="middleLogo">
            <img src="/nikeDemo/img/nikeLogo.png" alt="#" width={"80px"} />
          </div>
        </NavLink>
        <ul className="middleMenu">
          <li>
            <NavLink to={"/nikeDemo/new"}>New</NavLink>
          </li>
          <li>
            <NavLink to={"/nikeDemo/men"}>Men</NavLink>
          </li>
          <li>
            <NavLink to={"/nikeDemo/women"}>Women</NavLink>
          </li>
          <li>
            <NavLink to={"/nikeDemo/kids"}>Kids</NavLink>
          </li>
          <li>
            <NavLink to={"/nikeDemo/sale"}>Sale</NavLink>
          </li>
        </ul>
        <div className="middleIconBox"></div>
      </header>
      <ul className="middleBar-hid">
        <li>
          <NavLink to={"/nikeDemo/new"}>New</NavLink>
          <ul>
            <li>새 학기 컬렉션</li>
            <li>Air Max</li>
            <li>신제품 전체</li>
            <li>베스트셀러</li>
          </ul>
        </li>
        <li>
          <NavLink to={"/nikeDemo/men"}>Men</NavLink>
          <ul>
            <li>신발</li>
            <li>의류</li>
            <li>용품</li>
            <li>Jordan</li>
          </ul>
        </li>
        <li>
          <NavLink to={"/nikeDemo/women"}>Women</NavLink>
          <ul>
            <li>신발</li>
            <li>의류</li>
            <li>용품</li>
            <li>Jordan</li>
          </ul>
        </li>
        <li>
          <NavLink to={"/nikeDemo/kids"}>Kids</NavLink>
          <ul>
            <li>신발</li>
            <li>의류</li>
            <li>용품</li>
            <li>Jordan</li>
          </ul>
        </li>
        <li>
          <NavLink to={"/nikeDemo/sale"}>Sale</NavLink>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </li>
      </ul>
      <div className="main-intro">
        이 사이트는 학습 및 포트폴리오를 위해 제작되었습니다.
      </div>
    </>
  );
}

export default middleBar;
