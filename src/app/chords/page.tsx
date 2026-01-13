
'use client';

import { Piano } from "@/components/piano/piano";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const chordCategories = ['maj', 'm', '7', 'm7', 'maj7', 'mM7', '6', 'm6', '6/9', '5', '9', 'm9', 'maj9', '11', 'm11', 'maj11', '13', 'm13', 'maj13', 'add', '7-5', '7+5', 'sus', 'dim', 'dim7', 'm7b5', 'aug', 'aug7'];

export default function ChordsPage() {
  const [selectedKey, setSelectedKey] = useState('C');
  const [selectedChord, setSelectedChord] = useState('Cmaj');

  const handleKeyChange = (key: string) => {
    setSelectedKey(key);
    setSelectedChord(`${key}maj`);
  }

  const handleChordChange = (chord: string) => {
    setSelectedChord(chord);
  }

  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-8">
        {keys.map(key => (
          <Button key={key} onClick={() => handleKeyChange(key)} variant={selectedKey === key ? 'default' : 'outline'}>
            {key}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {chordCategories.map(category => (
          <Button key={category} onClick={() => handleChordChange(`${selectedKey}${category}`)} variant={selectedChord === `${selectedKey}${category}` ? 'default' : 'outline'}>
            {`${selectedKey}${category}`}
          </Button>
        ))}
      </div>
      <Piano />
    </div>
  );
}
