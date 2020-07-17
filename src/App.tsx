import React from 'react';
import { RecoilRoot } from "recoil/dist";
import { Home } from "./cmp/Home";


function App() {
  return (
  <RecoilRoot>
    <Home/>
  </RecoilRoot>
  );
}

export default App;
