import WomenMenu from "../component/menu/womenMenu";
import WomenVideo from "../video/sub-vid1.mp4";
import WomenVideo2 from "../video/sub-vid3.mp4";
import Footer from "../component/footer/footer";
import banner from "../js/bannerjs.jsx";
import Banner from "../component/banner/banner";
const Women = () => {
  banner();
  return (
    <>
      <WomenMenu />
      <section className="main">
        <div className="women-main"></div>
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
      <section className="women-st3">
        <video autoPlay loop muted src={WomenVideo} />
        <div className="main-box1">
          <div className="main-bs">출시 예정</div>
          <div className="main-ep">에어맥스 DN8</div>
          <div>3월 6일 새로워진 다이내믹 에어가 출시됩니다.</div>
          <div className="main-bs"></div>
          <div className="st1-main-btn">알림 받기</div>
        </div>
      </section>
      <section className="main-st3">
        <video autoPlay loop muted src={WomenVideo2} />
        <div className="main-box1">
          <div className="main-ep">승리의 순간을 디자인</div>
          <div>
            나이키 유나이티드를 소개합니다. 여섯 명의 선수와 세 가지 축구화,
            하나의 공통된 목표를 확인해 보세요.
          </div>
          <div className="st1-main-btn">구매하기</div>
        </div>
      </section>
      <section className="main-st2">
        <div>
          <span className="main-st2-tit">Trending Now</span>
          <button id="prev3">〈</button>
          <button id="next3">〉</button>
        </div>
        <div className="card-img-box">
          <div className="main-img1">
            <div>조던X파리 생제르맹</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img2">
            <div>나이키 필드 제너럴</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img3">
            <div>나이키 테크</div>
            <div>
              <a href="#">구매하기</a>
            </div>
          </div>
          <div className="main-img4">
            <div>나이키 팬텀 GX 2 "엘링 홀란드"</div>
            <div>
              <a href="#">구매하기</a>
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
      <Banner />
      <section className="main-st6">
        <div>
          <span className="main-st6-tit2">나이키 멤버쉽</span>
          <button id="prev2">〈</button>
          <button id="next2">〉</button>
        </div>
        <div className="card-img-st6-box">
          <div>
            <div className="main-img1"></div>
            <div>대학생 멤버 혜택</div>
            <div>대학생 할인 프로그램</div>
            <div>구매하기</div>
          </div>
          <div>
            <div className="main-img2"></div>
            <div>대학생 멤버 혜택</div>
            <div>대학생 할인 프로그램</div>
            <div>구매하기</div>
          </div>
          <div>
            <div className="main-img3"></div>
            <div>대학생 멤버 혜택</div>
            <div>대학생 할인 프로그램</div>
            <div>구매하기</div>
          </div>
          <div>
            <div className="main-img4"></div>
            <div>대학생 멤버 혜택</div>
            <div>대학생 할인 프로그램</div>
            <div>구매하기</div>
          </div>
          <div>
            <div className="main-img5"></div>
            <div>대학생 멤버 혜택</div>
            <div>대학생 할인 프로그램</div>
            <div>구매하기</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Women;
