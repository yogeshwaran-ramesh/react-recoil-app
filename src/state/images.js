import { atom } from "recoil";

export const imagesState = atom({
  key: "images",
  default: [],
});

export const loadingState = atom({
  key: "loading",
  default: false,
});
