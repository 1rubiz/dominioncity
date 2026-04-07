// useDisplayStore.js
import { create } from 'zustand';

interface LoadingStore {
  loading: boolean;
  start: () => void;
  stop: () => void;
}

const useLoadingStore = create<LoadingStore>((set) => ({
  loading: false, // initial state
  start: () => set({ loading: true }),
  stop: () => set({ loading: false })
}));

export default useLoadingStore;
