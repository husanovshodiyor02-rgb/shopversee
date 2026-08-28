import watchBanner from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] overflow-hidden rounded-[30px]">
      {/* Background Image */}
      <img
        src={watchBanner}
        alt="Apple Watch Ultra"
        className="absolute inset-0 h-full w-full"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* React orqali qo'shilgan content */}
      <div className="relative z-10 flex min-h-[500px] flex-col justify-center px-7 py-10 text-white sm:px-10 md:min-h-[410px] lg:px-14">
        <p className="mb-4 text-sm font-medium tracking-wide sm:text-base">
          SALE UP TO 20% OFF
        </p>

        <h2 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Apple Watch Ultra 2
        </h2>

        <p className="mb-6 max-w-[520px] text-base leading-relaxed text-gray-200 sm:text-lg">
          The most rugged and capable Apple Watch pushes the limits again.
          Featuring the all-new S9 SiP.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium transition hover:bg-orange-600">
            Shop Now
          </button>

          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
