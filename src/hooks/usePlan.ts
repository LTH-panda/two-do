import { useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  planCompleteAction,
  planPauseModal,
  planPlan,
  planPlay,
  planPlayModal,
  planSelectedTodo,
} from "states/plan";

function usePlan() {
  // plan data
  const [plan, setPlan] = useRecoilState(planPlan);
  const resetPlan = useResetRecoilState(planPlan);

  // is the play modal open
  const [isOpenPlayModal, setIsOpenPlayModal] = useRecoilState(planPlayModal);
  const openPlayModal = useCallback(() => setIsOpenPlayModal(true), []);
  const closePlayModal = useCallback(() => setIsOpenPlayModal(false), []);

  // is the plan play
  const [isPlayPlan, setIsPlayPlan] = useRecoilState(planPlay);
  const playPlan = useCallback(() => setIsPlayPlan(true), []);
  const pausePlan = useCallback(() => setIsPlayPlan(false), []);

  // is the pause modal open
  const [isOpenPauseModal, setIsOpenPauseModal] =
    useRecoilState(planPauseModal);
  const openPauseModal = useCallback(() => setIsOpenPauseModal(true), []);
  const closePauseModal = useCallback(() => setIsOpenPauseModal(false), []);

  // is the plan complete button open
  const [isOpenComplete, setIsOpenComplete] =
    useRecoilState(planCompleteAction);
  const openComplete = useCallback(() => setIsOpenComplete(true), []);
  const closeComplete = useCallback(() => setIsOpenComplete(false), []);

  const [selectedTodo, setSelectedTodo] = useRecoilState(planSelectedTodo);

  return {
    plan,
    isOpenPlayModal,
    isPlayPlan,
    isOpenPauseModal,
    isOpenComplete,
    selectedTodo,
    setPlan,
    resetPlan,
    openPlayModal,
    closePlayModal,
    playPlan,
    pausePlan,
    openPauseModal,
    closePauseModal,
    openComplete,
    closeComplete,
    setSelectedTodo,
  };
}

export default usePlan;
