import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingCategories from "./components/TrendingCategories";

function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f4] text-[#24262b]">
      <Header />

      <div className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">
        <Hero />
        <TrendingCategories />
      </div>
    </main>
  );
}

export default App;
