import { useState } from "react";
import DiscoverAlbaniaLogo from "./Logo";
import Link from "next/link";
import { useSelector } from 'react-redux'
import { roleSelector } from '@/redux/slices/authSlice'
import { useContext } from "react";
import { AuthContext } from "@/pages/_app";
import { useDispatch } from 'react-redux'
import { removeAuth } from '@/redux/slices/authSlice'


const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Find tours", href: "/tours" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const role = useSelector(roleSelector)
  const dispatch = useDispatch()

  return (
    <header className="sticky top-0 z-50 bg-white mb-2">
      <nav className="mx-auto max-w-8xl xl:p-2 sm:px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <DiscoverAlbaniaLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className="sm:text-2xl lg:text-xl xl:text-2xl font-medium text-gray-700 hover:text-black transition"
              >
                {page.name}
              </Link>
            ))}
            {role !== "ADMIN" && (
              <Link
                href="/login"
                className="sm:text-2xl lg:text-xl xl:text-2xl font-medium text-gray-700 hover:text-black transition"
              >
                Log in
              </Link>
              )}
            {role === "ADMIN" && (
              <div
                onClick={() => dispatch(removeAuth())}
                className="sm:text-2xl lg:text-xl xl:text-2xl font-medium text-gray-700 hover:text-black transition">
                Log out
              </div>
            )}
            {role === "ADMIN" && (
              <Link
                href="/tour/new"
                className="rounded-md border px-4 py-2 sm:text-2xl lg:text-xl xl:text-2xl font-medium hover:bg-gray-50 transition"
              >
                Add Tours
              </Link>
            )}

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
          className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

            <Link
              href="/login"
              className={`sm:text-2xl lg:text-xl xl:text-2xl font-medium text-gray-700 hover:text-black transition ${open ? "rounded-lg px-3 py-2 text-base hover:bg-gray-100" : ""}`}
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
            {role === "ADMIN" && (
              <div
                onClick={() => {
                  dispatch(removeAuth());
                  setOpen(false);
                }}
                className={`sm:text-2xl lg:text-xl xl:text-2xl font-medium text-gray-700 hover:text-black transition ${open ? "rounded-lg px-3 py-2 text-base hover:bg-gray-100" : ""}`} >
                Log out
              </div>
            )}
            {role === "ADMIN" && (
              <Link
                href="/tour/new"
                className={`rounded-md border px-4 py-2 text-2xl font-medium hover:bg-gray-50 transition ${open ? " border-0 rounded-lg px-2 py-2 text-base hover:bg-gray-100" : ""}`}

                onClick={() => setOpen(false)}
              >
                Add Tours
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
