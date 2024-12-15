import ToggleTheme from "@/components/toggle-theme";
import NavItem from "../nav-item";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="w-full h-14 transition-all z-[100] bg-transparent flex justify-between items-center font-semibold px-16 mb-10">
      <Link href="/blog"><p className="text-lg font-bold">Weslley.</p></Link>
      <nav className="flex items-center gap-8">
        <ul className="flex gap-8">
          <NavItem path="/site">Home</NavItem>
        </ul>
        <ToggleTheme />
      </nav>
    </header>
  )
}
