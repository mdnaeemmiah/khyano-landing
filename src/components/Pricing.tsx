"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    desc: "Core features for beginners.",
    price: "$0",
    period: "/mo",
    features: [
      "Basic analytics dashboard",
      "Up to 5 smart automations",
      "Community support access",
    ],
    popular: false,
    checkColor: "#2d2db0",
  },
  {
    name: "Professional",
    desc: "Best for growing brands.",
    price: "$29",
    period: "/mo",
    features: [
      "Advanced AI insights",
      "Unlimited automations",
      "Priority email support",
      "Custom reporting tools",
    ],
    popular: true,
    checkColor: "#ec4899",
  },
  {
    name: "Business",
    desc: "For small teams and busy shops.",
    price: "$79",
    period: "/mo",
    features: [
      "Team collaboration (5 seats)",
      "Full API access",
      "24/7 Priority support",
      "Data export capabilities",
    ],
    popular: false,
    checkColor: "#2d2db0",
  },
  {
    name: "Agency",
    desc: "Full power for multiple brands.",
    price: "$199",
    period: "/mo",
    features: [
      "Unlimited brand accounts",
      "White-label reports",
      "Dedicated account manager",
      "Custom model training",
    ],
    popular: false,
    checkColor: "#2d2db0",
  },
];

export default function Pricing() {
  // Default selected = "Professional" (index 1)
  const [selected, setSelected] = useState<string>("Professional");

  return (
    <div style={{ background: "linear-gradient(180deg,#f0f2fb 0%,#fff 40%)", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <section style={{ padding: "80px 0 48px", textAlign: "center" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{
            display: "inline-block", backgroundColor: "#fff",
            border: "1px solid #e0e3f5", color: "#2d2db0",
            fontSize: 11, fontWeight: 700, padding: "6px 18px", borderRadius: 999,
            marginBottom: 24, letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            Plans &amp; Pricing
          </span>
          <h1 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, color: "#111827", lineHeight: 1.15, margin: "0 0 16px" }}>
            Simple, Transparent{" "}
            <span style={{ background: "linear-gradient(90deg,#2d2db0,#c026d3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Pricing
            </span>
          </h1>
          <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 420, margin: 0, lineHeight: 1.75 }}>
            Choose the plan that fits your growth goals. Scale your intelligence without the complexity.
          </p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container">
          {/*
            align-items: stretch  → all cards same height in each row
            The grid class is in globals.css (.grid-4)
          */}
          <div className="grid-4" style={{ alignItems: "stretch" }}>
            {plans.map((plan) => {
              const isSelected = selected === plan.name;
              const isPopular  = plan.popular;

              return (
                <div
                  key={plan.name}
                  onClick={() => setSelected(plan.name)}
                  style={{
                    position: "relative",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    border: isSelected
                      ? "2px solid #2d2db0"
                      : "1.5px solid #e5e7eb",
                    padding: "32px 24px",
                    boxShadow: isSelected
                      ? "0 8px 32px rgba(45,45,176,0.18)"
                      : "0 1px 6px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    cursor: "pointer",
                    transition: "border 0.18s, box-shadow 0.18s, transform 0.18s",
                    transform: isSelected ? "translateY(-4px)" : "translateY(0)",
                    /* stretch fills the grid row height */
                    height: "100%",
                  }}
                >
                  {/* Most Popular badge */}
                  {isPopular && (
                    <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)" }}>
                      <span style={{
                        background: "linear-gradient(135deg,#2d2db0,#7c3aed)",
                        color: "#fff", fontSize: 10, fontWeight: 800,
                        padding: "5px 16px", borderRadius: 999,
                        whiteSpace: "nowrap", letterSpacing: "0.08em",
                      }}>
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Selected tick */}
                  {isSelected && (
                    <div style={{
                      position: "absolute", top: 14, right: 14,
                      width: 22, height: 22, borderRadius: "50%",
                      background: "linear-gradient(135deg,#2d2db0,#7c3aed)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  {/* Plan name + desc */}
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: "0 0 6px" }}>
                      {plan.name}
                    </h3>
                    <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>{plan.desc}</p>
                  </div>

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
                    <span style={{
                      fontSize: 40, fontWeight: 800, lineHeight: 1,
                      color: isSelected ? "#7c3aed" : "#111827",
                    }}>
                      {plan.price}
                    </span>
                    <span style={{ color: "#9ca3af", fontSize: 13, marginBottom: 4 }}>{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    {plan.features.map((feat) => (
                      <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <FiCheckCircle
                          size={15}
                          color={isSelected ? plan.checkColor : "#9ca3af"}
                          style={{ flexShrink: 0, marginTop: 2 }}
                        />
                        <span style={{ color: "#4b5563", fontSize: 13 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <div style={{ marginTop: "auto" }}>
                    {isSelected ? (
                      <button
                        className="btn-plan"
                        style={{
                          width: "100%", padding: "12px 0", borderRadius: 12,
                          border: "none",
                          background: "linear-gradient(135deg,#2d2db0,#c026d3)",
                          color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer",
                        }}
                      >
                        Choose Plan
                      </button>
                    ) : (
                      <button
                        className="btn-plan btn-outline"
                        style={{
                          width: "100%", padding: "12px 0", borderRadius: 12,
                          border: "1.5px solid #e5e7eb",
                          backgroundColor: "#fff", color: "#2d2db0",
                          fontSize: 14, fontWeight: 600, cursor: "pointer",
                        }}
                      >
                        Choose Plan
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
