import { ImageResponse } from "next/og";

export const alt = "VirtuWebz — Websites, Apps and Digital Experiences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", color: "#f1f0eb", background: "linear-gradient(135deg, #080b11 0%, #132238 60%, #080a0e 100%)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-2px" }}>VirtuWebz.</div>
        <div style={{ width: 18, height: 18, borderRadius: 999, background: "#72f69b" }}/>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1020 }}>
        <div style={{ fontSize: 86, fontWeight: 700, lineHeight: .94, letterSpacing: "-5px" }}>We design &amp; build websites, apps and brands.</div>
        <div style={{ marginTop: 30, color: "#aeb8c7", fontSize: 27 }}>Digital work built with clarity, craft and purpose.</div>
      </div>
    </div>,
    size,
  );
}
