import { AppScreen } from "@stackflow/basic-ui";
import platte from "commons/styles/platte";
import { BottomTab, Header } from "components/@modules";
import { TodoActions, TodoList } from "components/Todo";
import React from "react";

function TodoScreen() {
  return (
    <AppScreen backgroundColor={platte.color.bg}>
      <Header title="To do" />
      <main className="layout gap-8">
        plan 마다 계획 모아보기
        <TodoList />
      </main>
      <TodoActions />
      <BottomTab />
    </AppScreen>
  );
}

export default TodoScreen;
