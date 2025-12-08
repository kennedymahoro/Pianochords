"use client"

import * as React from "react"
import { Key } from "./key"
import { useChordStore } from "@/store/useChordStore"
import { getChordNotes, getNoteName } from "@/lib/music/chord-logic"

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

        keys.push({
            midi: i,
            note: noteName,
            isBlack,
        })
    }

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex justify-center p-4 min-w-max">
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
