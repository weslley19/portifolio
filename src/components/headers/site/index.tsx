import SiteMenu from "@/components/menu/site";
import { ChevronLeftIcon, ChevronRightIcon, SlashIcon } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="h-20 min-h-20 container flex justify-between items-center">
      <div className="flex">
        <ChevronLeftIcon />
        <div className="text-xl font-semibold">
          <span>Weslley</span> <span className="text-blue-500">Oliveira</span>
        </div>
        <SlashIcon className="transform rotate-[-25deg]" />
        <ChevronRightIcon />
      </div>
      <div className="flex gap-4 items-center">
        <SiteMenu />
      </div>
    </header>
  )
}
