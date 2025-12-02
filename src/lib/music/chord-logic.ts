import { CHORD_TYPES, ChordType, NOTES, NOTES_FLAT, Note } from "./constants";

const MIDI_ROOT_C = 60; // C4

export function getNoteIndex(note: Note): number {
    let index = NOTES.indexOf(note as any);
    if (index === -1) {
        index = NOTES_FLAT.indexOf(note as any);
    }
    return index;
}

export function getChordNotes(
    root: Note,
    type: ChordType,
    inversion: number = 0
): number[] {
    const rootIndex = getNoteIndex(root);
    if (rootIndex === -1) return [];

    const intervals = CHORD_TYPES[type].intervals;
    let notes = intervals.map((interval) => rootIndex + interval + MIDI_ROOT_C);

    // Handle inversions
    if (inversion > 0) {
        for (let i = 0; i < inversion; i++) {
            const note = notes.shift();
            if (note !== undefined) {
                notes.push(note + 12);
            }
        }
    }

    return notes;
}

export function getNoteName(midi: number): string {
    const noteIndex = midi % 12;
    return NOTES[noteIndex]; // Default to sharps for now, can make configurable
}
