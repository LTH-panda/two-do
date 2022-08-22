import { Button } from "components/@base";
import usePlan from "hooks/usePlan";
import React, { useCallback } from "react";
import { useFlow } from "stackflow";

function ResultActions() {
  const { replace } = useFlow();
  const { resetPlan, pausePlan } = usePlan();

  const onEnd = useCallback(() => {
    replace("HomeScreen", {});
    pausePlan();
    resetPlan();
  }, []);

  return (
    <div>
      <Button title="끝났다!" onClick={onEnd} theme="primary" />
    </div>
  );
}

export default ResultActions;
