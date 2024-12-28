// useDisplayStore.js
import { create } from 'zustand';

const useLoadingStore = create((set) => ({
  loading: false, // initial state
  start: () => set({ loading: true }),
  stop: () => set({ loading: false })
}));

export default useLoadingStore;
