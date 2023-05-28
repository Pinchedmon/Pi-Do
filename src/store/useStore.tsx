import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [{ title: "title" }],
  create: (item: any) =>
    set((state: any) => ({ todos: [...(state.todos + item)] })),
}));
