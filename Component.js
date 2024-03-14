// ComponentToShow.js
import React from "react";
import Slider from "./Slider";
function ComponentToShow() {
  const Images = [
    { url: "" },
    { url: "https://picsum.photos/id/238/200/300" },
    { url: "https://picsum.photos/id/239/200/300" },
    
  ];
  const SliderContainer = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div>
        <h1>ComponentToShow</h1>
        <div className="SliderContainer" style={SliderContainer}>
          <Slider img={Images} />
        </div>
      </div>
    </div>
  ); // Return the component to be shown here</div>);
}

exportexport default ComponentToShow;
