import React from "react";
import { AppScreen } from "@stackflow/basic-ui";
import { BottomTab, Header } from "components/@modules";
import platte from "commons/styles/platte";

function HomeScreen() {
  return (
    <AppScreen backgroundColor={platte.color.bg}>
      <Header title="two do" />
      <main className="layout">home</main>
      <BottomTab />
    </AppScreen>
  );
}

export default HomeScreen;
