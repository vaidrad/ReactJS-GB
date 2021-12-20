import React from 'react';
import './Form.css';
// import './Message.scss';
// import './Message.less';

export const Form = ({ onFormSubmit, error, onFormInput }) => {
    return <div className={`formWrapper`}>
        <form onSubmit={ onFormSubmit }>
            <input type='text' name="message" onInput={ onFormInput } placeholder='Введите текст сообщения' className={`message${error ? ' error' : ''}`}></input>
            <input type='submit' className={`submit${error ? ' error' : ''}`}></input>
        </form>
    </div>
};
