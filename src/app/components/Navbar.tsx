"use client";

import { useState, useEffect, type FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {}

const NAV_LINKS = [
  { label: "SourceView Bible", href: "/sourceview-bible" },
  { label: "Together", href: "/sourceview-together" },
  { label: "Web Reader", href: "/web-reader" },
  { label: "SphereView", href: "/sphereview" },
  { label: "VerbView", href: "/verbview" },
  { label: "CommandView", href: "/commandview" },
] as const;

const Navbar: FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        padding: scrolled ? "0.6rem 2.5rem" : "1rem 2.5rem",
        background: "rgba(254,254,254,0.8)",
        backdropFilter: "blur(30px) saturate(1.5)",
        WebkitBackdropFilter: "blur(30px) saturate(1.5)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
        boxShadow: scrolled
          ? "0 1px 12px rgba(0,0,0,0.06)"
          : "none",
      }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/sourceview-logo.jpg"
            alt="SourceView"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span
            className="font-serif tracking-tight"
            style={{ fontSize: "1.2rem" }}
          >
            SourceView
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg transition-colors duration-200 hover:text-[var(--ink)] hover:bg-black/[0.03]"
              style={{
                color: "var(--ink3)",
                fontSize: "0.76rem",
                fontWeight: 400,
                padding: "0.4rem 0.8rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-5 h-[1.5px] bg-[var(--ink)] rounded-full transition-all duration-300 origin-center"
              style={
                mobileOpen
                  ? { transform: "translateY(3.25px) rotate(45deg)" }
                  : undefined
              }
            />
            <span
              className="block w-5 h-[1.5px] bg-[var(--ink)] rounded-full transition-all duration-300"
              style={mobileOpen ? { opacity: 0 } : undefined}
            />
            <span
              className="block w-5 h-[1.5px] bg-[var(--ink)] rounded-full transition-all duration-300 origin-center"
              style={
                mobileOpen
                  ? { transform: "translateY(-3.25px) rotate(-45deg)" }
                  : undefined
              }
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "420px" : "0",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col gap-1 pt-4 pb-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg transition-colors duration-200 hover:text-[var(--ink)] hover:bg-black/[0.03]"
              style={{
                color: "var(--ink3)",
                fontSize: "0.85rem",
                fontWeight: 400,
                padding: "0.6rem 0.8rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
