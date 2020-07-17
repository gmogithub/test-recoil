import React, { FC } from "react";
import { useRecoilValue } from "recoil/dist";
import { lastNameFirstNameCountStore } from "../recoil/atoms";

export const FirstNameLastNameCount: FC = () => {
  const count = useRecoilValue(lastNameFirstNameCountStore);
  return <>{count}</>
};