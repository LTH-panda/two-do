import { useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { Todo } from "states/add";
import {
  planCards,
  planCompleteAction,
  planCompleteModal,
  planPauseModal,
  planPlan,
  planPlay,
  planPlayingTodos,
  planPlayModal,
  planSelectedTodo,
  planTime,
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

  // what is todo selected
  const [selectedTodo, setSelectedTodo] = useRecoilState(planSelectedTodo);
  const resetSelectedTodo = useResetRecoilState(planSelectedTodo);

  // the alternative cards
  const [alterCards, setAlterCards] = useRecoilState(planCards);
  const doneAlterCard = useCallback(
    (direction: "left" | "right") => {
      setAlterCards({ ...alterCards, [direction]: undefined });
    },
    [alterCards]
  );
  const resetAlterCards = useResetRecoilState(planCards);

  // the playing todos
  const [playingTodos, setPlayingTodos] = useRecoilState(planPlayingTodos);
  const initPlayingTodos = (todos: Todo[]) => {
    setPlayingTodos(todos);
  };
  const popPlayingTodos = () => {
    const last = playingTodos[playingTodos.length - 1];
    setPlayingTodos(
      playingTodos.slice(0, Math.max(playingTodos.length - 1, 0))
    );

    return last;
  };

  // timer time
  const [countDownTime, setCountDownTime] = useRecoilState(planTime);
  const resetCountDownTime = useCallback(
    () => setCountDownTime(Date.now()),
    []
  );

  // if all todos are done, open the complete modal
  const [isOpenPlanComplete, setIsOpenPlanComplete] =
    useRecoilState(planCompleteModal);
  const openPlanComplete = useCallback(() => setIsOpenPlanComplete(true), []);
  const closePlanComplete = useCallback(() => setIsOpenPlanComplete(false), []);

  return {
    plan,
    isOpenPlayModal,
    isPlayPlan,
    isOpenPauseModal,
    isOpenComplete,
    selectedTodo,
    alterCards,
    playingTodos,
    countDownTime,
    isOpenPlanComplete,
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
    resetSelectedTodo,
    setAlterCards,
    doneAlterCard,
    resetAlterCards,
    initPlayingTodos,
    popPlayingTodos,
    resetCountDownTime,
    openPlanComplete,
    closePlanComplete,
  };
}

export default usePlan;
