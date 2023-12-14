import React, { useState } from "react";
import "./upload.css";

function Upload({ onFileChange }) {
  const [file, setFile] = useState(null);

  function handleChange(e) {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
      onFileChange(uploadedFile);
    } else {
      setFile(null);
      onFileChange(null);
    }
  }

  return (
    <div className="input-wrapper">
      <h2>Börja med att ladda upp din bild</h2>
      <input className="upload-btn" type="file" onChange={handleChange} />
    </div>
  );
}

export default Upload;