import "./App.css";
import { useState } from "react";
import TopBar from "./component/header/topBar.jsx";
import MiddleBar from "./component/header/middleBar.jsx";
import Article from "./component/article/article.jsx";
import Detail from "./pages/detail.jsx";
import Error from "./pages/page404.jsx";
import data from "./data/data.js";
import data2 from "./data/data2.js";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import axios from "axios";

function App() {
  let [shoes] = useState(data);
  let [shoes2, setShoes2] = useState(data2);

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
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        // console.log(result.data);
                        let copy = [...shoes2, ...result.data];
                        setShoes2(copy);
                        console.log(copy);
                      })
                      .catch(() => {
                        console.log("서버 요청 실패");
                      });
                  }}
                >
                  데이터 가져오기
                </button>
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
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
