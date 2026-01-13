export const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] as const;
export const NOTES_FLAT = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"] as const;

export type Note = (typeof NOTES)[number] | (typeof NOTES_FLAT)[number];

export type AccidentalType = "sharps" | "flats";

export const CIRCLE_OF_FIFTHS_SHARPS = [
    "C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#", "E#"
];

export const CIRCLE_OF_FIFTHS_FLATS = [
    "C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb", "Fb", "Bbb", "Ebb", "Abb"
];

export const RELATIVE_MINOR_SHARPS = {
    "C": "Am", "G": "Em", "D": "Bm", "A": "F#m", "E": "C#m", "B": "G#m", "F#": "D#m",
    "C#": "A#m", "G#": "E#m", "D#": "B#m", "A#": "F##m", "E#": "C##m"
};

export const RELATIVE_MAJOR_FLATS = {
    "F": "Dm", "Bb": "Gm", "Eb": "Cm", "Ab": "Fm", "Db": "Bbm", "Gb": "Ebm",
    "Cb": "Abm", "Fb": "Dbm", "Bbb": "Gbm", "Ebb": "Cbm", "Abb": "Fbm"
};

export const CHORD_TYPES = {
    maj: { name: "Major", intervals: [0, 4, 7] },
    m: { name: "Minor", intervals: [0, 3, 7] },
    7: { name: "Dominant 7th", intervals: [0, 4, 7, 10] },
    m7: { name: "Minor 7th", intervals: [0, 3, 7, 10] },
    maj7: { name: "Major 7th", intervals: [0, 4, 7, 11] },
    mM7: { name: "Minor Major 7th", intervals: [0, 3, 7, 11] },
    6: { name: "Major 6th", intervals: [0, 4, 7, 9] },
    m6: { name: "Minor 6th", intervals: [0, 3, 7, 9] },
    "6/9": { name: "6/9", intervals: [0, 4, 7, 9, 14] },
    5: { name: "Power Chord", intervals: [0, 7] },
    9: { name: "Dominant 9th", intervals: [0, 4, 7, 10, 14] },
    m9: { name: "Minor 9th", intervals: [0, 3, 7, 10, 14] },
    maj9: { name: "Major 9th", intervals: [0, 4, 7, 11, 14] },
    11: { name: "Dominant 11th", intervals: [0, 4, 7, 10, 14, 17] },
    m11: { name: "Minor 11th", intervals: [0, 3, 7, 10, 14, 17] },
    maj11: { name: "Major 11th", intervals: [0, 4, 7, 11, 14, 17] },
    13: { name: "Dominant 13th", intervals: [0, 4, 7, 10, 14, 21] },
    m13: { name: "Minor 13th", intervals: [0, 3, 7, 10, 14, 21] },
    maj13: { name: "Major 13th", intervals: [0, 4, 7, 11, 14, 21] },
    add: { name: "Add 9", intervals: [0, 4, 7, 14] },
    "7-5": { name: "Dominant 7th flat 5", intervals: [0, 4, 6, 10] },
    "7+5": { name: "Dominant 7th sharp 5", intervals: [0, 4, 8, 10] },
    sus: { name: "Suspended 4th", intervals: [0, 5, 7] },
    dim: { name: "Diminished", intervals: [0, 3, 6] },
    dim7: { name: "Diminished 7th", intervals: [0, 3, 6, 9] },
    m7b5: { name: "Half Diminished 7th", intervals: [0, 3, 6, 10] },
    aug: { name: "Augmented", intervals: [0, 4, 8] },
    aug7: { name: "Augmented 7th", intervals: [0, 4, 8, 10] }
} as const;

export type ChordType = keyof typeof CHORD_TYPES;

export const INTERVAL_NAMES: { [key: number]: string } = {
    0: "Root",
    1: "Minor 2nd",
    2: "Major 2nd",
    3: "Minor 3rd",
    4: "Major 3rd",
    5: "Perfect 4th",
    6: "Tritone",
    7: "Perfect 5th",
    8: "Minor 6th",
    9: "Major 6th",
    10: "Minor 7th",
    11: "Major 7th",
};