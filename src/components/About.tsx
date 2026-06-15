import Image from "next/image";
import { FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";
import img2 from "@/src/asstes/img2.svg";
import img3 from "@/src/asstes/img1.svg";
const values = [
  {
    icon: <FiZap size={20} color="#fff" />,
    grad: "linear-gradient(135deg,#3b4fd8,#2d2db0)",
    title: "Innovation",
    desc: "Pushing the boundaries of what's possible with neural networks to keep you ahead of the curve.",
    border: "#2d2db0",
  },
  {
    icon: <FiUsers size={20} color="#fff" />,
    grad: "linear-gradient(135deg,#f472b6,#ec4899)",
    title: "Accessibility",
    desc: "We believe in simple tools for complex problems. Technology that works for you, not against you.",
    border: "#ec4899",
  },
  {
    icon: <FiTrendingUp size={20} color="#fff" />,
    grad: "linear-gradient(135deg,#a78bfa,#7c3aed)",
    title: "Impact",
    desc: "We measure our success by the real growth and tangible success stories of the businesses we empower.",
    border: "#7c3aed",
  },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#fff" }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(180deg,#f0f2fb 0%,#fff 100%)", padding: "80px 0 60px", textAlign: "center" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 800, color: "#111827", lineHeight: 1.2, margin: "0 0 16px", maxWidth: 600 }}>
            Empowering Creativity with{" "}
            <span style={{ background: "linear-gradient(90deg,#7c3aed,#c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Intelligence.
            </span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 400, margin: 0, lineHeight: 1.75 }}>
            We build AI tools that help small businesses and creators grow their digital presence effortlessly.
          </p>
        </div>
      </section>

      {/* ── Our Purpose ── */}
      <section style={{ padding: "60px 0 72px", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="about-purpose">
            {/* Left: image */}
            <div style={{ borderRadius: 20, overflow: "hidden", flexShrink: 0 }}>
              <Image
                src={img2}
                alt="Our Purpose"
                width={420}
                height={340}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Right: text */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Our Purpose
              </span>
              <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 800, color: "#111827", lineHeight: 1.25, margin: 0 }}>
                To make high-end marketing technology accessible to everyone.
              </h2>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Nebula AI was born from the belief that advanced artificial intelligence shouldn't be reserved for massive corporations. We're democratizing the future of digital growth by distilling complex neural networks into elegant, intuitive tools for the modern creator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values that Drive Us ── */}
      <section style={{ padding: "60px 0 72px", backgroundColor: "#f7f8fc" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#111827", margin: "0 0 48px" }}>
            Values that Drive Us
          </h2>
          <div className="grid-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  padding: "28px 24px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  borderTop: `3px solid ${v.border}`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 12, background: v.grad, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#111827", margin: 0 }}>{v.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Founder ── */}
      <section style={{ padding: "72px 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: "#111827", margin: "0 0 36px" }}>
            Meet the Founder
          </h2>
          {/* Centered photo */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ width: 220, height: 280, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.10)", border: "3px solid #e0e3f5" }}>
                <Image
                  src={img3}
                  alt="Jo Williams — CEO & Founder"
                  width={220}
                  height={280}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#111827", fontSize: 15, margin: 0 }}>Jo Williams</p>
                <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "24px 0 72px", backgroundColor: "#fff" }}>
        <div className="container">
          <div style={{
            background: "linear-gradient(135deg,#2d2db0 0%,#7c3aed 55%,#c026d3 100%)",
            borderRadius: 24,
            padding: "60px 48px",
            textAlign: "center",
          }}>
            <h2 style={{ fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>
              Join the future of intelligence
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, margin: "0 auto 32px", lineHeight: 1.75, maxWidth: 380 }}>
              Experience the power of I-Create.AI and transform your digital workflow today.
            </p>
            <button
              className="btn-ghost"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.65)",
                padding: "13px 44px",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Try Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
