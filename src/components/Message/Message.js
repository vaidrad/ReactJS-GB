import React from 'react';
import './Message.css';
// import './Message.scss';
// import './Message.less';

export const Messages = ({ text }) => {
    return <div className={'messageWrapper yellow'}>{ text.map(({ author, messageBody, id }) => <p key={id}>{ author }: { messageBody }</p>) }</div>
};
