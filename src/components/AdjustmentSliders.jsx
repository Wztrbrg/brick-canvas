import React from "react";

function AdjustmentSliders({ 
  setBrightness, 
  setContrast, 
  setSaturation,
}) {
 
  // Function to handle brightness slider change
  const handleBrightnessChange = (event) => {
    const { value } = event.target;
    setBrightness(Number(value));
  };

  // Function to handle contrast slider change
  const handleContrastChange = (event) => {
    const { value } = event.target;
    setContrast(Number(value));
  };

  // Function to handle saturation slider change
  const handleSaturationChange = (event) => {
    const { value } = event.target;
    setSaturation(Number(value));
  
  };


  return (
    <>
      <div className="slider-container">
        <h2>Justera bildens ljus och färg efter dina egna önskemål</h2>
        <label htmlFor="brightness">Ljusstyrka</label>
        <input
          type="range"
          id="brightness"
          min="-100"
          max="100"
          onChange={handleBrightnessChange}
        />

        <label htmlFor="contrast">Kontrast</label>
        <input
          type="range"
          id="contrast"
          min="0"
          max="2"
          step="0.1"
          onChange={handleContrastChange}
        />

        <label htmlFor="saturation">Mättnad</label>
        <input
          type="range"
          id="saturation"
          min="0"
          max="2"
          step="0.1"
          onChange={handleSaturationChange}
        />
      </div>
    </>
  );
}

export default AdjustmentSliders;