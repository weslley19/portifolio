import PageTitle from "@/components/page-title";
import { PostProps } from "@/types/post";
import Post from "./_components/post";

export default function Blog() {
  const posts: PostProps[] = [
    { id: 1, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
    { id: 2, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
    { id: 3, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
    { id: 4, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
    { id: 5, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
    { id: 6, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
    { id: 7, title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry", author: "Weslley Oliveira", date: "08/12/2024", image: "https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" },
  ]

  return (
    <div>
      <PageTitle className="text-center mt-8">Mais recentes</PageTitle>

      <div className="grid grid-cols-4 gap-6">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  )
}
