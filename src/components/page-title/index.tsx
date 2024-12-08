import { cn } from "@/lib/utils"

interface PageTitleProps {
  className?: string
  children: React.ReactNode
}

export default function PageTitle({ className, children }: PageTitleProps) {
  return (
    <h1 className={cn("text-2xl font-bold mb-8", className)}>{children}</h1>
  )
}
