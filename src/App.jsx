import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CanvasPage from "./pages/CanvasPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="canvas" element={<CanvasPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
