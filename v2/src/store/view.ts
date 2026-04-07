/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

interface ViewStore {
  view: string;
  setView: (img: any) => void;
}

const useViewStore = create<ViewStore>((set) => ({
  view: '', // initial state
  setView: (img: any) => set({ view: img }),
//   hideComponent: () => set({ isVisible: false }),
}));

export default useViewStore;
