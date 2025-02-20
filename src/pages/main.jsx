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
      <footer className="main-ft">
        <ul>
          <li>
            <a href="#">Featured</a>
            <ul>
              <li>에어 포스1</li>
              <li>코르테즈</li>
              <li>나이키 C1TY</li>
              <li>필드 제너럴</li>
            </ul>
          </li>
          <li>
            <a href="#">신발</a>
            <ul>
              <li>전체 보기</li>
              <li>러닝</li>
              <li>농구</li>
              <li>라이프스타일</li>
            </ul>
          </li>
          <li>
            <a href="#">의류</a>
            <ul>
              <li>전체 보기</li>
              <li>재킷 & 베스트</li>
              <li>후디 & 크루</li>
              <li>조거 & 스웻팬츠</li>
            </ul>
          </li>
          <li>
            <a href="#">Kids</a>
            <ul>
              <li>베이비 신발</li>
              <li>키즈 신발</li>
              <li>키즈 러닝 신발</li>
              <li>키즈 농구 신발</li>
            </ul>
          </li>
        </ul>
      </footer>
      <footer className="main-ft2">
        <div className="main-ft2-ln-top"></div>
        <div className="main-ft2-ln-bt"></div>
        <ul>
          <li>
            <a href="#">안내</a>
            <ul>
              <li>멤버가입</li>
              <li>매장찾기</li>
              <li>나이키 저널</li>
            </ul>
          </li>
          <li>
            <a href="#">멤버 혜택</a>
            <ul>
              <li>웰컴 쿠폰</li>
              <li>생일 쿠폰</li>
              <li>학생 할인 쿠폰</li>
            </ul>
          </li>
          <li>
            <a href="#">고객센터</a>
            <ul>
              <li>주문배송조회</li>
              <li>반품 정책</li>
              <li>결제 방법</li>
              <li>공지사항</li>
              <li>문의하기</li>
            </ul>
          </li>
          <li>
            <a href="#">회사소개</a>
            <ul>
              <li>About Nike</li>
              <li>소식</li>
              <li>채용</li>
              <li>투자자</li>
              <li>지속 가능성</li>
              <li>신고하기</li>
            </ul>
          </li>
        </ul>
        <div className="ft-ic-box">
          <div className="earth-ic"></div>
          <div className="kr">대한민국</div>
        </div>
        <div>
          <div className="ft-con">
            <p>
              <a href="#">© 2025 Nike, Inc. All Rights Reserved</a>
            </p>
            <p>
              <a href="#">이용약관</a>
            </p>
            <p>
              <a href="#">개인정보처리방침</a>
            </p>
            <p>
              <a href="#">위치정보이용약관</a>
            </p>
            <p>
              <a href="#">영상정보처리기기 운영 방침</a>
            </p>
          </div>
        </div>
      </footer>
      <footer className="main-ft3">
        <div>
          <p>
            (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
            멘데스 서울 강남구 테헤란로 152 강남파이낸스센터 30층 <br />|
            통신판매업신고번호
          </p>
          <p>2011-서울강남-03461 | 등록번호 220-88-09068 사업자 정보 확인</p>
          <p>
            고객센터 전화 문의 080-022-0182 FAX 02-6744-5880 | 이메일
            service@nike.co.kr | 호스팅서비스사업자 (유)나이키코리아
          </p>
        </div>
        <div>
          <p>
            현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신
            한국결제네트웍스 유한회사의 구매안전 서비스를 이용하실 수 있습니다.
          </p>
          <p>콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 자세히 보기</p>
        </div>
      </footer>
    </>
  );
};

export default Main;
