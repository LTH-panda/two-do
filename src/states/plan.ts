import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Todo } from "./add";

const { persistAtom } = recoilPersist();

export type Plan = {
  due: number;
  todos: Todo[];
};

export const planPlan = atom<Plan>({
  key: "planPlan",
  default: { due: 0, todos: [] },
  effects_UNSTABLE: [persistAtom],
});

export const planPlayModal = atom<boolean>({
  key: "planPlayModal",
  default: false,
});

export const planPlay = atom<boolean>({
  key: "planPlay",
  default: false,
});

export const planPauseModal = atom<boolean>({
  key: "planPauseModal",
  default: false,
});

export const planCompleteAction = atom<boolean>({
  key: "planCompleteAction",
  default: false,
});

export const planPlayingTodos = atom<Todo[]>({
  key: "planPlayingTodos",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

type SelectedTodo = {
  direction: "left" | "right";
  id: string;
};

export const planSelectedTodo = atom<SelectedTodo>({
  key: "planSelectedTodo",
  default: { direction: "left", id: "" },
});

type Cards = {
  left: Todo | undefined;
  right: Todo | undefined;
};

export const planCards = atom<Cards>({
  key: "planCards",
  default: { left: undefined, right: undefined },
  effects_UNSTABLE: [persistAtom],
});

export const planTime = atom<number>({
  key: "planTime",
  default: Date.now(),
  effects_UNSTABLE: [persistAtom],
});

export const planCompleteModal = atom<boolean>({
  key: "planCompleteModal",
  default: false,
});
