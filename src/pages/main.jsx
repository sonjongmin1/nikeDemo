import myVideo from "../video/main-vid1.mp4";
import myVideo2 from "../video/main-vid2.mp4";
import useMenuHid from "../js/menu.jsx";
import btnslide from "../js/slide.jsx";
import banner from "../js/banner.jsx";

const Main = () => {
  useMenuHid();
  btnslide();
  banner();
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
          <span className="main-st2-tit">Trending Now</span>
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
      <section className="main-st3">
        <video autoPlay loop muted src={myVideo2} />
        <div className="main-box1">
          <div className="main-bs">나이키 모티바</div>
          <div className="main-ep">최상의 쿠셔닝</div>
          <div>걷는 순간, 최상의 편안함을 경험해보세요.</div>
          <div className="main-bs">
            뛰어난 쿠셔닝과 혁신적인 컴포트그루브 기술이 충격을 흡수하여, 과감한
            로커 디자인이 탁월한 추진력을 선사합니다.
          </div>
          <div className="st1-main-btn">알림 받기</div>
        </div>
      </section>
      <section className="main-st4">
        <div className="main-st4-tit">New & Featured</div>
        <div className="card-st4-box">
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="main-st5">
        <div>Always Iconic</div>
        <div class="wrap">
          <div class="rolling-list">
            <ul>
              <li className="test1">
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
              <li>
                <div class="image-wrap"></div>
                <div class="desc"></div>
              </li>
            </ul>
          </div>
        </div>
      </section>
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
      <footer>
        <ul>
          <li>
            <a href="#">Featured</a>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <a href="#">신발</a>
            <ul>
              <li>에어포스</li>
              <li>코르테즈</li>
              <li>나이키</li>
              <li></li>
            </ul>
          </li>
          <li>
            <a href="#">의류</a>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <a href="#">Kids</a>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Main;
