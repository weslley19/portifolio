import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface SectionSiteProps extends HTMLProps<HTMLElement> {
  isSecondBackground?: boolean
  dataTitle?: {
    first: string
    second: string
  }
}

export default function SectionSite({ isSecondBackground, dataTitle, ...props }: SectionSiteProps) {

  return (
    <section
      {...props}
      className={cn("min-h-screen pt-[6rem] pb-[2rem] px-16", props.className, { "bg-background-secondary": isSecondBackground })}
    >
      {dataTitle?.first && <h1 className="text-5xl font-semibold text-center mb-12">
        {dataTitle.first} <span className="text-foreground-blue-light">{dataTitle.second}</span>
      </h1>}
      {props.children}
    </section>
  )
}
