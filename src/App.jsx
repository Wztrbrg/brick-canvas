import React, { useState } from "react";
import Canvas from "./components/Canvas";
import "./app.css"

function App() {
  const [file, setFile] = useState(); 
  const [image, setImage] = useState(null);

  function handleChange(e) {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
      setImage(uploadedFile);
    } else {
      setFile(null);
      setImage(null);
    }
  }

  return (
    <>
      <div className="page-wrapper">
        <h1>Brick Canvas</h1>
        <div className="input-wrapper">
          <h2>Ladda upp bild</h2>
          <input type="file" onChange={handleChange} />
        </div>
        <div className="canvas-wrapper">
          <Canvas file={file} image={image} />
        </div>
      </div>
    </>
  );
}

export default App;
