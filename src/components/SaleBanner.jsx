import saleBanner from "../assets/b.png";

const SaleBanner = () => {
  return (
    <section className="mt-12 overflow-hidden rounded-[24px] bg-[#eeeeee] sm:mt-16 lg:rounded-[30px]">
      <div className="relative min-h-[500px] lg:min-h-[380px]">
        {/* Background Image */}
        <img
          src={saleBanner}
          alt="Galaxy S24 Sale"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />

      </div>
    </section>
  );
};

export default SaleBanner;
