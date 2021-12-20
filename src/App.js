import logo from './logo.svg';
import './App.css';
import { Messages } from './components/Message/Message'
import { Button } from './components/Button/Button';
import { useState, useEffect } from "react"
import { Form } from './components/Form/Form'

function App() {
  const [yellow, setYellow] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [formError, setFormError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let messageValue = event.target.message.value;
    if(messageValue){
      event.target.message.value='';
      setMessageList(prevArray => [...prevArray, {author: 'user', messageBody: messageValue}]);
      setFormError(false);
    } else{
      setFormError(true);
      console.log('error')
    }
  }

  const handleFieldInput = (event) => {
    if(!event.target.value){
      setFormError(true);
    } else{
      setFormError(false);
    }
  }

  useEffect(() => {
    if(messageList[messageList.length - 1]?.author === 'user'){
      setTimeout(() => {
        setMessageList(prevArray => [...prevArray, {author: 'chatBot', messageBody: 'thank you for your mesages'}]);
      }, Math.floor(Math.random() * 7000));
    }
  },[messageList]);

  const handleButtonClick = () => {
    setYellow(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Messages text={messageList} yellow={yellow} />
        <Button onButtonClick={handleButtonClick} title={'Изменить цвет'} />
        <Form onFormSubmit={handleFormSubmit} error={formError} onFormInput={handleFieldInput} />
      </header>
    </div>
  );
}

export default App;
