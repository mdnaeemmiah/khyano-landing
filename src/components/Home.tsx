"use client";

import Image from "next/image";
import { FiMapPin, FiClock, FiTrendingUp, FiZap, FiVideo, FiTarget, FiPackage, FiImage } from "react-icons/fi";
import img1 from "@/src/asstes/img1.svg";
import img2 from "@/src/asstes/img2.svg";
import img3 from "@/src/asstes/img3.svg";

const trustedLogos = ["Stratos", "Quantum", "Velocity", "Luminary", "ApexAI"];

const features = [
  { icon: <FiMapPin size={22} color="#2d2db0" />, title: "Discover What Works", desc: "Analyze competitors, uncover winning strategies, and learn what's driving growth in your market." },
  { icon: <FiClock size={22} color="#c026d3" />, title: "Create Marketing in Minutes", desc: "Generate professional ads, social media content, images, videos, and campaigns from one platform." },
  { icon: <FiTrendingUp size={22} color="#7c3aed" />, title: "Grow With Confidence", desc: "Turn insights into action with tools designed to help you attract more customers and grow your business." },
];

const steps = [
  { num: 1, title: "Tell us about your business", desc: "Connect your socials and website. Our AI builds a custom profile of your brand identity and audience." },
  { num: 2, title: "Get ready-made content", desc: "Every morning, receive a batch of optimized content across all your active channels, ready to be reviewed." },
  { num: 3, title: "Post and grow", desc: "Hit approve and watch your engagement grow. Our engine learns what performs best and improves over time." },
];

const testimonials = [
  { name: "Marcus Chen", role: "Growth Lead @ Stratos", avatar: img1, quote: '"NebulaAI cut our content creation time by 80%. It\'s like having a full creative agency in our pocket, but for a fraction of the cost."' },
  { name: "Sarah Jenkins", role: "Independent Creator", avatar: img2, quote: '"The Brand Scanner tool is absolute magic. It nailed my voice on the first try. I\'ve never seen AI understand branding so deeply."' },
  { name: "David Miller", role: "Founder, Quantum Labs", avatar: img3, quote: '"Finally, an AI tool that doesn\'t feel like a toy. NebulaAI creates content that actually converts and builds real community."' },
];

const card: React.CSSProperties = { backgroundColor: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.07)" };
const stepColors = ["#2d2db0", "#ec4899", "#7c3aed"];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff" }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(180deg,#f0f2fb 0%,#fff 100%)", padding: "96px 0 80px", textAlign: "center" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ display: "inline-block", background: "#fff", border: "1px solid #e0e3f5", color: "#2d2db0", fontSize: 11, fontWeight: 700, padding: "6px 18px", borderRadius: 999, marginBottom: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            All-in-One Marketing Platform
          </span>
          <h1 style={{ fontSize: "clamp(30px,5vw,52px)", fontWeight: 800, color: "#111827", lineHeight: 1.15, margin: "0 0 20px", maxWidth: 640 }}>
            Your Complete Marketing Team in{" "}
            <span style={{ background: "linear-gradient(90deg,#2d2db0,#c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One Platform
            </span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: "0 0 32px" }}>
            Create content, generate ads, discover winning strategies, analyze competitors, and launch campaigns in minutes all from one powerful platform.
          </p>
          <button
            className="btn-primary"
            style={{ background: "linear-gradient(135deg,#2d2db0,#7c3aed)", color: "#fff", border: "none", padding: "14px 40px", borderRadius: 999, fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
          >
            Start Creating
          </button>
          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex" }}>
              {[img1, img2, img3].map((src, i) => (
                <div key={i} style={{ marginLeft: i === 0 ? 0 : -10, width: 38, height: 38, borderRadius: "50%", border: "2px solid #fff", overflow: "hidden", zIndex: 3 - i, position: "relative" }}>
                  <Image src={src} alt="user" width={38} height={38} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
              ))}
            </div>
            <p style={{ color: "#9ca3af", fontSize: 12 }}>Trusted by businesses worldwide to simplify marketing and accelerate growth.</p>
          </div>
        </div>
      </section>

      {/* ── Trusted logos ── */}
      <section style={{ padding: "28px 0", borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6", backgroundColor: "#fff" }}>
        <div className="container">
<div className="logos-row">
  {trustedLogos.map((name) => (
    <span
      key={name}
      className="text-sm md:text-base lg:text-lg font-normal text-gray-400"
    >
      {name}
    </span>
  ))}
</div>
        </div>
      </section>

      {/* ── Mobile app CTA ── */}
      <section style={{ background: "#eef0f8", padding: "64px 0", textAlign: "center" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ color: "#2d2db0", fontSize: 28, fontWeight: 700, margin: "0 0 12px" }}>
            Experience I-Create.AI on the go
          </h2>
          <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 420, margin: "0 0 28px", lineHeight: 1.7 }}>
            Download our mobile app to manage your brand and generate content anytime, anywhere. Available now on all platforms.
          </p>
          <div className="store-row">
            <button className="btn-store" style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 12, cursor: "pointer", minWidth: 158 }}>
              <svg viewBox="0 0 24 24" width={24} height={24} fill="white" style={{ flexShrink: 0 }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "#aaa", lineHeight: 1 }}>Download on the</div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
              </div>
            </button>
            <button className="btn-store" style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 12, cursor: "pointer", minWidth: 158 }}>
              <svg viewBox="0 0 24 24" width={24} height={24} style={{ flexShrink: 0 }}>
                <path d="M3.18 23.76c.3.17.64.24.99.2L15.34 12 11.68 8.34 3.18 23.76z" fill="#EA4335" />
                <path d="M20.96 10.22l-2.79-1.6-4.03 3.58 4.03 4.02 2.8-1.6c.8-.46.8-1.95-.01-2.4z" fill="#FBBC04" />
                <path d="M3.18.24C2.83.2 2.49.27 2.19.44L13.83 12 3.18 23.76c.3.04.64-.03.99-.2L20.24 13.8c.8-.46.8-1.54 0-2L4.17.44C3.82.27 3.53.21 3.18.24z" fill="#4285F4" />
                <path d="M2.19.44C1.6.77 1.2 1.43 1.2 2.28v19.44c0 .85.4 1.51.99 1.84L13.83 12 2.19.44z" fill="#34A853" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "#aaa", lineHeight: 1 }}>GET IT ON</div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "80px 0 60px", backgroundColor: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,34px)", fontWeight: 800, color: "#111827", margin: "0 0 16px" }}>
              Your Complete Marketing Team in One Platform
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
              I-Create helps you create professional ads, content, videos, and complete marketing campaigns while discovering the strategies that drive results in your industry.
            </p>
          </div>
          <div className="grid-3">
            {features.map((f) => (
              <div key={f.title} className="card-hover" style={{ backgroundColor: "#fff", border: "1px solid #e9eaf0", borderRadius: 16, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#e8eaf8,#ede8fb)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 700, color: "#111827", fontSize: 15, margin: 0 }}>{f.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave divider ── */}
      <div style={{ overflow: "hidden", lineHeight: 0, backgroundColor: "#fff" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="#eceaf7" />
        </svg>
      </div>

      {/* ── AI Studio Tools ── */}
      <section style={{ padding: "40px 0 80px", backgroundColor: "#eceaf7", position: "relative" }}>
        <div className="container">

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, margin: "0 0 12px", color: "#111827" }}>
              AI Studio{" "}
              <span style={{ background: "linear-gradient(90deg,#7c3aed,#c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Tools
              </span>
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 400, margin: "0 auto", lineHeight: 1.7 }}>
              A comprehensive suite of powerful tools designed for modern digital dominance.
            </p>
          </div>

          {/* ── Row 1: Brand Scanner left + chart center + Content Gen right ── */}
          <div className="tools-row1" style={{ marginBottom: 16 }}>
            {/* Left: Brand Scanner text */}
            <div className="card-hover" style={{ ...card, display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 10, padding: "32px 28px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2d2db0", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Smart Analysis
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#111827", margin: 0, lineHeight: 1.2 }}>
                Brand Scanner
              </h3>
              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                Point us to your website and our AI extracts your brand voice, colors, and style instantly to ensure consistency.
              </p>
            </div>

            {/* Center: chart image in device frame */}
            <div style={{ borderRadius: 20, overflow: "hidden", backgroundColor: "#2a3355", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
              <Image
                src={img2}
                alt="Brand Scanner chart"
                width={400}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Right: Content Generation */}
            <div className="card-hover" style={{ ...card, display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 10, padding: "32px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#f472b6,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FiZap size={22} color="#fff" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#111827", margin: 0 }}>Content Generation</h3>
              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                One-click magic for social, blogs, and ad copy.
              </p>
            </div>
          </div>

          {/* ── Row 2: 3 equal cards ── */}
          <div className="tools-row2" style={{ marginBottom: 16 }}>
            {[
              { icon: <FiTarget size={20} color="#fff" />, grad: "linear-gradient(135deg,#3b4fd8,#2d2db0)", title: "Competitor Intel",   desc: "Real-time alerts on what's working for others in your industry." },
              { icon: <FiVideo  size={20} color="#fff" />, grad: "linear-gradient(135deg,#f9a8d4,#ec4899)", title: "AI Avatar Videos",  desc: "Create professional video content without ever stepping in front of a camera." },
              { icon: <FiTarget size={20} color="#fff" />, grad: "linear-gradient(135deg,#a78bfa,#7c3aed)", title: "Strategy Engine",   desc: "Let AI build your growth roadmap based on your goals." },
            ].map((c) => (
              <div key={c.title} className="card-hover" style={{ ...card, padding: "28px 24px" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: c.grad, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {c.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#111827", margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* ── Row 3: Brand Kit (left) + Advanced Creation (right, gradient) ── */}
          <div className="tools-row3">
            {/* Brand Kit: text left, palette icon right */}
            <div className="card-hover" style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "28px 28px" }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#111827", margin: "0 0 8px" }}>Brand Kit Generator</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                  Auto-generated logos, fonts, and assets in minutes.
                </p>
              </div>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#f9a8d4,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FiPackage size={22} color="#fff" />
              </div>
            </div>

            {/* Advanced Creation: gradient, text left, icon box right */}
            <div style={{ background: "linear-gradient(135deg,#3b3db8 0%,#7c3aed 55%,#c026d3 100%)", borderRadius: 20, padding: "28px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#fff", margin: "0 0 8px" }}>Advanced Creation</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                  Photorealistic images and cinematic clips from simple text prompts.
                </p>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FiImage size={26} color="#fff" />
              </div>
            </div>
          </div>

          {/* "Content Generated Successfully" badge — bottom right */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
            <div style={{ backgroundColor: "#fff", borderRadius: 999, padding: "8px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.10)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Content Generated Successfully</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Scale your brand ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ fontSize: "clamp(30px,4vw,42px)", fontWeight: 900, color: "#111827", lineHeight: 1.15, margin: "0 0 36px" }}>
                Scale your brand in three simple steps
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {steps.map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", backgroundColor: stepColors[step.num - 1], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 800, flexShrink: 0, marginTop: 2 }}>
                      {step.num}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: "#111827", fontSize: 15, margin: "0 0 5px" }}>{step.title}</p>
                      <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card-hover" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.13)" }}>
                <Image src={img3} alt="Dashboard preview" width={600} height={420} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#f0f2f8" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: "#111827", margin: "0 0 48px" }}>
            Loved by world-class creators
          </h2>
          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover" style={{ backgroundColor: "#fff", borderRadius: 16, padding: "24px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #e0e3f5" }}>
                    <Image src={t.avatar} alt={t.name} width={44} height={44} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#111827", fontSize: 14, margin: 0 }}>{t.name}</p>
                    <p style={{ color: "#9ca3af", fontSize: 12, margin: 0 }}>{t.role}</p>
                  </div>
                </div>
                <p style={{ color: "#4b5563", fontSize: 13, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "48px 0 64px", backgroundColor: "#fff" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg,#2d2db0 0%,#7c3aed 55%,#c026d3 100%)", borderRadius: 28, padding: "64px 48px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "#fff", margin: "0 0 14px", letterSpacing: "-0.01em" }}>
              Start creating today
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, margin: "0 auto 36px", lineHeight: 1.75, maxWidth: 400 }}>
              Join 10,000+ businesses using I-Create.AI to dominate their market with intelligence-driven content.
            </p>
            <button
              className="btn-ghost"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "2px solid rgba(255,255,255,0.65)", padding: "14px 52px", borderRadius: 999, fontSize: 15, fontWeight: 700, cursor: "pointer" }}
            >
              Try Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
