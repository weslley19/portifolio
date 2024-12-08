import Footer from "@/components/footer";
import BlogHeader from "@/components/headers/blog";
import SiteHeader from "@/components/headers/site";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
