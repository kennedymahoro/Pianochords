"use client"

import * as React from "react"
import { Key } from "./key"
import { useChordStore } from "@/store/useChordStore"
import { getChordNotes, getNoteName } from "@/lib/music/chord-logic"
import { NOTES } from "@/lib/music/constants"

export function Piano() {
    const { root, type, inversion, selectedNotes, setSelectedNotes } = useChordStore()

    React.useEffect(() => {
        const notes = getChordNotes(root, type, inversion)
        setSelectedNotes(notes)
    }, [root, type, inversion, setSelectedNotes])

    // Generate keys for 4 octaves starting from C2 (36) to C6 (84)
    const startMidi = 36
    const endMidi = 84
    const keys = []

    for (let i = startMidi; i <= endMidi; i++) {
        const noteName = getNoteName(i)
        const isBlack = noteName.includes("#") || noteName.includes("b")
        // Skip black keys in the main loop, we'll handle them with the white keys or separate logic?
        // Standard piano layout logic:
        // White keys are adjacent, black keys are overlaid.
        // Easier to render a flex container of keys, but black keys need absolute positioning or negative margins.
        // My Key component uses negative margins for black keys.

        keys.push({
            midi: i,
            note: noteName,
            isBlack,
        })
    }

    // Filter out black keys to render them interleaved?
    // Actually, the negative margin trick works if we render them in order.
    // But we need to be careful about the order.
    // C (white), C# (black), D (white), D# (black)...
    // If C# has -mx, it pulls D left.

    return (
        <div className="flex justify-center overflow-x-auto p-4">
            <div className="flex">
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
