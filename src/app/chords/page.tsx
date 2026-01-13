
'use client';

import { Piano } from "@/components/piano/piano";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useChordStore } from "@/store/useChordStore";
import { useState, useEffect } from "react";
import { CHORD_TYPES } from "@/lib/music/constants";

const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const chordShapes = Object.keys(CHORD_TYPES);
const chordVoicings = ['root', '1st', '2nd', '3rd'];

export default function ChordsPage() {
  const [selectedKey, setSelectedKey] = useState('C');
  const [selectedShape, setSelectedShape] = useState('maj');
  const [selectedVoicing, setSelectedVoicing] = useState('root');
  const { setRoot, setType, setInversion } = useChordStore();

  useEffect(() => {
    setRoot(selectedKey);
    setType(selectedShape);
    const inversionIndex = chordVoicings.indexOf(selectedVoicing);
    setInversion(inversionIndex);
  }, [selectedKey, selectedShape, selectedVoicing, setRoot, setType, setInversion]);

  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-8">
        {keys.map(key => (
          <Button key={key} onClick={() => setSelectedKey(key)} variant={selectedKey === key ? 'default' : 'outline'}>
            {key}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Shapes</h3>
          <Select value={selectedShape} onValueChange={setSelectedShape}>
            <SelectTrigger>
              <SelectValue placeholder="Select shape" />
            </SelectTrigger>
            <SelectContent>
              {chordShapes.map(shape => (
                <SelectItem key={shape} value={shape}>{`${selectedKey}${shape}`}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Voicings</h3>
          <Select value={selectedVoicing} onValueChange={setSelectedVoicing}>
            <SelectTrigger>
              <SelectValue placeholder="Select voicing" />
            </SelectTrigger>
            <SelectContent>
              {chordVoicings.map(voicing => (
                <SelectItem key={voicing} value={voicing}>{voicing}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">{`${selectedKey}${selectedShape}`}</h2>
      </div>
      <Piano />
    </div>
  );
}
