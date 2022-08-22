import { useActivity } from "@stackflow/react";
import { Header, Title } from "components/@modules";
import Layout from "components/Layout";
import {
  ResultActions,
  ResultProperties,
  ResultTodoList,
} from "components/Result";
import React from "react";

function ResultScreen() {
  const { params } = useActivity();

  return (
    <Layout screenTheme="android">
      <Header />
      <div className="gap-4 p-8 layout">
        <Title title={params.isPause ? "실패.." : "성공!"} />
        <ResultProperties />
        <div className="flex items-center justify-center flex-1">
          <ResultTodoList />
        </div>
        <div className="pb-10">
          <ResultActions />
        </div>
      </div>
    </Layout>
  );
}

export default ResultScreen;
