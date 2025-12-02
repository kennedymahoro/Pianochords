import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
    theme: "light" | "dark" | "system";
    accidentalPreference: "sharp" | "flat";
    setTheme: (theme: "light" | "dark" | "system") => void;
    setAccidentalPreference: (pref: "sharp" | "flat") => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            theme: "system",
            accidentalPreference: "sharp",
            setTheme: (theme) => set({ theme }),
            setAccidentalPreference: (accidentalPreference) =>
                set({ accidentalPreference }),
        }),
        {
            name: "user-settings",
        }
    )
);
