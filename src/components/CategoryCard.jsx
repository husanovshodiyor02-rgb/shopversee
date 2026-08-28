const CategoryCard = ({ title, image }) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center">
      <div className="flex h-[150px] w-full items-center justify-center overflow-hidden sm:h-[170px]">
        <img
          src={image}
          alt={title}
          className="h-[90%] w-[90%] object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-center text-lg font-semibold sm:text-xl">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
