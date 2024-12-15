import { cn } from "@/lib/utils"

interface ButtonProps {
  reverse?: boolean
  children: React.ReactNode
}

export default function Button({ reverse, children }: ButtonProps) {
  return (
    <button
      className={cn("w-[10rem] h-12 flex justify-center items-center bg-background-blue-light text-[#081b29] font-semibold border-2 border-background-blue-light rounded-lg transition-colors ease-in-out hover:bg-transparent hover:text-foreground-blue-light",
        {
          "bg-transparent text-foreground-blue-light hover:bg-background-blue-light hover:text-[#081b29]": reverse
        }
      )}
    >
      {children}
    </button>
  )
}
