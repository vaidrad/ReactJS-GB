import './App.css';
import { Messages } from './components/Message/Message';
import { useState, useEffect } from "react";
import { Form } from './components/Form/Form';
import { List, ListItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#cccc33',
      dark: '#aaaa11',
      contrastText: '#33c',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  const [messageList, setMessageList] = useState([]);

  const chatsArray = [
    {
      id: "chat1",
      name: "Chat 1"
    },
    {
      id: "chat2",
      name: "Chat 2"
    },
    {
      id: "chat3",
      name: "Chat 3"
    },
    {
      id: "chat4",
      name: "Chat 4"
    }
  ]

  const handleFormSubmit = (value) => {
    setMessageList(prevArray => [...prevArray, {author: 'user', messageBody: value, id: Date.now()}]);
  }

  useEffect(() => {
    let timeout;
    if(messageList[messageList.length - 1]?.author === 'user'){
      timeout = setTimeout(() => {
        setMessageList(prevArray => [...prevArray, {author: 'chatBot', messageBody: 'thank you for your mesages', id: Date.now()}]);
      }, Math.floor(Math.random() * 7000));
    }

    return () => {
      clearTimeout(timeout);
    }
  },[messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Messages text={messageList} />
          <Form onFormSubmit={handleFormSubmit} />
          <List>{chatsArray.map(({ id, name }) => <ListItem key={id} divider={true}>{name}</ListItem>)} </List>
        </ThemeProvider>
        
      </header>
      
    </div>
  );
}

export default App;
