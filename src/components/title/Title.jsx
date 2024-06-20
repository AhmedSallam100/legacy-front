import React from "react";
import "./main-title.css";

const Title = ({ text, number }) => {
  return <h1 className={`main-title main-title-${number}`}>{text}</h1>;
};

export default Title;
