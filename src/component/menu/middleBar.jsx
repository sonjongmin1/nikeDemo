import useMenuHid from "../../js/menu.jsx";

function middleBar() {
  useMenuHid();
  return (
    <>
      <header className="middleBar">
        <div className="middleLogo">
          <img src="/nikeDemo/img/nikeLogo.png" alt="#" width={"80px"} />
        </div>
        <ul className="middleMenu">
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Jordan</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>
        <div className="middleIconBox"></div>
      </header>
      <ul className="middleBar-hid">
        <li>
          <a href="#">NEW</a>
          <ul>
            <li>새 학기 컬렉션</li>
            <li>Air Max</li>
            <li>신제품 전체</li>
            <li>베스트셀러</li>
          </ul>
        </li>
        <li>
          <a href="#">MEN</a>
          <ul>
            <li>New</li>
            <li>신발</li>
            <li>의류</li>
            <li>용품</li>
            <li>Jordan</li>
          </ul>
        </li>
        <li>
          <a href="#">WOMEN</a>
          <ul>
            <li>New</li>
            <li>신발</li>
            <li>의류</li>
            <li>용품</li>
            <li>Jordan</li>
          </ul>
        </li>
        <li>
          <a href="#">KIDS</a>
          <ul>
            <li>New</li>
            <li>신발</li>
            <li>의류</li>
            <li>용품</li>
            <li>Jordan</li>
          </ul>
        </li>
        <li>
          <a href="#">SALE</a>
          <ul>
            <li>Sale</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default middleBar;
