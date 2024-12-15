import { cn } from "@/lib/utils"

interface ButtonIconProps {
  isRounded?: boolean
  children: React.ReactNode
}

export default function ButtonIcon({ isRounded, children }: ButtonIconProps) {
  return (
    <div className={cn("w-10 h-10 flex justify-center items-center rounded-md p-2 border-2 border-background-blue-light bg-background text-foreground-blue-light cursor-pointer transition-colors hover:bg-background-blue-light hover:text-foreground",
      {
        "rounded-full": isRounded
      }
    )}>
      {children}
    </div>
  )
}
