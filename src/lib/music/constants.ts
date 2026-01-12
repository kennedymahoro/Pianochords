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
    major: { name: "Major", intervals: [0, 4, 7] },
    minor: { name: "Minor", intervals: [0, 3, 7] },
    diminished: { name: "Diminished", intervals: [0, 3, 6] },
    augmented: { name: "Augmented", intervals: [0, 4, 8] },
    maj7: { name: "Major 7th", intervals: [0, 4, 7, 11] },
    min7: { name: "Minor 7th", intervals: [0, 3, 7, 10] },
    dom7: { name: "Dominant 7th", intervals: [0, 4, 7, 10] },
    dim7: { name: "Diminished 7th", intervals: [0, 3, 6, 9] },
    halfdim7: { name: "Half Diminished 7th", intervals: [0, 3, 6, 10] },
    sus2: { name: "Suspended 2nd", intervals: [0, 2, 7] },
    sus4: { name: "Suspended 4th", intervals: [0, 5, 7] },
} as const;

export type ChordType = keyof typeof CHORD_TYPES;