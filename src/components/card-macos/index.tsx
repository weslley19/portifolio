import { cn } from "@/lib/utils"

interface CardMacOSProps {
  className?: string
  children: React.ReactNode
}

export default function CardMacOS({ className = '', children }: CardMacOSProps) {
  const balls: Array<{ color: string }> = [
    { color: 'bg-red-500' },
    { color: 'bg-yellow-500' },
    { color: 'bg-green-500' },
  ]

  return (
    <div className={cn("px-8 py-4 rounded-lg border dark:border-gray-500", className)}>
      <div className="flex gap-4 mb-4">
        {balls.map((ball, index) => (
          <div key={index} className={cn("w-4 h-4 rounded-full", ball.color)} />
        ))}
      </div>
      <hr className="mb-4 border dark:border-gray-500" />
      {children}
    </div>
  )
}
