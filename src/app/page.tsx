import { ChordControls } from "@/components/theory/chord-controls";
import { CircleOfFifths } from "@/components/theory/circle-of-fifths";
import { Piano } from "@/components/piano/piano";
import { TheoryPanel } from "@/components/theory/theory-panel";
import { Shell } from "@/components/layout/shell";

export default function Home() {
  return (
    <Shell>
      <div className="h-full w-full grid grid-rows-[1fr_auto] gap-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <ChordControls />
            <CircleOfFifths />
          </div>
          <TheoryPanel />
        </div>
        <div>
          <Piano />
        </div>
      </div>
    </Shell>
  );
}
