const BlogCard = ({ image, title, date }) => {
    return (
      <article className="group">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            className="h-auto w-full"
          />
        </div>
  
        {/* Title */}
        <h3 className="mt-3 text-base font-semibold sm:text-lg">
          {title}
        </h3>
        
  
        {/* Bottom */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-xs text-gray-500 sm:text-sm">
            {date}
          </span>
  
          <button className="group/read flex shrink-0 items-center gap-1 text-[10px] text-gray-500 underline underline-offset-2 transition hover:text-black sm:text-xs">
            Read More
            <span className="transition-transform group-hover/read:translate-x-1">
              →
            </span>
          </button>
        </div>
      </article>
    );
  };
  
  export default BlogCard;