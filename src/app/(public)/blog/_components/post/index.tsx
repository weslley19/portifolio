import { Card, CardContent } from "@/components/ui/card"
import { PostProps } from "@/types/post"
import Image from "next/image"

interface PostsProps {
  data: PostProps
}

export default function Post({ data }: PostsProps) {
  return (
    <Card className="transition-transform transform hover:scale-105 shadow-xl cursor-pointer">
      <CardContent className="p-3">
        <Image
          src={data.image}
          alt={data.title}
          className="w-full rounded-xl"
          width={100}
          height={100}
        />
        <p className="text-sm font-bold mt-4">{data.title}</p>

        <div className="flex justify-between text-xs mt-8">
          <p><span className="text-gray-500">Por</span> <span className="font-semibold">{data.author}</span></p>
          <p className="text-gray-500">{data.date}</p>
        </div>
      </CardContent>
    </Card>

    // <Card className="transition-transform transform hover:scale-105 shadow-xl cursor-pointer">
    //   <CardContent className="p-0">
    //     <div className="relative h-72 rounded-xl">
    //       <Image
    //         src={data.image}
    //         alt={data.title}
    //         className="w-full h-full rounded-xl opacity-85"
    //         width={100}
    //         height={100}
    //       />
    //       <div className="absolute bottom-0 text-white p-3">
    //         <p className="text-sm font-bold">{data.title}</p>
    //         <div className="flex justify-between text-xs mt-8">
    //           <p><span>Por</span> <span className="font-semibold">{data.author}</span></p>
    //           <p>{data.date}</p>
    //         </div>
    //       </div>
    //     </div>

    //   </CardContent>
    // </Card>
  )
}
