import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f0f2f8", borderTop: "1px solid #e5e7eb", padding: "24px 0" }}>
      <div className="container--header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div>
          <p style={{ color: "#2d2db0", fontWeight: 700, fontSize: 16, margin: 0 }}>I-Create.AI</p>
          <p style={{ color: "#9ca3af", fontSize: 11, marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            © 2026 I-CREATE.AI . INTELLIGENCE REDEFINED.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Privacy Policy", "Terms of Service"].map((label) => (
            <Link key={label} href="#" className="footer-link" style={{ fontSize: 11, fontWeight: 500, color: "#9ca3af", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
