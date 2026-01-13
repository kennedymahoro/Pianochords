import { create } from "zustand";
import { ChordType, Note } from "@/lib/music/constants";

interface ChordState {
    root: Note;
    type: ChordType;
    inversion: number;
    selectedNotes: number[]; // MIDI numbers or relative indices
    setRoot: (root: Note) => void;
    setType: (type: ChordType) => void;
    setInversion: (inversion: number) => void;
    setSelectedNotes: (notes: number[]) => void;
}

export const useChordStore = create<ChordState>((set) => ({
    root: "C",
    type: "maj",
    inversion: 0,
    selectedNotes: [],
    setRoot: (root) => set({ root }),
    setType: (type) => set({ type }),
    setInversion: (inversion) => set({ inversion }),
    setSelectedNotes: (selectedNotes) => set({ selectedNotes }),
}));
