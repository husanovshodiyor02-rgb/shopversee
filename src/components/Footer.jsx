import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const resources = [
    { name: "About", href: "#about" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "Help", href: "#help" },
  ];

  const download = [
    { name: "Windows", href: "#" },
    { name: "Mac OS", href: "#" },
    { name: "Android", href: "#" },
    { name: "iOS", href: "#" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-[#f5f5f4]">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">ShopVerse</h2>

            <p className="mt-8 text-xs text-gray-600 sm:mt-10">
              © 2024 Shopverse All Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Download */}
          <div className="lg:justify-self-end">
            <h3 className="mb-3 text-base font-medium">Download</h3>

            <ul className="space-y-3">
              {download.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:justify-self-end">
            <h3 className="mb-3 text-base font-medium">Resources</h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
