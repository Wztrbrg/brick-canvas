const calculateDominantColor = (imageData) => {
  const colorCount = {};
  let maxCount = 0;
  let dominantColor = "rgba(0, 0, 0, 0)"; // Default transparent color

  for (let i = 0; i < imageData.data.length; i += 4) {
    const rgba = `rgba(${imageData.data[i]}, ${imageData.data[i + 1]}, ${
      imageData.data[i + 2]
    }, ${imageData.data[i + 3]})`;
    colorCount[rgba] = (colorCount[rgba] || 0) + 1;

    if (colorCount[rgba] > maxCount) {
      maxCount = colorCount[rgba];
      dominantColor = rgba;
    }
  }

  return dominantColor;
};

export { calculateDominantColor };
