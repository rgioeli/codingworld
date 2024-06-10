import { create } from "zustand";

interface MainStore {}

const useStore = create<MainStore>((set) => ({}));

export default useStore;
