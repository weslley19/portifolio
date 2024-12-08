import { TooltipProvider, Tooltip as ShadTooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

interface TooltipProps {
  label: string
  children: React.ReactNode
}

export default function Tooltip({ children, label }: TooltipProps) {
  return (
    <TooltipProvider>
      <ShadTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p className="text-sm text-muted">{label}</p>
        </TooltipContent>
      </ShadTooltip>
    </TooltipProvider>
  )
}
