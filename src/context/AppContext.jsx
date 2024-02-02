import { createContext } from 'react';

const AppContext = createContext({
  users: [],
  inputValue: '',
  newGame: false,
  action: [],
  inputOrUsers: false,
  setUsers: () => {},
  setInputValue: () => {},
  setNewGame: () => {},
  setAction: () => {},
  setInpurOrUsers: () => {},
});

export default AppContext;
