import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import styles from './User.module.sass';

const User = () => {
  const {
    users,
    setUsers,
    inputValue,
    setInputValue,
    action,
    setAction,
    setInpurOrUsers,
    inputOrUsers,
  } = useContext(AppContext);

  const createUser = () => {
    setUsers([
      ...users,
      {
        id: users.length,
        name: `Игрок ${users.length + 1}`,
        many: 15000,
        operation: false,
        pointingBetweenUsers: false,
      },
    ]);
  };

  return (
    <div className={styles.usersCard}>
      {users.map((us) => {
        return (
          <div key={us.id} className={styles.users}>
            <div
              className={styles.users__name}
              style={{ backgroundColor: 'DarkSeaGreen' }}
            >
              <h2>{us.name}</h2>
            </div>
            <h3>Деньги: {us.many}</h3>
            {us.many <= -5000000 ? (
              <h2 className={styles.gameOver}>Выбыл !</h2>
            ) : (
              <div className={styles.users__operation}>
                {us.operation ? (
                  <div>
                    {us.pointingBetweenUsers ? (
                      <></>
                    ) : (
                      <div>
                        <button
                          disabled={!inputOrUsers}
                          onClick={() => {
                            const newArr = users.slice();
                            newArr[us.id].many =
                              newArr[us.id].many - Number(inputValue);
                            us.operation = !us.operation;
                            setInputValue('');
                            setUsers(newArr);
                            if (inputValue !== '') {
                              if (inputValue >= 1000000) {
                                setAction([
                                  ...action,
                                  `<"Игрок ${
                                    us.id + 1
                                  }" теряет деньги в размере ${String(
                                    inputValue
                                  ).slice(0, -6)} млн. монет>`,
                                ]);
                              } else {
                                setAction([
                                  ...action,
                                  `<"Игрок ${
                                    us.id + 1
                                  }" теряет деньги в размере ${String(
                                    inputValue
                                  ).slice(0, -3)} тыс. монет>`,
                                ]);
                              }
                            }
                            setInpurOrUsers(false);
                          }}
                        >
                          Минус Деньги
                        </button>
                        <button
                          disabled={!inputOrUsers}
                          onClick={() => {
                            const newArr = users.slice();
                            newArr[us.id].many =
                              newArr[us.id].many + Number(inputValue);
                            us.operation = !us.operation;
                            setInputValue('');
                            setUsers(newArr);
                            if (inputValue !== '') {
                              if (inputValue >= 1000000) {
                                setAction([
                                  ...action,
                                  `<"Игрок ${
                                    us.id + 1
                                  }" получает деньги в размере ${String(
                                    inputValue
                                  ).slice(0, -6)} млн. монет>`,
                                ]);
                              } else {
                                setAction([
                                  ...action,
                                  `<"Игрок ${
                                    us.id + 1
                                  }" получает деньги в размере ${String(
                                    inputValue
                                  ).slice(0, -3)} тыс. монет>`,
                                ]);
                              }
                            }
                            setInpurOrUsers(false);
                          }}
                        >
                          Плюс деньги
                        </button>
                      </div>
                    )}

                    <button
                      disabled={!inputOrUsers}
                      onClick={() => {
                        const newArr = users.slice();
                        us.pointingBetweenUsers = !us.pointingBetweenUsers;
                        setUsers(newArr);
                      }}
                    >
                      {us.pointingBetweenUsers
                        ? 'Другая операция'
                        : 'Перевести другому игроку'}
                    </button>
                    {us.pointingBetweenUsers ? (
                      <div className={styles.usersList}>
                        {users.map((usOp) => {
                          if (usOp.id !== us.id && usOp.many > -5000000) {
                            return (
                              <div>
                                <button
                                  disabled={!inputOrUsers}
                                  onClick={() => {
                                    const newArr = users.slice();

                                    newArr[usOp.id].many =
                                      newArr[usOp.id].many + Number(inputValue);

                                    console.log(newArr[usOp.id].many);

                                    newArr[us.id].many =
                                      newArr[us.id].many - Number(inputValue);

                                    console.log(newArr[us.id].many);

                                    us.pointingBetweenUsers =
                                      !us.pointingBetweenUsers;

                                    us.operation = !us.operation;

                                    setInputValue('');

                                    setUsers(newArr);

                                    if (inputValue !== '') {
                                      if (inputValue >= 1000000) {
                                        setAction([
                                          ...action,
                                          `<"Игрок ${
                                            us.id + 1
                                          }" передает деньги в размере ${String(
                                            inputValue
                                          ).slice(0, -6)} млн. монет "Игроку ${
                                            usOp.id + 1
                                          }">`,
                                        ]);
                                      } else {
                                        setAction([
                                          ...action,
                                          `<"Игрок ${
                                            us.id + 1
                                          }" передает деньги в размере ${String(
                                            inputValue
                                          ).slice(0, -3)} млн. монет "Игроку ${
                                            usOp.id + 1
                                          }">`,
                                        ]);
                                      }
                                    }
                                    setInpurOrUsers(false);
                                  }}
                                >
                                  {usOp.name}
                                </button>
                              </div>
                            );
                          }
                        })}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <button
                    disabled={!inputOrUsers}
                    onClick={() => {
                      const newArr = users.slice();
                      us.operation = !us.operation;
                      setUsers(newArr);
                    }}
                  >
                    Провести операцию
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
      <button
        className={styles.newUser}
        onClick={() => {
          createUser();
          setAction([...action, `<Добавлен "Игрок ${users.length + 1}">`]);
        }}
      >
        Добавить игрока
      </button>
    </div>
  );
};

export default User;
