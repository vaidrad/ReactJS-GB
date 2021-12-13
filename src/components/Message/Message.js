import React from 'react';
// import './Message.css';
// import './Message.scss';
// import './Message.less';

export const Message = ({ text, yellow }) => {
    return <div className={`messageWrapper ${ yellow ? 'yellow' : 'false'}`}><p>{ text } а это нет</p></div>
};

//less у меня не работает. sass после команды 'npm install node-sass --save' тоже не работает. Не понимаю в чем дело.
//scss просто выкидывают ошибку и проект не билдится, а less файлы билдятся, но просто не работают.
