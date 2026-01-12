import { create } from "zustand";
import { AccidentalType } from "@/lib/music/constants";

interface SettingsState {
    accidentalType: AccidentalType;
    setAccidentalType: (type: AccidentalType) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
    accidentalType: "sharps",
    setAccidentalType: (type) => set({ accidentalType: type }),
}));