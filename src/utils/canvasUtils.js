export function getCellData(data, x, y, width, cellSize) {
  const cellData = [];

  for (let i = y; i < y + cellSize; i++) {
    for (let j = x * 4; j < (x + cellSize) * 4; j += 4) {
      const index = i * (width * 4) + j;
      const pixel = data.slice(index, index + 4);
      cellData.push(pixel);
    }
  }

  return cellData;
}

export function calculateAverageColor(cellData) {
  let sumRed = 0,
    sumGreen = 0,
    sumBlue = 0;

  cellData.forEach((pixel) => {
    sumRed += pixel[0];
    sumGreen += pixel[1];
    sumBlue += pixel[2];
  });

  const pixelCount = cellData.length;
  const averageColor = [
    Math.round(sumRed / pixelCount),
    Math.round(sumGreen / pixelCount),
    Math.round(sumBlue / pixelCount),
  ];

  return averageColor;
}

export function fillCell(ctx, x, y, cellSize, color) {
  ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  ctx.fillRect(x, y, cellSize, cellSize);
}
