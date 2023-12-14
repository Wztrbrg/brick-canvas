import React from "react";

function AdjustmentSliders({ 
  brightness, 
  contrast, 
  saturation, 
  handleBrightnessChange, 
  handleContrastChange, 
  handleSaturationChange }) {
 


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
          value={brightness}
          onChange={handleBrightnessChange}
        />

        <label htmlFor="contrast">Kontrast</label>
        <input
          type="range"
          id="contrast"
          min="0"
          max="2"
          step="0.1"
          value={contrast}
          onChange={handleContrastChange}
        />

        <label htmlFor="saturation">Mättnad</label>
        <input
          type="range"
          id="saturation"
          min="0"
          max="2"
          step="0.1"
          value={saturation}
          onChange={handleSaturationChange}
        />
      </div>
    </>
  );
}

export default AdjustmentSliders;