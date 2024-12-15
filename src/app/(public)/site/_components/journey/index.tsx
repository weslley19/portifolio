import SectionSite from "@/components/section-site";
import { CalendarDaysIcon } from "lucide-react"

export default function Journey() {
  const journeys: Array<{ date: string, title: string, description: string }> = [
    { date: "2017 - 2018", title: "Master Degree - University", description: "smdkamsldkmasldmaslkdmalsmdalksmdlaksd aslkdmaslkdmaslkdmaslkdmaslkdmalskd dkamlskdmalskdmlaskd." },
    { date: "2017 - 2018", title: "Master Degree - University", description: "smdkamsldkmasldmaslkdmalsmdalksmdlaksd aslkdmaslkdmaslkdmaslkdmaslkdmalskd dkamlskdmalskdmlaskd." },
    { date: "2017 - 2018", title: "Master Degree - University", description: "smdkamsldkmasldmaslkdmalsmdalksmdlaksd aslkdmaslkdmaslkdmaslkdmaslkdmalskd dkamlskdmalskdmlaskd." },
    { date: "2017 - 2018", title: "Master Degree - University", description: "smdkamsldkmasldmaslkdmalsmdalksmdlaksd aslkdmaslkdmaslkdmaslkdmaslkdmalskd dkamlskdmalskdmlaskd." },
  ]

  return (
    <SectionSite dataTitle={{ first: "Minha", second: "Jornada" }}>
      <div className="grid grid-cols-2 gap-4">
        {journeys.map((item, index) => (
          <div
            key={index}
            className="border-2 border-background-blue-light p-4 transition-colors rounded-md hover:bg-background-secondary"
          >
            <span className="flex items-center gap-2 text-foreground-blue-light text-sm font-semibold">
              <CalendarDaysIcon className="w-4 h-4" />
              {item.date}
            </span>
            <h1 className="my-4 font-bold text-xl">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionSite>
  )
}
