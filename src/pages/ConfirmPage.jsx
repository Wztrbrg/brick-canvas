import React from "react";
import Header from "../components/Header";
import { useCurCanvas } from "../context/CurCanvasContext";
import "./confirmpage.css";

function ConfirmPage() {
  const { curCanvas } = useCurCanvas();

  return (
    <>
      <Header />
      <div className="confirm-page-wrapper">
        <h1>Färdig Bild</h1>
        <img src={curCanvas} />
      </div>
    </>
  );
}

export default ConfirmPage;