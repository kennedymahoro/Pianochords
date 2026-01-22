'''
"use client";

import { memo } from "react";
import * as Tone from "tone";
import { Chord } from "tonal";

interface PianoStripProps {
  chordName: string | null;
}

const PianoKey = ({
  isBlack,
  isHighlighted,
  note,
}: {
  isBlack: boolean;
  isHighlighted: boolean;
  note: string;
}) => (
  <div
    className={`relative h-24 border-2 border-slate-200 ${
      isBlack ? "w-6 bg-slate-800 z-10" : "w-10 bg-white"
    } ${isHighlighted ? "bg-blue-400" : ""}`}
  >
    <span
      className={`absolute bottom-1 left-1/2 -translate-x-1/2 text-xs ${
        isBlack ? "text-white" : "text-slate-500"
      }`}
    >
      {note}
    </span>
  </div>
);

const PianoStrip = ({ chordName }: PianoStripProps) => {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const highlightedNotes = chordName ? Chord.get(chordName).notes : [];

  return (
    <div className="flex justify-center rounded-b-lg overflow-hidden">
      {notes.map((note) => (
        <PianoKey
          key={note}
          note={note}
          isBlack={note.includes("#")}
          isHighlighted={highlightedNotes.includes(note)}
        />
      ))}
    </div>
  );
};

export default memo(PianoStrip);
'''