import React, { useEffect, useState } from "react";
import useCanvas from "../hooks/useCanvas";
import "./canvas.css"
import { 
  calculateDominantColor, 
  getColorCount, 
  getTopColors, 
  findClosestColor, 
  colorDistance } from "../utils/canvasUtils";

// Canvas component handles displaying and fitting the uploaded image correctly
function Canvas({ file, image }) {
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
  const [currentSize, setCurrentSize] = useState(canSizes[0]["-"]);

  //Used for zooming in/out on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    let cellSize;
    canvas.width = currentSize.width;
    canvas.height = currentSize.height;
    cellSize = currentSize.cellSize;
    
  }, [currentSize]);

  const changeCanvasSize = (size) => {
    setCurrentSize(size);
  };

  
  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Function for drawing grid on image
    const innerDrawGrid = (context) => {
      const canvasWidth = context.canvas.width;
      const canvasHeight = context.canvas.height;
  
      context.strokeStyle = "#ccc"; // Grid color
      context.lineWidth = 0.5;
  
      // Draw vertical lines
      for (let x = 0; x <= canvasWidth; x += currentSize.cellSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvasHeight);
        context.stroke();
      }
  
      // Draw horizontal lines
      for (let y = 0; y <= canvasHeight; y += currentSize.cellSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvasWidth, y);
        context.stroke();
      }

      // Calculate number of rows and columns based on canvas size and cell size
      const numRows = Math.floor(context.canvas.height / currentSize.cellSize);
      const numCols = Math.floor(context.canvas.width / currentSize.cellSize);

      // Loop through each cell and extract the image data for each cell
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const x = col * currentSize.cellSize;
          const y = row * currentSize.cellSize;
          const cellImageData = context.getImageData(x, y, currentSize.cellSize, currentSize.cellSize);
          
          //calculate dominant color of each cell in the grid
          const dominantColor = calculateDominantColor(cellImageData);

          //fill each cell with their respective dominant color
          context.fillStyle = dominantColor;
          context.fillRect(x, y, currentSize.cellSize, currentSize.cellSize);

        }
      }
    };
  
    if (image) {
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

        innerDrawGrid(ctx);
      };
      img.src = file;
    } else {
      innerDrawGrid(ctx);
    }
  }

  const canvasRef = useCanvas(draw);

  return (
    <>
      <canvas className="canvas" ref={canvasRef} />
      <div className="btn-container">
          {Object.keys(canSizes[0]).map((sizeKey, index) => (
            <button key={index} onClick={() => changeCanvasSize(canSizes[0][sizeKey])}>
              {sizeKey}
            </button>
          ))}
        </div>
    </>
  );
};

export default Canvas;
