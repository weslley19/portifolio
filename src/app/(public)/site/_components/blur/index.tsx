import { cn } from "@/lib/utils"

interface BlurProps {
  direction: 'left' | 'right'
}

export default function Blur({ direction }: BlurProps) {
  const align = direction === 'right' ? "-top-24 right-36" : "top-64 left-40"
  const bgColor = {
    first: direction === 'right' ? 'bg-[#1809A1CC]' : 'bg-[#1809A180]',
    second: direction === 'right' ? 'bg-[#54BFFDCC]' : 'bg-[#54BFFD80]',
    third: direction === 'right' ? 'bg-[#1453FFCC]' : 'bg-[#1453FF80]'
  }

  return (
    <div className={cn("absolute blur-3xl -z-10", align)}>
      <div className={cn("w-52 h-52 rounded-full absolute", bgColor.first)} />
      <div className={cn("w-52 h-52 rounded-full bg-[#54BFFDCC] absolute top-28 -right-10", bgColor.second)} />
      <div className={cn("w-52 h-52 rounded-full bg-[#1453FFCC] absolute top-56 -right-52", bgColor.third)} />
    </div>
  )
}
