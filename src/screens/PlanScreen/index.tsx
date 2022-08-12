import { Back, Header } from "components/@modules";
import Layout from "components/Layout";
import { PlanActions } from "components/Plan";
import { TodoList } from "components/Todo";
import React from "react";

function PlanScreen() {
  return (
    <Layout screenTheme="cupertino">
      <Header left={<Back theme="back" />} />
      <main className="gap-8 p-8 layout">
        <h1 className="text-4xl font-primary">Title</h1>
        <TodoList />
        <section className="absolute inset-x-0 bottom-20">
          <PlanActions />
        </section>
      </main>
    </Layout>
  );
}

export default PlanScreen;
