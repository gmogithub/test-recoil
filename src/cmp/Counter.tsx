import React, { FC } from "react";
import { useRecoilState } from "recoil/dist";
import { counterStore, userStore } from "../recoil/atoms";

export const Counter: FC = () => {
  const [counter, setCounter] = useRecoilState(counterStore)
  const [user, setUser] = useRecoilState(userStore);

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
    setUser({ id: Date.now(), lastName: "M", firstName: 'greg' });
  }

  return <button onClick={handleClick}>{counter} {user.firstName} {user.lastName}</button>
};