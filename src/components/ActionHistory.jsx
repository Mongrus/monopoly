import React, { useContext } from 'react';
import { useRef, useEffect } from 'react';
import AppContext from '../context/AppContext';
import styles from './ActionHistory.module.sass';

const ActionHistory = () => {
  const { action } = useContext(AppContext);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [action]);

  return (
    <div className={styles.actionHistory} scrollTop>
      {action.map((act) => {
        return <p>{act}</p>;
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ActionHistory;
