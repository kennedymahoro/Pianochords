
'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Play,
  Pause,
  RotateCw,
  Plus,
  Music,
  ChevronDown,
  ChevronUp,
  Trash2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as Tone from 'tone';
import { Chord, RomanNumeral, Key } from 'tonal';
import PianoStrip from './components/PianoStrip';

const allChords = ['Cmaj7', 'Dm7', 'G7', 'Am7', 'Fmaj7', 'Em7', 'Bm7b5', 'C', 'G', 'Am', 'F'];

const vibeRecommendations = {
  Pop: ['C', 'G', 'Am', 'F'],
  Jazz: ['Dm7', 'G7', 'Cmaj7'],
  Blues: ['G7', 'C7', 'F7'],
  Dark: ['Bm7b5', 'E7', 'Am'],
  Epic: ['Fmaj7', 'G', 'Am'],
};

const keys = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'];

export default function ChordProgressionBuilder() {
  const [progression, setProgression] = useState(Array(4).fill(null));
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [searchTerm, setSearchTerm] = useState('');
  const [vibe, setVibe] = useState('Pop');
  const [theoryExpanded, setTheoryExpanded] = useState(false);
  const [currentKey, setCurrentKey] = useState('C');

  const synth = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    synth.current = new Tone.PolySynth(Tone.Synth).toDestination();
  }, []);

  useEffect(() => {
    if (loopRef.current) {
      loopRef.current.dispose();
    }
    loopRef.current = new Tone.Sequence(
      (time, chord) => {
        if (chord) {
          const notes = Chord.get(chord).notes.map(n => n.includes('#') ? n + '4' : n + '4');
          synth.current.triggerAttackRelease(notes, '8n', time);
        }
      },
      progression,
      '4n'
    );
    Tone.Transport.bpm.value = bpm;
  }, [progression, bpm]);

  const togglePlayback = () => {
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };
  
  const addChordToProgression = (chord) => {
    const nextEmptySlot = progression.findIndex((c) => c === null);
    if (nextEmptySlot !== -1) {
      const newProgression = [...progression];
      newProgression[nextEmptySlot] = chord;
      setProgression(newProgression);
    }
  };

  const removeChordFromProgression = (index) => {
    const newProgression = [...progression];
    newProgression[index] = null;
    setProgression(newProgression);
  };

  const getRomanNumeral = (chordName) => {
    if (!chordName) return '';
    try {
      const roman = RomanNumeral.fromChord(Key.major(currentKey).tonic, Chord.get(chordName));
      return roman.name;
    } catch (e) {
      return '';
    }
  };
  
  const filteredChords = allChords.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 flex flex-col">
      <header className="flex-shrink-0 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
          Chord Progression Builder
        </h1>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 bg-white">
          <CardHeader>
            <CardTitle>Chord Library</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Search chords..."
              className="bg-slate-100 border-slate-300 mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2 mb-4">
              <Select onValueChange={setVibe} defaultValue={vibe}>
                <SelectTrigger className="w-full bg-slate-100 border-slate-300">
                  <SelectValue placeholder="Select a vibe" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(vibeRecommendations).map((vibe) => (
                    <SelectItem key={vibe} value={vibe}>
                      {vibe}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setCurrentKey} defaultValue={currentKey}>
                <SelectTrigger className="w-full bg-slate-100 border-slate-300">
                  <SelectValue placeholder="Select a key" />
                </SelectTrigger>
                <SelectContent>
                  {keys.map((key) => (
                    <SelectItem key={key} value={key}>
                      {key} Major
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredChords.map((chord) => (
                <Button
                  key={chord}
                  variant="ghost"
                  className={`w-full justify-start ${vibeRecommendations[vibe].includes(chord) ? 'text-blue-600 font-bold' : ''}`}
                  onClick={() => addChordToProgression(chord)}
                >
                  {chord}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {progression.map((chord, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative flex flex-col shadow-sm rounded-lg"
                  >
                    <Card
                      className={`flex-grow flex flex-col items-center justify-center bg-white rounded-b-none ${!chord ? 'border-dashed' : ''}`}
                    >
                      {chord ? (
                        <>
                          <p className="text-3xl font-bold text-slate-800">
                            {chord}
                          </p>
                          <p className="text-lg text-slate-500">{getRomanNumeral(chord)}</p> 
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeChordFromProgression(index)}
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-800"
                          >
                            <Trash2 className="h-4 w-4"/>
                          </Button>
                        </>
                      ) : (
                        <Plus className="text-slate-400" />
                      )}
                    </Card>
                    <PianoStrip chordName={chord} />
                  </motion.div>
                ))}
              </div>
          </div>

          <Card className="bg-white mt-8">
            <CardHeader
              className="cursor-pointer"
              onClick={() => setTheoryExpanded(!theoryExpanded)}
            >
              <CardTitle className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Music className="mr-2 text-blue-600" />
                    Functional Harmony
                  </div>
                  {theoryExpanded ? <ChevronUp /> : <ChevronDown />}
                </CardTitle>
            </CardHeader>
            <AnimatePresence>
              {theoryExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <CardContent>
                    <p className="text-slate-600">
                      This appears to be a I-V-vi-IV progression in C Major, one of the most common and popular progressions in music.
                    </p>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </main>

      <footer className="sticky bottom-0 mt-8 py-4 bg-white/80 backdrop-blur-sm border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayback}
          >
            {isPlaying ? (
              <Pause className="text-blue-600 h-6 w-6" />
            ) : (
              <Play className="text-blue-600 h-6 w-6" />
            )}
          </Button>
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-600">{bpm} BPM</p>
            <Input
              type="range"
              min="60"
              max="220"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-32 accent-blue-600"
            />
          </div>
          <Button variant="ghost" size="icon" onClick={() => loopRef.current.loop = !loopRef.current.loop}>
            <RotateCw className={`h-6 w-6 ${loopRef.current?.loop ? 'text-green-500' : 'text-blue-600'}`} />
          </Button>
        </div>
      </footer>
    </div>
  );
}
