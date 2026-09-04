import { useState } from "react";
import { Heart, Search, ShoppingBag, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "Help", href: "#help" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50 mx-auto max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight sm:text-2xl">
          ShopVerse
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Search */}
          <div className="hidden w-[145px] items-center gap-2 rounded-full bg-gray-200 px-4 py-2 lg:flex">
            <Search size={17} />

            <input
              type="text"
              placeholder='Search for "Phones"'
              className="w-full bg-transparent text-xs outline-none"
            />
          </div>

          {/* Mobile Search */}
          <button
            aria-label="Search"
            className="rounded-full p-2 transition hover:bg-gray-200 lg:hidden"
          >
            <Search size={21} />
          </button>

          <button
            aria-label="Wishlist"
            className="rounded-full p-2 transition hover:bg-gray-200"
          >
            <Heart size={21} />
          </button>

          <button
            aria-label="Cart"
            className="rounded-full p-2 transition hover:bg-gray-200"
          >
            <ShoppingBag size={21} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="ml-1 rounded-full p-2 transition hover:bg-gray-200 lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-4 right-4 top-[76px] overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 lg:hidden sm:left-6 sm:right-6 ${
          menuOpen
            ? "max-h-[400px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-4 text-lg font-medium transition hover:bg-gray-100 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
