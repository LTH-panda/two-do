import usePlan from "hooks/usePlan";
import React, { useEffect } from "react";
import PlanAlterCard from "../PlanAlterCard";

function PlanAlternative() {
  const { alterCards, playingTodos, setAlterCards, popPlayingTodos } =
    usePlan();

  useEffect(() => {
    if (playingTodos.length) {
      if (!alterCards.left)
        setAlterCards({ ...alterCards, left: popPlayingTodos() });

      if (!alterCards.right)
        setAlterCards({ ...alterCards, right: popPlayingTodos() });
    }
  }, [playingTodos, alterCards]);

  return (
    <div className="flex justify-center flex-1 h-full gap-8 py-4 max-h-80">
      {alterCards.left && (
        <PlanAlterCard
          id={alterCards.left.id}
          content={alterCards.left.title}
          direction="left"
        />
      )}
      {alterCards.right && (
        <PlanAlterCard
          id={alterCards.right.id}
          content={alterCards.right.title}
          direction="right"
        />
      )}
    </div>
  );
}

export default PlanAlternative;
