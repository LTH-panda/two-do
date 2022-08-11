import "commons/styles/globals.css";
import "commons/styles/theme.css";
import React from "react";
import { Stack } from "stackflow";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Stack />
    </RecoilRoot>
  );
}

export default App;
