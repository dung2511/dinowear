import React from "react";
const ImageLogo = () => {
  const url = "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Flogo-joblaw.png?alt=media&token=dc97eadc-b8a1-41cc-bcd3-2dc13b1167ea";
  return (
    <img
      loading="auto"
      src={url}
      alt="Logo"
      title="Logo"
      className="img-fluid"
    />
  );
};

export default ImageLogo;
