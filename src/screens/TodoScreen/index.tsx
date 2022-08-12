import { BottomTab, Header } from "components/@modules";
import Layout from "components/Layout";
import { TodoList, TodoTabs } from "components/Todo";
import React from "react";

function TodoScreen() {
  return (
    <Layout>
      <Header title="To do" />
      <div className="gap-4 layout">
        <TodoTabs />
        <div className="p-8 pt-2 overflow-y-scroll">
          <TodoList />
        </div>
      </div>
      <BottomTab />
    </Layout>
  );
}

export default TodoScreen;
