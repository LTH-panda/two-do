import { Back, Header } from "components/@modules";
import Layout from "components/Layout";
import {
  PlanWriteSubmit,
  PlanWriteTime,
  PlanWriteTitle,
} from "components/Plan";
import useWrite from "hooks/useWrite";
import React, { useEffect } from "react";

function AddPlanScreen() {
  const { resetTitle, resetTime } = useWrite();
  useEffect(() => {
    resetTitle();
    resetTime();
  }, []);

  return (
    <Layout screenTheme="android">
      <Header title="Plan" right={<Back theme="close" />} />
      <main className="gap-12 p-8 layout">
        <PlanWriteTitle />
        <PlanWriteTime />
      </main>
      <PlanWriteSubmit />
    </Layout>
  );
}

export default AddPlanScreen;
