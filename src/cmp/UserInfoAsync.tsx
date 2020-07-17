import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil/dist";
import { userQueryAsync } from "../recoil/atoms";

interface UserInfoProps {
  id: number
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));

}

const UserInfo: FC<UserInfoProps> = (props) => {
  const { id } = props;
  const user = useRecoilValue(userQueryAsync(id));
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey(key);
    console.log("use layout effect")
  }, [key]);

  function handleClickRefreshKey() {
    setKey(getRandomInt(50000));
  }

  console.count("render ==");
  return <div>
    <h1>Info user clef :{key}
      <button onClick={handleClickRefreshKey}>refresh key</button>
    </h1>
    {user ? <>
      <div>id: {user.id}</div>
      <div>Nom: {user.lastName}</div>
      <div>Prénom: {user.firstName}</div>
    </> : "user n'a pas ete trouvé"}
  </div>
};

export const UserInfoAsync: FC<UserInfoProps> = (props) => {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <UserInfo {...props}/>
    </React.Suspense>)
};
