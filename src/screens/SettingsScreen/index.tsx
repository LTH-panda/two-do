import { BottomTab, Header } from "components/@modules";
import Layout from "components/Layout";
import React from "react";

function SettingsScreen() {
  return (
    <Layout>
      <Header title="settings" />
      <div className="layout">test</div>
      <BottomTab />
    </Layout>
  );
}

export default SettingsScreen;
