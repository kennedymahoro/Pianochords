"use client"

import * as React from "react"
import { Key } from "./key"
import { useChordStore } from "@/store/useChordStore"
import { getChordNotes, getNoteName } from "@/lib/music/chord-logic"

const WHITE_KEY_WIDTH = 58; // w-14 is 56px, plus 1px border on each side.

export function Piano() {
    const { root, type, inversion, selectedNotes, setSelectedNotes } = useChordStore()
    const pianoContainerRef = React.useRef<HTMLDivElement>(null);
    const [numberOfWhiteKeys, setNumberOfWhiteKeys] = React.useState(29); // Default for 49 keys

    React.useEffect(() => {
        const notes = getChordNotes(root, type, inversion)
        setSelectedNotes(notes)
    }, [root, type, inversion, setSelectedNotes])

    React.useEffect(() => {
        const calculateKeys = () => {
            if (pianoContainerRef.current) {
                const containerWidth = pianoContainerRef.current.offsetWidth;
                // Only calculate if container has a width
                if (containerWidth > 0) {
                    // p-4 on the child div means 1rem (16px) padding on each side. Total 32px.
                    const availableWidth = containerWidth - 32;
                    const numWhiteKeys = Math.floor(availableWidth / WHITE_KEY_WIDTH);
                    setNumberOfWhiteKeys(numWhiteKeys);
                }
            }
        };

        const resizeObserver = new ResizeObserver(calculateKeys);
        const currentRef = pianoContainerRef.current;
        if (currentRef) {
            resizeObserver.observe(currentRef);
        }

        calculateKeys(); // Initial calculation

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
            }
        };
    }, []);

    const startMidi = 12 // C0
    const keys = []
    
    let whiteKeyCount = 0;
    let midi = startMidi;
    // Guard against an infinite loop if getNoteName doesn't behave as expected.
    while(whiteKeyCount < numberOfWhiteKeys && midi < 128) {
        const noteName = getNoteName(midi);
        const isBlack = noteName.includes("#") || noteName.includes("b");
        if (!isBlack) {
            whiteKeyCount++;
        }
        keys.push({
            midi: midi,
            note: noteName,
            isBlack,
        });
        midi++;
    }

    return (
        <div className="w-full overflow-hidden" ref={pianoContainerRef}>
            <div className="flex justify-center p-4">
                {keys.map((key) => (
                    <Key
                        key={key.midi}
                        note={key.note}
                        isBlack={key.isBlack}
                        isActive={selectedNotes.includes(key.midi)}
                        onClick={() => {
                            // Play sound or toggle note (future)
                        }}
                        label={selectedNotes.includes(key.midi) ? key.note : undefined}
                    />
                ))}
            </div>
        </div>
    )
}
