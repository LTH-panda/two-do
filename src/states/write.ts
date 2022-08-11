import { atom } from "recoil";

export const writeTodo = atom<string>({
  key: "writeTodo",
  default: "",
});
