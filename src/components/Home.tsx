"use client";

import Image from "next/image";
import {
  FiCheck, FiZap, FiVideo, FiTarget, FiPackage, FiImage, FiTrendingUp,
  FiHelpCircle, FiAlertCircle, FiDollarSign, FiEye, FiBriefcase, FiTool,
} from "react-icons/fi";
import img1 from "@/src/asstes/img1.svg";
import img2 from "@/src/asstes/img2.svg";
import img3 from "@/src/asstes/img3.svg";
import diverseOwners from "@/src/asstes/Diverse owners using technology.svg";
import tabletAnalytics from "@/src/asstes/tablet screen analytics.svg";
import overlayFrame from "@/src/asstes/Overlay+Border+Shadow+OverlayBlur.svg";

const trustedLogos = ["Stratos", "Quantum", "Velocity", "Zenith", "Aether"];

const painPoints = [
  { icon: <FiHelpCircle size={20} color="#2d2db0" />, title: "Don't know what to post?", desc: "Staring at a blank screen while your engagement drops? Never run out of ideas again." },
  { icon: <FiAlertCircle size={20} color="#7c3aed" />, title: "No time to create content?", desc: "Between serving customers and managing staff, content creation often falls to the bottom of the list." },
  { icon: <FiDollarSign size={20} color="#c026d3" />, title: "Waste money on ads?", desc: 'Tired of "boosting" posts only to see zero return? Stop throwing money at non-performing ads.' },
  { icon: <FiEye size={20} color="#0891b2" />, title: "Don't know the competition?", desc: "Operating in the dark? You need to know what's working for others to win in your market." },
  { icon: <FiBriefcase size={20} color="#d97706" />, title: "Can't afford an agency?", desc: "Agencies charge thousands per month. Most small businesses simply don't have the budget." },
  { icon: <FiTool size={20} color="#059669" />, title: "Overwhelmed by tools?", desc: "Switching between five different apps just to post a photo is exhausting and inefficient." },
];

const solutionBullets = [
  "Professional content generation in seconds",
  "High-conversion ad copies and creative assets",
  "Predictive strategies based on market trends",
];

const businessCategories = [
  { label: "Food & Dining", sub: "Restaurants, food trucks, cafés, and bakeries." },
  { label: "Luxury & Wellness", sub: "Salons, spas, and wellness brands." },
  { label: "Trades & Services", sub: "Plumbers, cleaners, and landscapers." },
  { label: "Coaching", sub: "Coaches, consultants, and agents." },
  { label: "Retail & E-comm", sub: "E-commerce, Amazon sellers, and shops." },
];
const categoryImages = [img1, img2, img3, img1, img2];

const steps = [
  { num: 1, title: "Tell us about your business", desc: "Connect your website or upload your brand deck. I-Create learns your voice instantly." },
  { num: 2, title: "Get ready-made content", desc: "Review a complete feed of generated posts, stories, and videos customised for you." },
  { num: 3, title: "Post and grow", desc: "Publish directly through the dashboard and watch your engagement metrics climb." },
];

const testimonials = [
  { name: "Sarah Jenkins", role: "CMO, TechPeak", avatar: img1, quote: '"I-Create has cut our content production time by 80%. It\'s like having a creative agency in my pocket."' },
  { name: "David Chen", role: "Founder, Arena Social", avatar: img2, quote: '"The AI avatar feature is a game changer. We produce video announcements in minutes that look indistinguishable from real footage."' },
  { name: "Diana Rodriguez", role: "Creative Director, Brand", avatar: img3, quote: '"Finally, an AI that actually understands our brand voice. The consistency across platforms is incredible."' },
];

const card: React.CSSProperties = { backgroundColor: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.07)" };
const stepColors = ["#2d2db0", "#ec4899", "#7c3aed"];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff" }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(180deg,#f0f2fb 0%,#fff 100%)", padding: "80px 0 72px" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 48 }}>

            {/* Left */}
            <div>
              <span style={{ display: "inline-block", background: "#fff", border: "1px solid #e0e3f5", color: "#2d2db0", fontSize: 10, fontWeight: 700, padding: "5px 14px", borderRadius: 999, marginBottom: 20, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                All-in-One Marketing Platform
              </span>
              <h1 style={{ fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 800, color: "#111827", lineHeight: 1.13, margin: "0 0 18px" }}>
                Your Complete<br />Marketing Team in{" "}
                <span style={{ background: "linear-gradient(90deg,#2d2db0,#c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  One Platform
                </span>
              </h1>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, maxWidth: 440, margin: "0 0 28px" }}>
                Create content, generate ads, discover winning strategies, analyze competitors, and launch campaigns in minutes all from one powerful platform.
              </p>
              <button
                className="btn-primary"
                style={{ background: "linear-gradient(135deg,#2d2db0,#7c3aed)", color: "#fff", border: "none", padding: "13px 36px", borderRadius: 999, fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
              >
                Start Creating
              </button>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex" }}>
                  {[img1, img2, img3].map((src, i) => (
                    <div key={i} style={{ marginLeft: i === 0 ? 0 : -10, width: 34, height: 34, borderRadius: "50%", border: "2px solid #fff", overflow: "hidden", position: "relative", zIndex: 3 - i }}>
                      <Image src={src} alt="user" width={34} height={34} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                  ))}
                </div>
                <p style={{ color: "#9ca3af", fontSize: 12, margin: 0 }}>Trusted by 10,000+ businesses worldwide</p>
              </div>
            </div>

            {/* Right: single image + floating card */}
            <div style={{ position: "relative", paddingBottom: 32, paddingRight: 32 }}>
              <div style={{ borderRadius: 20, overflow: "hidden", border: "4px solid #fff", boxShadow: "0 12px 48px rgba(0,0,0,0.13)" }}>
                <Image src={diverseOwners} alt="Diverse business owners using technology" width={620} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {/* Floating card */}
              <div style={{ position: "absolute", bottom: 0, right: 0, background: "#fff", borderRadius: 14, padding: "12px 16px", boxShadow: "0 6px 24px rgba(0,0,0,0.13)", maxWidth: 230, zIndex: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(135deg,#2d2db0,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.2 2.2L8 2.8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#111827", margin: 0 }}>Empowering Local Brands</p>
                </div>
                <p style={{ fontSize: 11, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>Helping diverse business owners scale with enterprise-grade intelligence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section style={{ padding: "72px 0 64px", backgroundColor: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>
              Marketing Shouldn&apos;t Be This Hard
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
              Running a business is tough enough. Don&apos;t let marketing hurdles hold you back from growth.
            </p>
          </div>
          <div className="grid-3">
            {painPoints.map((p) => (
              <div key={p.title} className="card-hover pain-card" style={{ backgroundColor: "#f9fafb", borderRadius: 14, padding: "28px 24px", border: "1px solid transparent" }}>
                <div style={{ marginBottom: 14 }}>{p.icon}</div>
                <h3 style={{ fontWeight: 800, color: "#111827", fontSize: 20, margin: "0 0 10px", lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile App CTA ── */}
      <section style={{ background: "#eef0f8", padding: "56px 0", textAlign: "center" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ color: "#2d2db0", fontSize: 26, fontWeight: 700, margin: "0 0 10px" }}>
            Experience I-Create.AI on the go
          </h2>
          <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 380, margin: "0 0 24px", lineHeight: 1.7 }}>
            Download our mobile app to manage your brand and generate content anytime, anywhere. Available now on all platforms.
          </p>
          <div className="store-row">
            <button className="btn-store" style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 12, cursor: "pointer", minWidth: 150 }}>
              <svg viewBox="0 0 24 24" width={22} height={22} fill="white" style={{ flexShrink: 0 }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "#aaa", lineHeight: 1 }}>Download on the</div>
                <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
              </div>
            </button>
            <button className="btn-store" style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: "#000", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 12, cursor: "pointer", minWidth: 150 }}>
              <svg viewBox="0 0 24 24" width={22} height={22} style={{ flexShrink: 0 }}>
                <path d="M3.18 23.76c.3.17.64.24.99.2L15.34 12 11.68 8.34 3.18 23.76z" fill="#EA4335" />
                <path d="M20.96 10.22l-2.79-1.6-4.03 3.58 4.03 4.02 2.8-1.6c.8-.46.8-1.95-.01-2.4z" fill="#FBBC04" />
                <path d="M3.18.24C2.83.2 2.49.27 2.19.44L13.83 12 3.18 23.76c.3.04.64-.03.99-.2L20.24 13.8c.8-.46.8-1.54 0-2L4.17.44C3.82.27 3.53.21 3.18.24z" fill="#4285F4" />
                <path d="M2.19.44C1.6.77 1.2 1.43 1.2 2.28v19.44c0 .85.4 1.51.99 1.84L13.83 12 2.19.44z" fill="#34A853" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: "#aaa", lineHeight: 1 }}>GET IT ON</div>
                <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 56 }}>
            <div>
              <span style={{ display: "inline-block", background: "#f0f2fb", color: "#2d2db0", fontSize: 10, fontWeight: 700, padding: "5px 14px", borderRadius: 999, marginBottom: 18, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                The Solution
              </span>
              <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, color: "#111827", lineHeight: 1.2, margin: "0 0 14px" }}>
                I-Create Does the Marketing Work for You
              </h2>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: "0 0 24px" }}>
                I-Create helps business owners create content, generate ads, analyze competitors, discover winning strategies, and launch campaigns from one easy platform.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {solutionBullets.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", backgroundColor: "#2d2db0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <FiCheck size={11} color="#fff" strokeWidth={3} />
                    </div>
                    <p style={{ color: "#374151", fontSize: 13, fontWeight: 500, margin: 0 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.10)", minHeight: 300 }}>
              <Image src={overlayFrame} alt="Diverse business owners using technology" width={600} height={420} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Competitor Intelligence ── */}
      <section style={{ padding: "60px 0 80px", backgroundColor: "#eceaf7" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>

            {/* Left: card */}
            <div style={{ backgroundColor: "#fff", borderRadius: 20, padding: "32px 28px", border: "1px solid #e4e6f2", boxShadow: "0 2px 16px rgba(45,45,176,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#3b4fd8,#2d2db0)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FiTrendingUp size={18} color="#fff" />
                </div>
                <p style={{ fontWeight: 700, fontSize: 15, color: "#111827", margin: 0 }}>Competitor Intelligence</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <p style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, margin: 0 }}>
                  Top Competitor Performance
                </p>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#22c55e", margin: 0 }}>+24% Weekly Reach</p>
              </div>
              <div style={{ width: "100%", height: 12, backgroundColor: "#e9eaf5", borderRadius: 999, marginBottom: 16, overflow: "hidden" }}>
                <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg,#2d2db0,#7c3aed)", borderRadius: 999 }} />
              </div>

              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.7, margin: "0 0 16px" }}>
                Real-time alerts on rival campaigns. See what works for them and apply those winning patterns to your own brand instantly.
              </p>
              <button style={{ background: "none", border: "none", color: "#2d2db0", fontSize: 13, fontWeight: 700, cursor: "pointer", padding: 0 }}>
                Start Spying (Legally) →
              </button>
            </div>

            {/* Right: text */}
            <div>
              <span style={{ display: "inline-block", background: "#f0f2fb", color: "#2d2db0", fontSize: 10, fontWeight: 700, padding: "5px 14px", borderRadius: 999, marginBottom: 18, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Gain the Edge
              </span>
              <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontWeight: 800, color: "#111827", lineHeight: 1.15, margin: "0 0 16px" }}>
                Stop Guessing,<br />Start Winning
              </h2>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Our engine doesn&apos;t just create content; it monitors the market pulse. Understand the exact strategies your competitors use to attract customers.
              </p>
            </div>

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

          <div className="tools-row1" style={{ marginBottom: 16 }}>
            <div className="card-hover" style={{ ...card, display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 10, padding: "32px 28px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2d2db0", textTransform: "uppercase", letterSpacing: "0.12em" }}>Smart Analysis</span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#111827", margin: 0, lineHeight: 1.2 }}>Brand Scanner</h3>
              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>Point us to your website and our AI extracts your brand voice, colors, and style instantly to ensure consistency.</p>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", backgroundColor: "#2a3355", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
              <Image src={tabletAnalytics} alt="Analytics dashboard" width={400} height={300} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="card-hover" style={{ ...card, display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 10, padding: "32px 28px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#f472b6,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FiZap size={22} color="#fff" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#111827", margin: 0 }}>Content Generation</h3>
              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>One-click magic for social, blogs, and ad copy.</p>
            </div>
          </div>

          <div className="tools-row2" style={{ marginBottom: 16 }}>
            {[
              { icon: <FiTarget size={20} color="#fff" />, grad: "linear-gradient(135deg,#3b4fd8,#2d2db0)", title: "Competitor Intel", desc: "Real-time alerts on what's working for others in your industry." },
              { icon: <FiVideo size={20} color="#fff" />, grad: "linear-gradient(135deg,#f9a8d4,#ec4899)", title: "AI Avatar Videos", desc: "Create professional video content without ever stepping in front of a camera." },
              { icon: <FiTarget size={20} color="#fff" />, grad: "linear-gradient(135deg,#a78bfa,#7c3aed)", title: "Strategy Engine", desc: "Let AI build your growth roadmap based on your goals." },
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

          <div className="tools-row3">
            <div className="card-hover" style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "28px 28px" }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#111827", margin: "0 0 8px" }}>Brand Kit Generator</h3>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>Auto-generated logos, fonts, and assets in minutes.</p>
              </div>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#f9a8d4,#ec4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FiPackage size={22} color="#fff" />
              </div>
            </div>
            <div style={{ background: "linear-gradient(135deg,#3b3db8 0%,#7c3aed 55%,#c026d3 100%)", borderRadius: 20, padding: "28px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#fff", margin: "0 0 8px" }}>Advanced Creation</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.75, margin: 0 }}>Photorealistic images and cinematic clips from simple text prompts.</p>
              </div>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FiImage size={26} color="#fff" />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
            <div style={{ backgroundColor: "#fff", borderRadius: 999, padding: "8px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.10)", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Content Generated Successfully</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Categories ── */}
      <section style={{ padding: "80px 0 56px", backgroundColor: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 800, color: "#111827", margin: "0 0 12px" }}>
              Built for Product-Based and Service-Based Businesses
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Whether you sell a tangible product or a specialized service, I-Create is your unfair advantage.
            </p>
          </div>
          <div className="categories-row">
            {businessCategories.map((cat, i) => (
              <div key={cat.label} className="card-hover" style={{ borderRadius: 14, overflow: "hidden", cursor: "pointer", position: "relative", height: 140 }}>
                <Image src={categoryImages[i]} alt={cat.label} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 100%)", display: "flex", alignItems: "flex-end", padding: "14px" }}>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: 13, margin: 0 }}>{cat.label}</p>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, margin: "3px 0 0", lineHeight: 1.4 }}>{cat.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted Logos ── */}
      <section style={{ padding: "24px 0 40px", borderTop: "1px solid #f3f4f6", backgroundColor: "#fff" }}>
        <div className="container">
          <p style={{ textAlign: "center", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 18 }}>
            Empowering Brands at the Speed of Thought
          </p>
          <div className="logos-row">
            {trustedLogos.map((name) => (
              <span key={name} style={{ fontSize: 14, fontWeight: 800, color: "#b0b5c8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scale your brand ── */}
      <section style={{ padding: "72px 0 80px", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 56 }}>

            {/* Image left */}
            <div>
              <div className="card-hover" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.13)" }}>
                <Image src={tabletAnalytics} alt="Dashboard analytics preview" width={600} height={420} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            {/* Steps right */}
            <div>
              <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#111827", lineHeight: 1.15, margin: "0 0 32px" }}>
                Scale your brand in three simple steps
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {steps.map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: stepColors[step.num - 1], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 800, flexShrink: 0, marginTop: 2 }}>
                      {step.num}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: "#111827", fontSize: 15, margin: "0 0 4px" }}>{step.title}</p>
                      <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: "72px 0", backgroundColor: "#f0f2f8" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: "#111827", margin: "0 0 44px" }}>
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
            <h2 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 900, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.01em" }}>
              Ready to Stop Guessing and Start Growing?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, margin: "0 auto 32px", lineHeight: 1.75, maxWidth: 460 }}>
              Start creating professional content, ads, videos, and marketing campaigns that help your business attract more customers.
            </p>
            <button
              className="btn-ghost"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "2px solid rgba(255,255,255,0.65)", padding: "14px 52px", borderRadius: 999, fontSize: 15, fontWeight: 700, cursor: "pointer" }}
            >
              Start Creating Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
