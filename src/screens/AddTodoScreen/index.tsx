import { Back, Header, Title } from "components/@modules";
import { AddDue, AddSubmit, AddTodoList } from "components/Add";
import Layout from "components/Layout";
import React from "react";

function AddTodoScreen() {
  return (
    <Layout screenTheme="cupertino">
      <Header left={<Back theme="back" />} />
      <div className="gap-5 p-8 layout">
        <Title title="어떤 일을 하실건가요?" />
        <AddDue />
        <AddTodoList />
      </div>
      <AddSubmit />
    </Layout>
  );
}

export default AddTodoScreen;
