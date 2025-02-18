import "./App.css";
import TopBar from "./component/menu/topBar.jsx";
import MiddleBar from "./component/menu/middleBar.jsx";
import Main from "./pages/main.jsx";
import { Routes, Route } from "react-router-dom";
import "../src/scss/main.scss";

function App() {
  return (
    <>
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/nikeDemo"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Main />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
