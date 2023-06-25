import { atom } from "recoil";

export const goalsState = atom({
  key: "goalsState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
