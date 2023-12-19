import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CanvasPage from "./pages/CanvasPage";
import ConfirmPage from "./pages/ConfirmPage"
import { CurCanvasProvider } from "./context/CurCanvasContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <CurCanvasProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="canvas" element={<CanvasPage />}></Route>
            <Route path="confirm" element={<ConfirmPage />}></Route>
          </Routes>
        </CurCanvasProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
