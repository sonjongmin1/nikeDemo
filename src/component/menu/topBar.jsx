function TopBar() {
  return (
    <header>
      <div className="topBarLogo">
        <div>
          <img
            src="../../nikeDemo/img/nikeLogoPeple.png"
            alt="#"
            width={"35px"}
          />
        </div>
        <div>
          <img src="../../nikeDemo/img/arrowLogo.png" alt="#" width={"35px"} />
        </div>
      </div>
      <ul className="topBarMenu">
        <li>매장 찾기</li>
        <li>고객센터</li>
        <li>가입하기</li>
        <li>로그인</li>
      </ul>
    </header>
  );
}

export default TopBar;
