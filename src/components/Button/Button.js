
import React from "react";
import './Button.css';


export const Button = ({ title, onButtonClick }) => {
  return <button className={'my-btn'} onClick={() => onButtonClick()}>{title}</button>;
};
