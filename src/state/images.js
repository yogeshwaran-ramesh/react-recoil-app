import { atom, selector } from "recoil";

export const imagesState = atom({
  key: "images",
  default: [],
});

export const loadingState = atom({
  key: "loading",
  default: false,
});

export const lengthOfImages = selector({
  key: "imagesCount",
  get: ({ get }) => {
    const state = get(imagesState).length;
    return state;
  },
});
