import { Back, Header, Title } from "components/@modules";
import { AddDueSelect, AddSubmit } from "components/Add";
import Layout from "components/Layout";
import React from "react";

function AddDueScreen() {
  return (
    <Layout screenTheme="android">
      <Header left={<Back theme="close" />} />
      <div className="p-8 layout">
        <Title title="언제까지 끝내실건가요?" />
        <AddDueSelect />
      </div>
      <AddSubmit />
    </Layout>
  );
}

export default AddDueScreen;
