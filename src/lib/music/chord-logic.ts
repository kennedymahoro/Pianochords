import { AccidentalType, CHORD_TYPES, ChordType, NOTES, NOTES_FLAT, Note } from "./constants";

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

export function getNoteName(midiNote: number, accidentalType: AccidentalType = "sharps"): string {
    const noteIndex = midiNote % 12;
    const octave = Math.floor(midiNote / 12) - 1;

    const noteNameArray = accidentalType === 'sharps' ? NOTES : NOTES_FLAT;
    const noteName = noteNameArray[noteIndex];

    return `${noteName}${octave}`;
}

export function getChordNoteNames(
    root: Note,
    type: ChordType,
    inversion: number = 0,
    accidentalType: AccidentalType = "sharps"
): string[] {
    const midiNotes = getChordNotes(root, type, inversion);
    // We want the note name without the octave for this display
    return midiNotes.map(note => getNoteName(note, accidentalType).replace(/\d/g, ''));
}