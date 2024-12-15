"use client"

import { useRouter } from "next/navigation"
import { Fragment } from "react"

export default function Blog() {
  const router = useRouter()

  const posts: Array<{ id: string, date: string, author: string, title: string, tags: string[], description: string }> = [
    { id: "1234-uuid-4321", date: "August 5, 2023", author: "Weslley Oliveira", title: "Release of Tailwind Nextjs Starter Blog v2.0", tags: ['NEXT-JS', 'TAILWIND', 'FEATURE'], description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1." },
    { id: "5678-uuid-8765", date: "August 5, 2023", author: "Weslley Oliveira", title: "Release of Tailwind Nextjs Starter Blog v2.0", tags: ['NEXT-JS', 'TAILWIND', 'FEATURE'], description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1." },
    { id: "2345-uuid-5432", date: "August 5, 2023", author: "Weslley Oliveira", title: "Release of Tailwind Nextjs Starter Blog v2.0", tags: ['NEXT-JS', 'TAILWIND', 'FEATURE'], description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1." },
    { id: "9876-uuid-6789", date: "August 5, 2023", author: "Weslley Oliveira", title: "Release of Tailwind Nextjs Starter Blog v2.0", tags: ['NEXT-JS', 'TAILWIND', 'FEATURE'], description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1." },
    { id: "6789-uuid-9876", date: "August 5, 2023", author: "Weslley Oliveira", title: "Release of Tailwind Nextjs Starter Blog v2.0", tags: ['NEXT-JS', 'TAILWIND', 'FEATURE'], description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1." },
  ]

  const handleRedirectToPost = (postId: string) => {
    router.push(`/blog/${postId}`)
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="text-5xl font-bold">Latest</h1>
        <p className="my-8 text-gray-500">A blog created with Next.js and Tailwind.css</p>
      </div>

      <div>
        <hr className="border-[#e5e7eb]" />
        {posts.map((post, index) => (
          <Fragment key={index}>
            <div className="h-[272px] flex py-12">
              <div className="w-1/4 text-gray-500 text-sm font-semibold">
                <p>{post.date}</p>
                <p className="text-xs">Por {post.author}</p>
              </div>
              <div className="w-3/5">
                <h1
                  className="mt-0 text-2xl font-bold cursor-pointer"
                  onClick={() => handleRedirectToPost(post.id)}>
                  {post.title}
                </h1>
                <div className="flex gap-4 text-[#d5418b] text-sm">
                  {post.tags.map((tag, index) => <span key={index} className="transition-colors hover:text-[#f160a9]">{tag}</span>)}
                </div>
                <p className="my-6 text-sm text-gray-500">{post.description}</p>
                <p
                  className="text-[#d5418b] font-semibold cursor-pointer transition-colors hover:text-[#f160a9]"
                  onClick={() => handleRedirectToPost(post.id)}
                >
                  Read More
                </p>
              </div>
            </div>
            <hr className="border-[#e5e7eb]" />
          </Fragment>
        ))}
      </div>
    </>
  )
}
