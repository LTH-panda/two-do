import { atom } from "recoil";

export const baseToastVisible = atom<boolean>({
  key: "baseToastVisible",
  default: false,
});
export const baseToastMessage = atom<string>({
  key: "baseToastMessage",
  default: "",
});
