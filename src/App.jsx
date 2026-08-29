import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingCategories from "./components/TrendingCategories";
import PopularProducts from "./components/PopularProducts";
import SaleBanner from "./components/SaleBanner";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f4] text-[#24262b]">
      <Header />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Hero />
        <TrendingCategories />
        <PopularProducts />
        <SaleBanner />
        <Blogs />
      </div>

      <Footer />
    </main>
  );
}

export default App;
