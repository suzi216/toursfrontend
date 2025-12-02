import { useState } from "react";
import DiscoverAlbaniaLogo from "./Logo";

const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Find tours", href: "/tours" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="mx-auto max-w-8xl p-3 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <DiscoverAlbaniaLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="sm:text-2xl font-medium text-gray-700 hover:text-black transition"
              >
                {page.name}
              </a>
            ))}
            <a
              href="/tour/new"
              className="rounded-md border px-4 py-2 text-2xl font-medium hover:bg-gray-50 transition"
            >
              Add Tours
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-6 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 py-4">
            {navigation.pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="rounded-lg px-3 py-2 text-base hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {page.name}
              </a>
            ))}
            <a
              href="/tour/new"
              className="rounded-lg border px-3 py-2 text-base font-medium"
              onClick={() => setOpen(false)}
            >
              Add Tours
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
