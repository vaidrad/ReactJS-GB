import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message'
import { Button } from './components/Button/Button';

function App() {
  const messageText = 'Вот это вот пропа';
  let yellow = false;

  const handleButtonClick = () => {
    yellow = !yellow;
    console.log(yellow)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={messageText} yellow={yellow}/>
        <Button onButtonClick={handleButtonClick} title={'Изменить цвет'}/>
      </header>
    </div>
  );
}

export default App;
