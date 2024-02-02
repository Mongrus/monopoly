import React, { useContext } from 'react';
import AccrualPoints from './AccrualPoints';
import User from './User';
import styles from './GamePage.module.sass';

const GamePage = () => {
  return (
    <div className={styles.gamePage}>
      <AccrualPoints></AccrualPoints>
      <User></User>
    </div>
  );
};

export default GamePage;
