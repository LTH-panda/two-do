import React from "react";
import { BottomTab, Header } from "components/@modules";
import Layout from "components/Layout";
import {
  HomeActions,
  HomeContent,
  HomePauseModal,
  HomePlayModal,
} from "components/Home";

function HomeScreen() {
  return (
    <Layout>
      <Header title="two do" />
      <div className="gap-4 p-8 layout">
        <HomeContent />
        <HomeActions />
      </div>
      <HomePlayModal />
      <HomePauseModal />
      <BottomTab />
    </Layout>
  );
}

export default HomeScreen;
