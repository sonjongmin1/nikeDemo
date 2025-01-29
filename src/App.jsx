import "./App.css";
import { useState } from "react";
import TopBar from "./component/header/topBar.jsx";
import MiddleBar from "./component/header/middleBar.jsx";
import Article from "./component/article/article.jsx";
import Detail from "./pages/detail.jsx";
import Error from "./pages/page404.jsx";
import data from "./data/data.js";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";

function App() {
  let [shoes] = useState(data);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Article shoes={shoes} />
              <div>
                <button onClick={() => {}}>데이터 가져오기</button>
              </div>
            </>
          }
        />
        <Route
          path="/detail"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Detail />
            </>
          }
        />
        {/* 
        라우터의 장점 : 뒤로가기버튼 및 페이지 이동시 유용하게 사용 할 수 있다.
         */}
        <Route
          path="/about"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <About />
            </>
          }
        >
          <Route path="member" element={<div>Member Page</div>} />
          <Route path="location" element={<div>Location Page</div>} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <Error />
              <div>{console.log("오류확인")}</div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
