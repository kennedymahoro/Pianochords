import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav className="space-y-2">
        <Link href="/learn" className="block px-4 py-2 rounded-md hover:bg-gray-200">Learn</Link>
        <Link href="/chords" className="block px-4 py-2 rounded-md hover:bg-gray-200">Chords</Link>
        <Link href="/progressions" className="block px-4 py-2 rounded-md hover:bg-gray-200">Progressions</Link>
        <Link href="/theory" className="block px-4 py-2 rounded-md hover:bg-gray-200">Theory</Link>
        <Link href="/settings" className="block px-4 py-2 rounded-md hover:bg-gray-200">Settings</Link>
      </nav>
    </aside>
  );
}
