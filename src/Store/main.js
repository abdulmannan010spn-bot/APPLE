import { create } from "zustand";
import videoSrc from "../assets/feature-1.mp4";
const useMackbookstore = create((set) => ({
  color: "#2e2c2e",
  setcolor: (color) => set({ color }),

  texture: videoSrc,
  settexture: (texture) => set({ texture }),

  scale: 0.8,
  setscale: (scale) => set({ scale }),
  reset: () => set({ color: "#2e2c2e", scale: 0.8, texture: videoSrc }),
}));

export default useMackbookstore;
