import { AppScreen } from "@stackflow/basic-ui";
import platte from "commons/styles/platte";
import { Back, Header } from "components/@modules";
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
    <AppScreen backgroundColor={platte.color.bg} theme="android">
      <Header title="Plan" right={<Back theme="close" />} />
      <main className="layout gap-12">
        <PlanWriteTitle />
        <PlanWriteTime />
        <PlanWriteSubmit />
      </main>
    </AppScreen>
  );
}

export default AddPlanScreen;
