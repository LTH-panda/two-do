import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type Due = 10 | 30 | 60 | 1440;
export const addDue = atom<Due>({
  key: "addDue",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const addTodoInput = atom<string>({
  key: "addTodoInput",
  default: "",
});

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};
export const addTodos = atom<Todo[]>({
  key: "addTodos",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
