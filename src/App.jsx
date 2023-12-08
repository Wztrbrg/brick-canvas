import React, { useState } from "react";
import Canvas from "./components/Canvas";

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
      <div className="App">
        <h1>Brick Canvas</h1>
        <h2>Ladda upp bild</h2>
        <input type="file" onChange={handleChange} />
      </div>
      <div>
        <Canvas file={file} image={image} />
      </div>
    </>
  );
}

export default App;
