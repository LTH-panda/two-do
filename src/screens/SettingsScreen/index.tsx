import { AppScreen } from "@stackflow/basic-ui";
import platte from "commons/styles/platte";
import { BottomTab, Header } from "components/@modules";
import React from "react";

function SettingsScreen() {
  return (
    <AppScreen backgroundColor={platte.color.bg}>
      <Header title="settings" />
      <main />
      <BottomTab />
    </AppScreen>
  );
}

export default SettingsScreen;
