import './App.sass';
import AppContext from './context/AppContext.jsx';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [newGame, setNewGame] = useState(false);
  const [action, setAction] = useState([]);
  const [inputOrUsers, setInpurOrUsers] = useState(false);

  useEffect(() => {
    if (newGame === true) {
      localStorage.setItem('oldGame', JSON.stringify(users));
      localStorage.setItem('oldChat', JSON.stringify(action));
    }
    // localStorage.clear();
  });

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          users,
          setUsers,
          inputValue,
          setInputValue,
          newGame,
          setNewGame,
          action,
          setAction,
          inputOrUsers,
          setInpurOrUsers,
        }}
      >
        <HomePage></HomePage>
      </AppContext.Provider>
    </div>
  );
}

export default App;
