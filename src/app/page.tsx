import { ChordControls } from "@/components/theory/chord-controls";
import { CircleOfFifths } from "@/components/theory/circle-of-fifths";
import { Piano } from "@/components/piano/piano";
import { TheoryPanel } from "@/components/theory/theory-panel";
import { Shell } from "@/components/layout/shell";

export default function Home() {
  return (
    <Shell>
      <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <ChordControls />
          <CircleOfFifths />
          <div className="flex-1">
            <TheoryPanel className="h-full" />
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <Piano />
        </div>
      </div>
    </Shell>
  );
}
