
import React from "react";
import './Button.css';


export const Button = ({ title, onButtonClick }) => {
  return <button className={'my-btn'} onClick={() => onButtonClick()}>{title}</button>;
};

//попытался прикрутить сюда реактивность, но не вышло. Работаю на вью, думал тут так же будет все работать, но нет)
