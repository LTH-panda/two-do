import { atom } from "recoil";

export const writeTitle = atom<string>({
  key: "writeTitle",
  default: "",
});

export type Time = 10 | 30 | 60 | 1440;
export const writeTime = atom<Time>({
  key: "writeTime",
  default: undefined,
});
