function middleBar() {
  return (
    <header className="middleBar">
      <div className="transBar">
        <div className="transBarMenu">
          <ul>
            <a href="#">New</a>
            <li>에어 조던 1 위대한 여정</li>
            <li>신제품 전체</li>
            <li>베스트셀러</li>
          </ul>
          <ul>
            <a href="#">Shop Icons</a>
            <li>에어 포스1</li>
            <li>에어맥스</li>
            <li>LD-1000</li>
            <li>나이키 C1TY</li>
            <li>필드 제너럴</li>
            <li>줌 보메로</li>
            <li>나이키 킬샷</li>
            <li>V2K</li>
            <li>P-6000</li>
            <li>코르테즈</li>
            <li>덩크</li>
            <li>페가수스</li>
          </ul>
          <ul>
            <a href="#">Shop bt Sport</a>
            <li>러닝</li>
            <li>트레이닝 & 집</li>
            <li>농구</li>
            <li>축구</li>
            <li>요가</li>
            <li>골프</li>
            <li>테니스</li>
            <li>하이킹</li>
            <li>스케이트보딩</li>
            <li>수영</li>
          </ul>
          <ul>
            <a href="#">가이드</a>
            <li>러닝화 가이드</li>
            <li>축구화 가이드</li>
            <li>조던 농구화 가이드</li>
          </ul>
        </div>
      </div>
      <div className="middleLogo">
        <img src="/img/nikeLogo.png" alt="#" width={"80px"} />
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
      <div className="middleIconBox">
        <div className="searchBox">
          <label>
            <div className="xi-search"></div>
          </label>
          <input type="text" placeholder="검색" />
        </div>
        <div className="xi-heart-o middleIcon"></div>
        <div className="xi-basket middleIcon"></div>
      </div>
    </header>
  );
}

export default middleBar;
