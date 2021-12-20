import React from 'react';
import './Message.css';
// import './Message.scss';
// import './Message.less';

export const Messages = ({ text, yellow }) => {
    return <div className={`messageWrapper ${ yellow ? 'yellow' : 'false'}`}>{ text.map(({ author, messageBody }, index) => <p key={index}>{ author }: { messageBody }</p>) }</div>
};
