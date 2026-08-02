import { create } from "zustand";

const useMackbookstore = create((set)=>({
    color:'#2e2c2e',
    setcolor:(color)=>set({color}),

    scale:0.8,
    setscale:(scale)=>set({scale}),
    reset:()=>set({color:'#2e2c2e', scale:0.8})
}))

export default useMackbookstore