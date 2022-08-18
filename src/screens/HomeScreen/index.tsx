import React from "react";
import { BottomTab, Header } from "components/@modules";
import Layout from "components/Layout";
import { PlanActions } from "components/Plan";
import { useStack } from "@stackflow/react";

function HomeScreen() {
  const { activities } = useStack();
  console.log(activities);

  return (
    <Layout>
      <Header title="two do" />
      <div className="p-8 layout">
        <PlanActions />
      </div>
      <BottomTab />
    </Layout>
  );
}

export default HomeScreen;
