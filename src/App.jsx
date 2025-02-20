import "./App.css";
import TopBar from "./component/menu/topBar.jsx";
import MiddleBar from "./component/menu/middleBar.jsx";
import Main from "./pages/main.jsx";
import New from "./pages/new.jsx";
import Men from "./pages/men.jsx";
import Women from "./pages/women.jsx";
import Kids from "./pages/kids.jsx";
import Sale from "./pages/sale.jsx";
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
        {/* New */}
        <Route
          path="/nikeDemo/new"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <New />
            </>
          }
        />
        {/* Men */}
        <Route
          path="/nikeDemo/men"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Men />
            </>
          }
        />
        {/* Women */}
        <Route
          path="/nikeDemo/women"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Women />
            </>
          }
        />
        {/* Kids */}
        <Route
          path="/nikeDemo/kids"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Kids />
            </>
          }
        />
        {/* Sale */}
        <Route
          path="/nikeDemo/sale"
          element={
            <>
              <TopBar />
              <MiddleBar />
              <Sale />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
