import React from "react";
import { AppScreen } from "@stackflow/basic-ui";
import { BottomTab, Header } from "components/@modules";
import platte from "commons/styles/platte";
import { PlanAddButton, PlanList } from "components/Plan";

function HomeScreen() {
  return (
    <AppScreen backgroundColor={platte.color.bg}>
      <Header title="two do" />
      <main className="layout">
        <PlanList />
        <section className="fixed bottom-32 right-5">
          <PlanAddButton />
        </section>
      </main>
      <BottomTab />
    </AppScreen>
  );
}

export default HomeScreen;
