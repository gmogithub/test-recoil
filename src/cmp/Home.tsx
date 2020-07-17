import React, { FC } from "react";
import { Counter } from "./Counter";
import { FirstNameLastNameCount } from "./FirstNameLastNameCount";
import { useRecoilValue } from "recoil/dist";
import { userStore } from "../recoil/atoms";
import { UserInfoAsync } from "./UserInfoAsync";
import { UserInfoSync } from "./UserInfoSync";

export const Home: FC = () => {
  const user = useRecoilValue(userStore);
  return <>
    <div>Home {user.firstName} {user.lastName}</div>
    <Counter/>
    <Counter/>
    <FirstNameLastNameCount/>
    <UserInfoAsync id={1}/>
    <UserInfoSync id={1}/>
  </>
};