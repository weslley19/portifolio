import Link from "next/link"
import { MoveLeftIcon } from "lucide-react"

export default function Post({ params }: { params: { id: string } }) {
  const post: { id: string, date: string, author: string, title: string, tags: string[], description: string } =
    { id: "1234-uuid-4321", date: "August 5, 2023", author: "Weslley Oliveira", title: "Release of Tailwind Nextjs Starter Blog v2.0", tags: ['NEXT-JS', 'TAILWIND', 'FEATURE'], description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1." }

  console.log(params.id)

  return (
    <div>
      <div className="text-center">
        <p className="text-gray-500 font-semibold text-sm mb-2">{post.date}</p>
        <h1 className="text-5xl font-bold">{post.title}</h1>
      </div>

      <hr className="my-8 border-[#e5e7eb]" />

      <div className="flex items-start">
        <div className="w-1/4 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-10 h-10 rounded-full bg-red-500"></div>
            <p className="text-xs font-semibold">{post.author}</p>
          </div>
          <hr className="my-8 border-[#e5e7eb]" />
          <div className="flex flex-col justify-center text-gray-500">
            <p className="text-xs">TAGS</p>
            <div className="flex gap-4 text-[#d5418b] text-sm">
              {post.tags.map((tag, index) => <span key={index} className="transition-colors hover:text-[#f160a9]">{tag}</span>)}
            </div>
          </div>
          <hr className="my-8 border-[#e5e7eb]" />
          <Link href="/blog" className="flex items-center gap-2 text-[#d5418b] transition-colors hover:text-[#f160a9]">
            <MoveLeftIcon />
            Voltar ao Blog
          </Link>
        </div>
        <div className="w-3/5 text-justify">
          {post.description}
          {post.description}
          {post.description}
          {post.description}
          {post.description}
          {post.description}
        </div>
      </div>
    </div>
  )
}
