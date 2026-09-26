import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Accessorize Like a Pro",
    date: "10th January 2024",
  },
  {
    id: 2,
    image: blog2,
    title: "10 Timeless Wardrobe Staples",
    date: "3rd February 2024",
  },
  {
    id: 3,
    image: blog3,
    title: "The Art of Sustainable Fashion",
    date: "1st March 2024",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-12 sm:py-16">
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold sm:text-3xl">Our Blogs</h2>

        <button className="group flex items-center gap-2 text-sm underline underline-offset-4 transition hover:text-orange-500 sm:text-base">
          Show More
          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
