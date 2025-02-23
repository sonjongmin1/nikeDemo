import ProductCard from "../component/product/product";
import { products } from "../data/new";
import acd from "../js/accordion.jsx";

const New = () => {
  acd();
  return (
    <>
      <section className="new">
        <div className="side-menu">
          <ul>
            <li className="side-menu-list">
              <a href="#">신제품</a>
              <ul>
                <li>신발</li>
                <li>탑 & 티셔츠</li>
                <li>후디 & 크루</li>
                <li>재킷 & 베스트</li>
                <li>팬츠 & 타이츠</li>
                <li>쇼츠</li>
                <li>트랙수트</li>
                <li>양말</li>
                <li>용품</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">성별</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>남성</li>
                <li>여성</li>
                <li>성인공용</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">키즈</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>남아</li>
                <li>여아</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">스포츠</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>라이프스타일</li>
                <li>러닝</li>
                <li>트레이닝 및 짐</li>
                <li>농구</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">키즈연령</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>베이비(0-3세)</li>
                <li>리틀키즈(3-7세)</li>
                <li>주니어(7-15세)</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">가격대</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>0 ~ 50,000원</li>
                <li>50,000 ~ 100,000원</li>
                <li>100,000 ~ 150,000원</li>
                <li>150,000 ~ 200,000원</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">색상</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>퍼블</li>
                <li>블랙</li>
                <li>레드</li>
                <li>오렌지</li>
                <li>블루</li>
                <li>화이트</li>
                <li>브라운</li>
                <li>그린</li>
                <li>옐로우</li>
                <li>멀티컬러</li>
                <li>그레이</li>
                <li>핑크</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">브랜드</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>나이키 스포츠웨어</li>
                <li>조던</li>
                <li>NikeLab</li>
                <li>ACG</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">운동선수</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>르브론 제임스</li>
                <li>코비 브라이언트</li>
                <li>자 모란트</li>
                <li>러셀 웨스트브룩</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">용도</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>습한 날씨</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">추가 사이즈</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>아시아 사이즈</li>
                <li>US 사이즈</li>
              </ul>
            </li>
            <li className="side-menu-list">
              <a href="#">컬렉션</a>
              <span className="ar-btn">⌃</span>
              <ul className="side-menu-de">
                <li>윈드러너</li>
                <li>티엠포</li>
                <li>에어포스 1</li>
                <li>코르테즈</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="pd-box">
          <div className="pd-box-1">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default New;

/*
        <div className="pd-box">
          <div className="pd-box-1">
            <div>
              <div className="pd-img pd-img1"></div>
              <div className="pd-con">
                <div className="pd-tit">신제품</div>
                <div className="pd-nm">나이키 V5 PNR</div>
                <div className="pd-s">남성 신발</div>
                <div className="pd-s">1개 색상</div>
                <div>119,000원</div>
                <div className="pd-sl">추가 10% 할인(CODE:SCHOOL10)</div>
              </div>
            </div>
            <div>
              <div className="pd-img pd-img1"></div>
              <div className="pd-con">
                <div className="pd-tit">신제품</div>
                <div className="pd-nm">나이키 V5 PNR</div>
                <div className="pd-s">남성 신발</div>
                <div className="pd-s">1개 색상</div>
                <div>119,000원</div>
                <div className="pd-sl">추가 10% 할인(CODE:SCHOOL10)</div>
              </div>
            </div>
            <div>
              <div className="pd-img pd-img1"></div>
              <div className="pd-con">
                <div className="pd-tit">신제품</div>
                <div className="pd-nm">나이키 V5 PNR</div>
                <div className="pd-s">남성 신발</div>
                <div className="pd-s">1개 색상</div>
                <div>119,000원</div>
                <div className="pd-sl">추가 10% 할인(CODE:SCHOOL10)</div>
              </div>
            </div>
          </div>
        </div>
*/
