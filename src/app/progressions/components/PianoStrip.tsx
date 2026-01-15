
import { Chord } from 'tonal';

const PianoKey = ({ isBlack, isHighlighted, note }) => {
  const keyClasses = `
    h-16 relative
    ${isBlack ? 'w-6 bg-black z-10 -mx-3' : 'w-10 bg-white'}
    ${isHighlighted ? (isBlack ? 'bg-indigo-500' : 'bg-indigo-300') : ''}
  `;
  return <div className={keyClasses} title={note}></div>;
};

export default function PianoStrip({ chordName }) {
  if (!chordName) return null;

  const notes = Chord.get(chordName).notes;
  const allNotes = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
  ];

  return (
    <div className="flex justify-center p-2 bg-zinc-700 rounded-b-lg">
      {allNotes.map((note) => (
        <PianoKey
          key={note}
          note={note}
          isBlack={note.includes('#')}
          isHighlighted={notes.includes(note + '4') || notes.includes(note + '3')}
        />
      ))}
    </div>
  );
}
