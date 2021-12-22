import { useState, useRef, useEffect } from 'react';
import './Form.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Form = ({ onFormSubmit }) => {
    const [value, setValue] = useState("");
    const [formError, setFormError] = useState(false);
    const inputRef = useRef();

    const handleInput = (e) => {
        setValue(e.target.value);
        if(!e.target.value){
            setFormError(true);
          } else{
            setFormError(false);
          }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(value){
            onFormSubmit(value);
        } else{
            setFormError(true)
        }
        
        setValue("");
        inputRef.current?.focus()
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    //с моим компонентом фокусировка работает, но с компонентом из material-ui почему то нет :(

    return <div className={`formWrapper`}>
        <form onSubmit={ handleSubmit } className={`${formError ? 'error' : ''}`}>
            {/* <input ref={inputRef} type='text' name="message" onInput={ handleInput } value={value} placeholder='Введите текст сообщения' className={`message${formError ? ' error' : ''}`}></input> */}
            <TextField ref={inputRef} name="message" id="outlined-basic" label="Outlined" variant="outlined" onInput={ handleInput } value={value} placeholder='Введите текст сообщения' />
            {/* <input type='submit' className={`submit${formError ? ' error' : ''}`} disabled={formError ? true : false}></input> */}
            <Button type='submit' variant="contained" disabled={formError ? true : false}>Отправить</Button>
        </form>
    </div>
};

//свои компоненты оставил в коментах, чтобы потом работать дальше с ними
