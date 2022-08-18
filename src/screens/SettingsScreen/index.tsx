import { BottomTab, Header } from "components/@modules";
import Layout from "components/Layout";
import { SettingsCell } from "components/Settings";
import React from "react";

function SettingsScreen() {
  return (
    <Layout>
      <Header title="settings" />
      <div className="layout">
        <SettingsCell title="알림 설정" />
        <SettingsCell title="버전 정보" />
      </div>
      <BottomTab />
    </Layout>
  );
}

export default SettingsScreen;
