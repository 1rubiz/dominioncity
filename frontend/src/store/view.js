// useDisplayStore.js
import { create } from 'zustand';

const useViewStore = create((set) => ({
  view: '', // initial state
  setView: (img) => set({ view: img }),
//   hideComponent: () => set({ isVisible: false }),
}));

export default useViewStore;
