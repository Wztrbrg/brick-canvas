import React from "react";
import useCanvas from "../hooks/useCanvas";

// Canvas component handles displaying and fitting the uploaded image correctly
function Canvas({ file, image }) {
  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Function for drawing grid on image
    const innerDrawGrid = (context) => {
      const cellSize = 8; // Size of each LEGO piece cell in pixels
      const canvasWidth = context.canvas.width;
      const canvasHeight = context.canvas.height;
  
      context.strokeStyle = "#ccc"; // Grid color
      context.lineWidth = 0.5;
  
      // Draw vertical lines
      for (let x = 0; x <= canvasWidth; x += cellSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvasHeight);
        context.stroke();
      }
  
      // Draw horizontal lines
      for (let y = 0; y <= canvasHeight; y += cellSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvasWidth, y);
        context.stroke();
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

  return <canvas className="canvas-test" ref={canvasRef} height={768} width={576} />;
};

export default Canvas;
