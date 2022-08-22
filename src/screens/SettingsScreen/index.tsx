import { BottomTab, Header } from "components/@modules";
import Layout from "components/Layout";
import { SettingsMenual, SettingsVersion } from "components/Settings";
import React from "react";

function SettingsScreen() {
  return (
    <Layout>
      <Header title="settings" />
      <div className="layout">
        <SettingsMenual />
        <SettingsVersion />
      </div>
      <BottomTab />
    </Layout>
  );
}

export default SettingsScreen;
