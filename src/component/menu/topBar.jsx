import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <header className="topBar">
      <div className="topBarLogo">
        <div>
          <NavLink to={"/nikeDemo"}>
            <img
              className="dt-no"
              src="../../nikeDemo/img/nikeLogoPeple.png"
              alt="#"
              width={"35px"}
            />
            <img
              className="mb-topBarMenu"
              src="../../nikeDemo/img/nikeLogoPeple.png"
              alt="#"
              width={"45px"}
            />
          </NavLink>
        </div>

        <NavLink to={"/nikeDemo"}>
          <div className="nk-ar">
            <img
              src="../../nikeDemo/img/arrowLogo.png"
              alt="#"
              width={"35px"}
            />
          </div>
        </NavLink>
      </div>
      <ul className="topBarMenu">
        <li>
          <a href="https://www.nike.com/kr/retail">매장 찾기</a>
        </li>
        <li>
          <a href="https://www.nike.com/kr/help">고객센터</a>
        </li>
        <li>
          <a href="https://www.nike.com/kr/membership">가입하기</a>
        </li>
        <li>
          <a href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=5fed4f1317214664bcd37a534f9a2cfd&ui_locales=ko-KR&code_challenge=ywD7efX0AwARo-Zz3zsnBW7tMqDX-hByEW06GvqI0qE&code_challenge_method=S256">
            로그인
          </a>
        </li>
      </ul>
      <ul className="mb-topBarMenu">
        {/* <li className="se-ic"></li> */}
        {/* <li className="pe-ic"></li> */}
        {/* <li className="iv-ic"></li> */}
        <li className="me-ic"></li>
      </ul>
    </header>
  );
}

export default TopBar;
