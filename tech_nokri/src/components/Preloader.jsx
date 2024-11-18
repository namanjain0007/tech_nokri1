import React from "react";
import "./CSS/Preloader.css"; // Import the CSS file

const Preloader = () => {
  return (
    <div className="preloader-container">
      {/* Circle animation container */}
      <div className="preloader-image-container">
        {/* Simple Loading Image */}
        <img
          src="https://www.technokri.com/assets/img/logo/logo.png"
          alt="Logo"
          className="preloader-image"
        />
      </div>
    </div>
  );
};

export default Preloader;
