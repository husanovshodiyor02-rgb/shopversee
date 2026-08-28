import { ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";

import mobile from "../assets/img1.png";
import laptop from "../assets/img2.png";
import headphones from "../assets/img3.png";
import monitor from "../assets/img4.png";
import speaker from "../assets/img5.png";

const categories = [
  {
    title: "Mobiles",
    image: mobile,
  },
  {
    title: "Laptops",
    image: laptop,
  },
  {
    title: "Headphones",
    image: headphones,
  },
  {
    title: "Monitors & TVs",
    image: monitor,
  },
  {
    title: "Speakers",
    image: speaker,
  },
];

const TrendingCategories = () => {
  return (
    <section id="categories" className="pt-8 sm:pt-10">
      {/* Title */}
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-[32px]">
          Trending Categories
        </h2>

        <button className="group flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition hover:text-orange-500 sm:text-base">
          Show More
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
