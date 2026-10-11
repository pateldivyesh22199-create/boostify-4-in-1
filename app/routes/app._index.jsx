import React, { useState } from "react";

export default function BoostifyPremiumDashboard() {
  // ઇન્ટરેક્ટિવ ટૉગલ્સ
  const [stickyActive, setStickyActive] = useState(true);
  const [shippingActive, setShippingActive] = useState(true);
  const [whatsappActive, setWhatsappActive] = useState(true);
  const [currencyActive, setCurrencyActive] = useState(true);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#070B14",
      color: "#F1F5F9",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: "32px 24px",
      boxSizing: "border-box"
    }}>
      <style>{`
        .glass-card {
          background: linear-gradient(135deg, rgba(22, 31, 49, 0.75) 0%, rgba(13, 19, 33, 0.85) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          border-color: rgba(56, 189, 248, 0.25);
          box-shadow: 0 14px 40px -5px rgba(0, 0, 0, 0.7);
        }
        .glow-btn {
          background: linear-gradient(135deg, #0284C7 0%, #2563EB 100%);
          color: #FFFFFF;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .glow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(37, 99, 235, 0.55);
        }
        .toggle-switch {
          position: relative;
          width: 44px;
          height: 24px;
          background: #334155;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .toggle-switch.on {
          background: #10B981;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
        }
        .toggle-dot {
          position: absolute;
          top: 3px;
          left: 4px;
          width: 18px;
          height: 18px;
          background: #FFFFFF;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
        .toggle-switch.on .toggle-dot {
          transform: translateX(18px);
        }
      `}</style>

      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span style={{ fontSize: "28px" }}>🚀</span>
              <h1 style={{
                fontSize: "26px",
                fontWeight: "900",
                margin: 0,
                letterSpacing: "-0.5px",
                background: "linear-gradient(90deg, #38BDF8 0%, #818CF8 50%, #C084FC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Boostify 4-in-1 Suite
              </h1>
              <span style={{
                background: "rgba(16, 185, 129, 0.15)",
                color: "#34D399",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "3px 10px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.5px"
              }}>
                ● ZERO-LAG ENGINE ACTIVE
              </span>
            </div>
            <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8" }}>
              Shopify 2.0 Native Theme Extension Architecture • Store Speed Impact: 0.0ms
            </p>
          </div>

          <a 
            href="shopify:admin/themes/current/editor?context=apps" 
            target="_blank" 
            rel="noreferrer"
            className="glow-btn"
          >
            Open Theme Customizer ➔
          </a>
        </div>

        {/* 4 Live Telemetry Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "28px" }}>
          
          <div className="glass-card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Estimated Conversion Lift
            </div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#34D399", margin: "8px 0 4px" }}>
              +31.4%
            </div>
            <div style={{ fontSize: "12px", color: "#64748B" }}>Driven by Sticky Cart & Shipping Goal</div>
          </div>

          <div className="glass-card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Google Lighthouse Score
            </div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#38BDF8", margin: "8px 0 4px" }}>
              99 / 100
            </div>
            <div style={{ fontSize: "12px", color: "#64748B" }}>Vanilla JS footprint under 15KB</div>
          </div>

          <div className="glass-card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Active Modules
            </div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#A855F7", margin: "8px 0 4px" }}>
              4 of 4
            </div>
            <div style={{ fontSize: "12px", color: "#64748B" }}>Cart, Shipping, WhatsApp, Currency</div>
          </div>

          <div className="glass-card" style={{ padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Monthly App Savings
            </div>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#F59E0B", margin: "8px 0 4px" }}>
              $25.01 /mo
            </div>
            <div style={{ fontSize: "12px", color: "#64748B" }}>Replaced 4 apps ($32 vs $6.99)</div>
          </div>

        </div>

        {/* 2-Column Split: Modules & Plan Details */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", alignItems: "start" }}>

          {/* Left Column: 4 Modules Control Center */}
          <div className="glass-card" style={{ padding: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <h2 style={{ fontSize: "18px", fontWeight: "800", margin: "0 0 4px 0", color: "#FFFFFF" }}>
                  ⚡ Conversion Modules Engine
                </h2>
                <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8" }}>
                  Configure and toggle modules in real-time.
                </p>
              </div>
              <span style={{ fontSize: "12px", color: "#38BDF8", fontWeight: "700" }}>Live Sync</span>
            </div>

            {/* Module 1: Sticky Cart */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px",
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              marginBottom: "12px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ fontSize: "24px", width: "42px", height: "42px", background: "rgba(56, 189, 248, 0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  🛒
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }}>Smart Sticky Add to Cart</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>Auto-docks when primary purchase button leaves viewport.</div>
                </div>
              </div>
              <div 
                className={`toggle-switch ${stickyActive ? 'on' : ''}`}
                onClick={() => setStickyActive(!stickyActive)}
              >
                <div className="toggle-dot" />
              </div>
            </div>

            {/* Module 2: Free Shipping Bar */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px",
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              marginBottom: "12px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ fontSize: "24px", width: "42px", height: "42px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  🚚
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }}>Dynamic Free Shipping Goal</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>Live gamified progress bar showing remaining order deficit.</div>
                </div>
              </div>
              <div 
                className={`toggle-switch ${shippingActive ? 'on' : ''}`}
                onClick={() => setShippingActive(!shippingActive)}
              >
                <div className="toggle-dot" />
              </div>
            </div>

            {/* Module 3: WhatsApp Connect */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px",
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              marginBottom: "12px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ fontSize: "24px", width: "42px", height: "42px", background: "rgba(37, 211, 102, 0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  💬
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }}>Floating WhatsApp Connect</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>Instant mobile pre-purchase support widget.</div>
                </div>
              </div>
              <div 
                className={`toggle-switch ${whatsappActive ? 'on' : ''}`}
                onClick={() => setWhatsappActive(!whatsappActive)}
              >
                <div className="toggle-dot" />
              </div>
            </div>

            {/* Module 4: Geo-Currency */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px",
              background: "rgba(15, 23, 42, 0.5)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ fontSize: "24px", width: "42px", height: "42px", background: "rgba(168, 85, 247, 0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  🌍
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }}>Auto Geo-Currency Switcher</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "2px" }}>Seamless native multi-currency matching via Shopify Markets.</div>
                </div>
              </div>
              <div 
                className={`toggle-switch ${currencyActive ? 'on' : ''}`}
                onClick={() => setCurrencyActive(!currencyActive)}
              >
                <div className="toggle-dot" />
              </div>
            </div>

          </div>

          {/* Right Column: Premium Tier Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div className="glass-card" style={{
              padding: "26px",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              background: "linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(15, 23, 42, 0.9) 100%)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "800", color: "#38BDF8", textTransform: "uppercase", letterSpacing: "1px" }}>
                  PRO ALL-ACCESS
                </span>
                <span style={{ background: "rgba(56, 189, 248, 0.2)", color: "#7DD3FC", padding: "2px 8px", borderRadius: "6px", fontSize: "10px", fontWeight: "700" }}>
                  7-DAY FREE TRIAL
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", margin: "14px 0 10px" }}>
                <span style={{ fontSize: "36px", fontWeight: "900", color: "#FFFFFF" }}>$6.99</span>
                <span style={{ fontSize: "13px", color: "#94A3B8" }}>USD / month</span>
              </div>

              <p style={{ fontSize: "12px", color: "#CBD5E1", lineHeight: "1.5", margin: "0 0 16px 0" }}>
                Replaces 4 separate apps ($32/mo value). Unlimited store orders, zero transaction cuts.
              </p>

              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", color: "#E2E8F0" }}>
                <div>✓ Unlimited Sticky Cart Clicks</div>
                <div>✓ Unlimited Free Shipping Goals</div>
                <div>✓ Floating WhatsApp Widget</div>
                <div>✓ Native Shopify Markets Sync</div>
                <div>✓ 24/7 Fast Email & Ticket Support</div>
              </div>

              <button className="glow-btn" style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}>
                Manage Subscription
              </button>
            </div>

            {/* Architecture Card */}
            <div className="glass-card" style={{ padding: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", color: "#FFFFFF", marginBottom: "4px" }}>
                🛡️ Built for Shopify 2.0
              </div>
              <p style={{ fontSize: "12px", color: "#94A3B8", margin: 0, lineHeight: "1.5" }}>
                100% Theme App Extension compliant. When uninstalled, zero ghost code is left in merchant theme files.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}