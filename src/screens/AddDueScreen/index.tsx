import { useActivity } from "@stackflow/react";
import { Back, Header, Title } from "components/@modules";
import { AddDueSelect, AddSubmit } from "components/Add";
import Layout from "components/Layout";
import useAdd from "hooks/useAdd";
import React, { useEffect } from "react";

function AddDueScreen() {
  const { params } = useActivity();
  const { resetDue, resetTodo } = useAdd();

  useEffect(() => {
    if (!params.isEdit) {
      resetDue();
      resetTodo();
    }
  }, [params]);

  return (
    <Layout screenTheme="android">
      <Header left={<Back theme="close" />} />
      <div className="px-8 layout">
        <Title title="언제까지 끝내실건가요?" />
        <AddDueSelect />
      </div>
      <AddSubmit />
    </Layout>
  );
}

export default AddDueScreen;
