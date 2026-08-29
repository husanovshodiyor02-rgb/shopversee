import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

import phone from "../assets/p1.png";
import nano from "../assets/p2.png";
import shoes from "../assets/p3.png";
import bose from "../assets/p4.png";
import speaker from "../assets/p5.png";
import tablet from "../assets/p6.png";
import laptop from "../assets/p7.png";
import mouse from "../assets/p8.png";

const products = [
  {
    name: "Magnetic Case",
    price: "$31.49",
    oldPrice: "$18.91",
    image: phone,
    rating: 5,
  },
  {
    name: "UCOMX Nano 3 in 1",
    price: "$39.99",
    oldPrice: "$49.99",
    image: nano,
    rating: 4,
  },
  {
    name: "NB Fresh Foam",
    price: "$71.99",
    oldPrice: "$81.90",
    image: shoes,
    rating: 5,
  },
  {
    name: "Bose QuietComfort",
    price: "$379.00",
    oldPrice: "$579.00",
    image: bose,
    rating: 5,
  },
  {
    name: "BUGANI BT Speaker",
    price: "$59.93",
    oldPrice: "$129.98",
    image: speaker,
    rating: 4,
  },
  {
    name: "Galaxy Tab A9+",
    price: "$169.99",
    oldPrice: "$219.99",
    image: tablet,
    rating: 4,
  },
  {
    name: "Acer Aspire 1",
    price: "$228.27",
    oldPrice: "$300.00",
    image: laptop,
    rating: 4,
  },
  {
    name: "Redragon M810",
    price: "$32.99",
    oldPrice: "$39.99",
    image: mouse,
    rating: 4,
  },
];

const PopularProducts = () => {
  return (
    <section className="pt-12 sm:pt-16">
      {/* Title */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold sm:text-3xl">Popular Products</h2>

        <button className="group flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition hover:text-orange-500 sm:text-base">
          Show More
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
