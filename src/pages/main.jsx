import myVideo from "../video/main-vid1.mp4";
import useMenuHid from "../js/menu.jsx";
import btnslide from "../js/slide.jsx";

const Main = () => {
  useMenuHid();
  btnslide();
  return (
    <>
      <div className="main-intro">
        이 사이트는 학습 및 포트폴리오를 위해 제작되었습니다.
      </div>
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
      <section className="main-st2">
        <div>
          Trending Now
          <button id="prev">〈</button>
          <button id="next">〉</button>
        </div>
        <div className="card-lay">
          <ul className="card-box">
            <li className="main-img1"></li>
            <li className="main-img2"></li>
            <li className="main-img3"></li>
            <li className="main-img4"></li>
            <li className="main-img5"></li>
            <li className="main-img6"></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
