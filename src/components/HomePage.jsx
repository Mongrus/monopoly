import React, { useContext } from 'react';
import GamePage from './GamePage';
import AppContext from '../context/AppContext';
import ActionHistory from './ActionHistory';
import styles from './HomePage.module.sass';

const HomePage = () => {
  const { newGame, action, setNewGame, setUsers, setAction } =
    useContext(AppContext);

  return (
    <div>
      {newGame ? (
        <div>
          <GamePage></GamePage>
          <ActionHistory></ActionHistory>
        </div>
      ) : (
        <div className={styles.newGame}>
          <div></div>
          {localStorage.getItem('oldGame') !== null ? (
            <h2>Добро пожаловать, хотите продолжить старую игру ?</h2>
          ) : (
            <h2>Добро пожаловать, готовы начать новую игру ?</h2>
          )}
          {localStorage.getItem('oldGame') !== null ? (
            <button
              onClick={() => {
                setUsers(JSON.parse(localStorage.getItem('oldGame')));
                setAction(JSON.parse(localStorage.getItem('oldChat')));
                setNewGame(true);
              }}
            >
              Да
            </button>
          ) : (
            <></>
          )}

          <button
            onClick={() => {
              setNewGame(true);
              setAction([...action, '<Игра началась!>']);
            }}
          >
            {localStorage.getItem('oldGame') !== null ? 'Нет' : 'Начать'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
