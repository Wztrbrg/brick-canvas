const colors = [
  "rgba(224, 224, 224, 1)",
  "rgba(189, 189, 189, 1)",
  "rgba(145, 145, 145, 1)",
  "rgba(107, 107, 107, 1)",
  "rgba(59, 59, 59, 1)",
  "rgba(0, 0, 0, 1)",
  "rgba(63, 193, 249, 1)",
  "rgba(12, 125, 216, 1)",
  "rgba(22, 51, 75, 1)",
  "rgba(5, 58, 101, 1)",
  "rgba(183, 124, 109, 1)",
  "rgba(159, 83, 64, 1)",
  "rgba(218, 52, 11, 1)",
  "rgba(207, 185, 241, 1)",
  "rgba(158, 132, 200, 1)",
  "rgba(238, 214, 187, 1)",
  "rgba(238, 201, 159, 1)",
  "rgba(245, 182, 131, 1)",
  "rgba(245, 194, 131, 1)",
  "rgba(200, 142, 71, 1)",
  "rgba(173, 138, 95, 1)",
  "rgba(153, 110, 58, 1)",
  "rgba(241, 110, 20, 1)",
  "rgba(172, 96, 44, 1)",
  "rgba(107, 65, 36, 1)",
  "rgba(69, 44, 27, 1)",
  "rgba(76, 31, 109, 1)",
  "rgba(251, 238, 183, 1)",
  "rgba(204, 193, 149, 1)",
  "rgba(239, 193, 86, 1)",
  "rgba(249, 204, 22, 1)",
  "rgba(249, 166, 22, 1)",
  "rgba(244, 158, 249, 1)",
  "rgba(187, 80, 193, 1)",
  "rgba(137, 149, 80, 1)",
  "rgba(150, 167, 70, 1)",
  "rgba(159, 180, 59, 1)",
  "rgba(246, 207, 240, 1)",
  "rgba(44, 87, 9, 1)",
  "rgba(235, 147, 205, 1)",
  "rgba(195, 51, 146, 1)",
  "rgba(17, 75, 18, 1)",
  "rgba(56, 225, 58, 1)",
  "rgba(27, 154, 28, 1)",
];

// Function to calculate the closest color match
const findClosestColor = (targetColor) => {
  let closestColor = colors[0];
  let minDistance = getColorDistance(targetColor, closestColor);

  for (let i = 1; i < colors.length; i++) {
    const currentColor = colors[i];
    const distance = getColorDistance(targetColor, currentColor);

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = currentColor;
    }
  }

  return closestColor;
};

// Helper function to calculate the distance between two colors
const getColorDistance = (color1, color2) => {
  // Implement a method to calculate the distance between colors
  // This could be Euclidean distance, CIEDE2000, or any other color distance formula
  // For simplicity, here's a basic Euclidean distance for RGBA colors:
  const [r1, g1, b1, a1] = color1.slice(5, -1).split(",").map(Number);
  const [r2, g2, b2, a2] = color2.slice(5, -1).split(",").map(Number);

  return Math.sqrt(
    (r2 - r1) ** 2 + (g2 - g1) ** 2 + (b2 - b1) ** 2 + (a2 - a1) ** 2
  );
};

// Function to calculate the dominant color and replace it with the closest color from the array
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

  // Find the closest color match
  const closestColor = findClosestColor(dominantColor);

  return closestColor;
};

export { calculateDominantColor };
