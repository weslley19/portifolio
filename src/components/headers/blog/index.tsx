import PageTitle from "@/components/page-title";
import ToggleTheme from "@/components/toggle-theme";
import { ChevronLeftIcon, ChevronRightIcon, SlashIcon } from "lucide-react"
import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="h-52 bg-blue-500 flex flex-col text-white">
      <div className="container h-20 min-h-20 flex justify-between items-center">
        <Link href="/">
          <div className="flex">
            <ChevronLeftIcon />
            <div className="text-xl font-semibold">
              <span>Weslley Oliveira</span>
            </div>
            <SlashIcon className="transform rotate-[-25deg]" />
            <ChevronRightIcon />
          </div>
        </Link>
        <ToggleTheme />
      </div>
      <div className="text-center">
        <PageTitle className="mb-4">Blog</PageTitle>
        <p>Todas as dicas em um só lugar</p>
      </div>
    </header>
  )
}
