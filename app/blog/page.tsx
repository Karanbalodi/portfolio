import { BlogTile } from "@/components/blog-tile";
import { blogs } from "@/constants";

export default function Blog() {
  return (
    <section className="mx-4 sm:mx-8 sm:px-4 mt-28">
      <h1 className="text-primary text-3xl sm:text-4xl font-medium">
        Blogs 📝
      </h1>
      {blogs?.map((blog) => (
        <BlogTile
          key={blog.title}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          readTime={blog.readTime}
          views={blog.views}
        />
      ))}
    </section>
  );
}
