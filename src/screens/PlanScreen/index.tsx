import { Back, Header } from "components/@modules";
import Layout from "components/Layout";
import React from "react";

function PlanScreen() {
  return (
    <Layout screenTheme="android">
      <Header left={<Back theme="close" />} />
      <div className="layout">test</div>
    </Layout>
  );
}

export default PlanScreen;
