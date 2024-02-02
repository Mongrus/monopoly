import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from './AccrualPoints.module.sass';

const AccrualPoints = () => {
  const { inputValue, setInputValue, setInpurOrUsers, inputOrUsers } =
    useContext(AppContext);

  return (
    <div>
      {!inputOrUsers ? (
        <div className={styles.inputValue}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          ></input>
          <div>
            <button
              onClick={() => {
                setInputValue(Number(inputValue) * 1000);
                setInpurOrUsers(true);
              }}
            >
              тысяч
            </button>
            <button
              onClick={() => {
                setInputValue(Number(inputValue) * 1000000);
                setInpurOrUsers(true);
              }}
            >
              миллионов
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.inputValue}>
          <h2>{`Сумма операции ${inputValue} монет 💰`}</h2>
        </div>
      )}
    </div>
  );
};

export default AccrualPoints;
