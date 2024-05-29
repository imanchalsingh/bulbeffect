import React, { useState } from "react";
const Bulbeffect: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(
    "https://tse1.mm.bing.net/th?id=OIP.Z-TTWRFovI3pjbnM5t7TYQHaMn&pid=Api&P=0&h=180"
  );
  const turnOnLight = () => {
    setImageSrc(
      "http://www.pngall.com/wp-content/uploads/2016/03/Light-Bulb-PNG-File.png"
    );
  };
  const turnOffLight = () => {
    setImageSrc(
      "https://tse1.mm.bing.net/th?id=OIP.Z-TTWRFovI3pjbnM5t7TYQHaMn&pid=Api&P=0&h=180"
    );
  };
  return (
    <div>
      <h2>What Can JavaScript Do?</h2>
      <p>JavaScript can change HTML attribute values.</p>
      <p>
        In this case JavaScript changes the value of the src (source) attribute
        of an image.
      </p>
      <button onClick={turnOnLight}>Turn on the light</button>
      <img
        id="myImage"
        src={imageSrc}
        style={{ width: "100px", height: "100px" }}
        alt="Light Bulb"
      />
      <button onClick={turnOffLight}>Turn off the light</button>
    </div>
  );
};
export default Bulbeffect;

