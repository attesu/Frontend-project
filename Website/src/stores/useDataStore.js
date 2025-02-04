import { create } from "zustand";

const useDataStore = create((set) => ({
    heroes: [
        { name: "Hulk", superpower: "Vahva" },
        { name: "Storm", superpower: "Sään hallinta" },
        { name: "Ant-Man", superpower: "Koko vaihtelu" }
    ],
    addHero: (newHero) => set((state) => ({ heroes: [...state.heroes, newHero] })),
    removeHero: (index) => set((state) => ({ heroes: state.heroes.filter((_, i) => i !== index) }))
}));

export default useDataStore;
