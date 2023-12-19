import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useCurCanvas } from "../context/CurCanvasContext";
import useCanvas from "../hooks/useCanvas";
import "./confirmpage.css";
import ZoomButtons from "../components/ZoomButtons";

function ConfirmPage() {
  //Initial canvas sizes, scaling to a 4x3 x (24x24 baseplates)
  const canSizes = [
    {
      "-": {
        width: 576,
        height: 768,
        cellSize: 8,
      },
      "+": {
        width: 720,
        height: 960,
        cellSize: 10,
      }
    }
  ]

  const { curCanvas } = useCurCanvas();
  const [currentSize, setCurrentSize] = useState(canSizes[0]["-"]);
  const [colorCount, setColorCount] = useState([
    {
      "color": "",
      "ID": 0,
      "total": "",
    }
  ]);


  const colorIDMap = [
    { "color": "rgba(244, 244, 244, 1)", "ID": 1 },
    { "color": "rgba(208, 206, 201, 1)", "ID": 2 },
    { "color": "rgba(178, 180, 178, 1)", "ID": 3 },
    { "color": "rgba(140, 138, 136, 1)", "ID": 4 },
    { "color": "rgba(100, 100, 100, 1)", "ID": 5 },
    { "color": "rgba(22, 22, 22, 1)", "ID": 6 },
    { "color": "rgba(0, 187, 220, 1)", "ID": 7 },
    { "color": "rgba(62, 135, 203, 1)", "ID": 8 },
    { "color": "rgba(51, 63, 72, 1)", "ID": 9 },
    { "color": "rgba(0, 53, 80, 1)", "ID": 10 },
    { "color": "rgba(221, 121, 117, 1)", "ID": 11 },
    { "color": "rgba(197, 70, 68, 1)", "ID": 12 },
    { "color": "rgba(218, 41, 28, 1)", "ID": 13 },
    { "color": "rgba(177, 162, 202, 1)", "ID": 14 },
    { "color": "rgba(142, 127, 174, 1)", "ID": 15 },
    { "color": "rgba(236, 208, 181, 1)", "ID": 16 },
    { "color": "rgba(240, 196, 160, 1)", "ID": 17 },
    { "color": "rgba(250, 170, 141, 1)", "ID": 18 },
    { "color": "rgba(248, 173, 109, 1)", "ID": 19 },
    { "color": "rgba(229, 158, 109, 1)", "ID": 20 },
    { "color": "rgba(189, 154, 122, 1)", "ID": 21 },
    { "color": "rgba(181, 129, 80, 1)", "ID": 22 },
    { "color": "rgba(255, 105, 0e, 1)", "ID": 23 },
    { "color": "rgba(166, 85, 35, 1)", "ID": 24 },
    { "color": "rgba(105, 63, 35, 1)", "ID": 25 },
    { "color": "rgba(78, 53, 36, 1)", "ID": 26 },
    { "color": "rgba(120, 78, 144, 1)", "ID": 27 },
    { "color": "rgba(248, 229, 154, 1)", "ID": 28 },
    { "color": "rgba(213, 200, 151, 1)", "ID": 29 },
    { "color": "rgba(239, 182, 97, 1)", "ID": 30 },
    { "color": "rgba(255, 209, 0, 1)", "ID": 31 },
    { "color": "rgba(255, 163, 0), 1)", "ID": 32 },
    { "color": "rgba(229, 155, 220, 1)", "ID": 33 },
    { "color": "rgba(177, 78, 181, 1)", "ID": 34 },
    { "color": "rgba(174, 164, 111, 1)", "ID": 35 },
    { "color": "rgba(174, 184, 98, 1)", "ID": 36 },
    { "color": "rgba(181, 189, 0, 1)", "ID": 37 },
    { "color": "rgba(239, 215, 229, 1)", "ID": 38 },
    { "color": "rgba(94, 126, 41, 1)", "ID": 39 },
    { "color": "rgba(231, 147, 183, 1)", "ID": 40 },
    { "color": "rgba(207, 87, 138, 1)", "ID": 41 },
    { "color": "rgba(51, 85, 37, 1)", "ID": 42 },
    { "color": "rgba(45, 200, 77, 1)", "ID": 43 },
    { "color": "rgba(0, 154, 68, 1)", "ID": 44 },
  ];

  //Used for zooming in/out on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = currentSize.width;
    canvas.height = currentSize.height;
    let cellSize = currentSize.cellSize;
    
  }, [currentSize]);



  const countColorsInCells = (ctx) => {
    const aspectRatio = ctx.canvas.width / ctx.canvas.height;
    let imgWidth = ctx.canvas.width;
    let imgHeight = imgWidth / aspectRatio;
  
    const cellSize = currentSize.cellSize;
    const offsetX = (ctx.canvas.width - imgWidth) / 2;
    const offsetY = (ctx.canvas.height - imgHeight) / 2;
  
    const tempColorCount = {}; // Using an object to store color counts
  
    for (let x = offsetX; x + cellSize <= imgWidth + offsetX; x += cellSize) {
      for (let y = offsetY; y + cellSize <= imgHeight + offsetY; y += cellSize) {
        const cellData = ctx.getImageData(x, y, cellSize, cellSize).data;
        const rgba = `rgba(${cellData[0]}, ${cellData[1]}, ${cellData[2]}, ${cellData[3]})`;
  
        if (rgba in tempColorCount) {
          tempColorCount[rgba]++;
        } else {
          tempColorCount[rgba] = 1;
        }
      }
    }
  
    // Convert the temporary object to an array of objects for the structure you need
    const colorsArray = Object.keys(tempColorCount).map((color) => ({
      color,
      total: tempColorCount[color],
    }));
  
    // Update the state with the new color count array
    setColorCount(colorsArray); // Assuming you have a state setter function for colorCount
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(colorCount);    
  }


  const draw = (ctx) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        let imgWidth = ctx.canvas.width;
        let imgHeight = imgWidth / aspectRatio;

        if (imgHeight < ctx.canvas.height) {
          imgHeight = ctx.canvas.height;
          imgWidth = imgHeight * aspectRatio;
        }

        const offsetX = (ctx.canvas.width - imgWidth) / 2;
        const offsetY = (ctx.canvas.height - imgHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, imgWidth, imgHeight);

        countColorsInCells(ctx);
      }
      img.src = curCanvas;
  }

  const canvasRef = useCanvas(draw);

  return (
    <>
      <Header />
      <div className="confirm-page-wrapper">
        <h1>Färdig Bild</h1>
        <canvas ref={canvasRef} />
        <ZoomButtons setCurrentSize={(currentSize) => setCurrentSize(currentSize)} canSizes={canSizes}/>
        <button onClick={handleSubmit}>Lägg i Kundvagn</button>
      </div>
    </>
  );
}

export default ConfirmPage;