
import { Chord, Note } from 'tonal';

const PianoKey = ({ isBlack, isHighlighted, note }) => {
  const keyClasses = `
    h-16 relative border-slate-300
    ${isBlack ? 'w-6 bg-black z-10 -mx-3 border-x' : 'w-10 bg-white border'}
    ${isHighlighted ? (isBlack ? 'bg-blue-500' : 'bg-blue-300') : ''}
  `;
  return <div className={keyClasses} title={note}></div>;
};

export default function PianoStrip({ chordName }) {
  if (!chordName) {
    return <div className="h-20 border border-t-0 rounded-b-md bg-slate-50"></div>;
  }

  const chordNotes = Chord.get(chordName).notes;
  const pitchClasses = chordNotes.map(note => Note.pitchClass(note));
  
  const pianoOctave = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
  ];

  return (
    <div className="flex justify-center p-2 border border-t-0 rounded-b-md bg-slate-100">
      {pianoOctave.map((note) => (
        <PianoKey
          key={note}
          note={note}
          isBlack={note.includes('#')}
          isHighlighted={pitchClasses.includes(note)}
        />
      ))}
    </div>
  );
}
