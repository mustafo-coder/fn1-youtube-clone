import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set(state => ({count: state.count + 1})),
  random: (num) => set({count: num}) 
}))

export default useStore