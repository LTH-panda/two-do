import { AppScreen } from "@stackflow/basic-ui";
import platte from "commons/styles/platte";
import { BottomTab, Header } from "components/@modules";
import { TodoActions, TodoInput, TodoList } from "components/Todo";
import React from "react";

function TodoScreen() {
  return (
    <AppScreen backgroundColor={platte.color.bg}>
      <Header title="To do" />
      <main className="layout gap-8">
        <TodoInput />
        <TodoList />
      </main>
      <TodoActions />
      <BottomTab />
    </AppScreen>
  );
}

export default TodoScreen;
