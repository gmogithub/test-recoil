import React, { FC } from "react";
import { useRecoilValue } from "recoil/dist";
import { userQuerySync } from "../recoil/atoms";

interface UserInfoProps {
  id: number
}

export const UserInfoSync: FC<UserInfoProps> = (props) => {
  const { id } = props;
  const user = useRecoilValue(userQuerySync(id))
  return <div>
    <h1>Info user</h1>
    {user ? <>
      <div>id: {user.id}</div>
      <div>Nom: {user.lastName}</div>
      <div>Prénom: {user.firstName}</div>
    </> : "user n'a pas ete trouvé"}
  </div>
};
