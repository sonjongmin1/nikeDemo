import KidsMenu from "../component/menu/kidsMenu";
import myVideo from "../video/main-vid1.mp4";
import Footer from "../component/footer/footer.jsx";
import kidsVid from "../video/kids-vid1.mp4";
import Banner from "../component/banner/banner.jsx";
import banner from "../js/bannerjs.jsx";

const Kids = () => {
  banner();

  return (
    <>
      <KidsMenu />
      <section className="main">
        <video autoPlay loop muted src={myVideo} />
        <div className="main-box1">
          <div className="main-bs">새로운 시작을 위한 완벽한 준비</div>
          <div className="main-ep">새 학기, 더 나은 시작</div>
          <div>
            운동장에서 교실까지, 나이키와 함께 빛나는 새 학기를 시작해 보세요.
          </div>
          <div className="main-bs">
            3.2(일)까지 제공되는 특별한 할인 혜택과 함께 완벽한 새 학기 준비를
            위한 아이템을 만나보세요
          </div>
          <div className="main-col">
            <div>대학생 새 학기 컬렉션</div>
            <div>키즈 새 학기 컬렉션</div>
          </div>
        </div>
      </section>
      <section className="main-st1">
        <div className="main-st1-bg"></div>
        <div className="main-ep">
          압도적 쿠션감,
          <br /> 완벽한 러닝을 구현하다
        </div>
        <div>2월 27일 출시</div>
        <div className="st1-main-btn">알림 받기</div>
      </section>
      <section className="main-st3">
        <div className="kids-img1"></div>
        <div className="main-box1">
          <div className="main-bs">출시 예정</div>
          <div className="main-ep">에어맥스 DN8</div>
          <div>3월 6일, 새로워진 다이내믹 에어가 출시됩니다.</div>
          <div className="st1-main-btn">알림받기</div>
        </div>
      </section>
      <section className="main-st3">
        <video autoPlay loop muted src={kidsVid} />
        <div className="main-box1">
          <div className="main-bs">키즈 신제품</div>
          <div className="main-ep">도시의 새로운 아이콘, C1TY</div>
          <div>
            나이키 C1TY는 도시에서 마주하는 모든 환경에 적응할 수 있도록
            설계되었습니다.
          </div>
          <div className="st1-main-btn">구매하기</div>
        </div>
      </section>
      <section className="main-st2">
        <div>
          <span className="main-st2-tit">New & Featured</span>
          <button id="prev">〈</button>
          <button id="next">〉</button>
        </div>
        <div className="card-img-box">
          <div className="main-img1">
            <div>조던X파리 생제르맹</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img2">
            <div>나이키 필드 제너럴</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img3">
            <div>나이키 테크</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img4">
            <div>나이키 팬텀 GX 2 "엘링 홀란드"</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img5">
            <div>나이키 줌 플라이 6</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img6">
            <div>에어맥스 Dn8</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
        </div>
      </section>
      <section className="kids-st6">
        <div>Sizes for All</div>
        <ul>
          <li className="kids-img1"></li>
          <li className="kids-img2"></li>
          <li className="kids-img3"></li>
        </ul>
      </section>
      <Banner />
      <section className="kids-st7">
        <div>
          <span className="main-st6-tit2">Shop By Sport</span>
          <button id="prev2">〈</button>
          <button id="next2">〉</button>
        </div>
        <div className="card-img-st6-box">
          <div>
            <div className="main-img1">
              <div>러닝</div>
            </div>
          </div>
          <div>
            <div className="main-img2">
              <div>트레이닝</div>
            </div>
          </div>
          <div>
            <div className="main-img3">
              <div>축구</div>
            </div>
          </div>
          <div>
            <div className="main-img4">
              <div>농구</div>
            </div>
          </div>
          <div>
            <div className="main-img5">
              <div>댄스</div>
            </div>
          </div>
          <div>
            <div className="main-img5">
              <div>스케이트보딩</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kids;
