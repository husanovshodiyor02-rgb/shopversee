import { Star } from "lucide-react";

const ProductCard = ({ name, price, oldPrice, image, rating = 4 }) => {
  return (
    <div className="group rounded-[20px] border border-gray-200/70 bg-[#eeeeee] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5">
      {/* Image */}
      <div className="flex h-[120px] items-center justify-center sm:h-[135px] lg:h-[150px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Rating */}
      <div className="mt-3 flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            fill={star <= rating ? "#f4c542" : "transparent"}
            className={star <= rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Name */}
      <h3 className="mt-2 truncate text-center text-xs font-medium sm:text-sm">
        {name}
      </h3>

      {/* Price */}
      <div className="mt-1 flex items-center justify-center gap-1">
        <span className="text-xs font-bold text-orange-500 sm:text-sm">
          {price}
        </span>

        {oldPrice && (
          <span className="text-[9px] text-gray-400 line-through sm:text-[10px]">
            {oldPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
