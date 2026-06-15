"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#fff", borderBottom: "1px solid #f3f4f6", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div className="container--header" style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>

        {/* Logo */}
        <Link href="/" style={{ color: "#2d2db0", fontWeight: 800, fontSize: 20, textDecoration: "none", letterSpacing: "-0.02em", flexShrink: 0 }}>
          I-Create.AI
        </Link>

        {/* Desktop nav */}
        <nav className="header-nav" style={{ flex: 1, justifyContent: "center" }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#2d2db0" : "#6b7280",
                  textDecoration: "none",
                  borderBottom: active ? "2px solid #2d2db0" : "2px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Log In (hidden on mobile) + Get Started (always visible) + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          {/* Log In — hidden on mobile via CSS */}
          <Link
            href="/"
            className="login-link"
            style={{ fontSize: 14, fontWeight: 500, color: "#374151", textDecoration: "none" }}
          >
            Log In
          </Link>

          {/* Get Started — always visible */}
          <Link
            href="/"
            className="btn-get-started"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              padding: "9px 22px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#2d2db0,#7c3aed)",
              whiteSpace: "nowrap",
            }}
          >
            Get Started
          </Link>

          {/* Hamburger — shown only on mobile via CSS */}
          <button
            className="header-mobile-menu"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#374151", padding: 4, lineHeight: 0 }}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div style={{ backgroundColor: "#fff", borderTop: "1px solid #f3f4f6", padding: "12px 24px 24px" }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
                style={{
                  display: "block",
                  fontSize: 16,
                  fontWeight: active ? 700 : 400,
                  color: active ? "#2d2db0" : "#374151",
                  textDecoration: "none",
                  padding: "13px 0",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Log In inside dropdown */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="mobile-nav-link"
            style={{
              display: "block",
              fontSize: 16,
              fontWeight: 400,
              color: "#374151",
              textDecoration: "none",
              padding: "13px 0",
            }}
          >
            Log In
          </Link>
        </div>
      )}
    </header>
  );
}
