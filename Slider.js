import React from "react";
import { useState } from "react";
function Slider({ img }) {
  const [currentindex, setCurrentIndex] = useState(0);
  let Isindex;

  setInterval(() => {
    Isindex = currentindex === img.length - 1;
    let val = Isindex ? 0 : currentindex + 1;
    console.log(val);
    setCurrentIndex(val);
  }, 2000);

  const SliderImg = {
    height: "100%",
    position: "realtive",
  };
  const SlideImg = {
    width: "100%",
    height: "100%",
    backgroundposition: "center",
    backgroundsize: "cover",
    backgroundImage: `url(${img[currentindex].url})`,
    transition: "1s",
  };
  const Rbtn = {
    width: "50px",
    height: "25px",
    color: "Black",
  };
  const Lbtn = {
    width: "70px",
    height: "25px",
    color: "Black",
  };
  const btns = {
    display: "flex",
    justifyContent: "space-between",
    // gap: "10px",
  };
  const Rightbtn = () => {
    Isindex = currentindex === img.length - 1;
    let val = Isindex ? 0 : currentindex + 1;
    setCurrentIndex(val);
  };
  const Leftbtn = () => {
    Isindex = currentindex === 0;
    let val = Isindex ? img.length - 1 : currentindex - 1;
    setCurrentIndex(val);
  };
  return (
    <div style={SliderImg}>
      <div className="Slider" style={SlideImg}></div>
      <div style={btns}>
        <button style={Rbtn} onClick={Rightbtn}>
          next
        </button>
        <button style={Lbtn} onClick={Rightbtn}>
          Previous
        </button>
      </div>
    </div>
  );
}
export default Slider;
