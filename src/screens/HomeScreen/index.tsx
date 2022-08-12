import React from "react";
import { BottomTab, Header } from "components/@modules";
import { PlanAddButton, PlanList } from "components/Plan";
import Layout from "components/Layout";

function HomeScreen() {
  return (
    <Layout>
      <Header title="two do" />
      <div className="p-8 layout">
        <PlanList />
        <section className="fixed bottom-32 right-5">
          <PlanAddButton />
        </section>
      </div>
      <BottomTab />
    </Layout>
  );
}

export default HomeScreen;
