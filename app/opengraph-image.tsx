import { ImageResponse } from "next/og";

export const alt = "Cifras de España — red de datos públicos accesibles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: "#F5F1E8",
          color: "#0F0E0C",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        {/* Top hairline */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 72,
            right: 72,
            height: 1,
            background: "#0F0E0C",
            opacity: 0.22,
          }}
        />
        {/* Bottom hairline */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 72,
            right: 72,
            height: 1,
            background: "#0F0E0C",
            opacity: 0.22,
          }}
        />

        {/* Top row: corner labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 16,
            letterSpacing: 5,
            color: "#6B6258",
            fontFamily: "ui-monospace, Menlo, Consolas, monospace",
            textTransform: "uppercase",
          }}
        >
          <span>Núm · 01 · MMXXVI</span>
          <span>Edición · 2026</span>
        </div>

        {/* Hero wordmark — centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 140,
              lineHeight: 1.04,
              letterSpacing: -4,
              fontWeight: 400,
              display: "flex",
              alignItems: "baseline",
              position: "relative",
            }}
          >
            <span>Cifras</span>
            <span style={{ fontStyle: "italic", color: "#6B6258", margin: "0 16px" }}>de</span>
            <span>España</span>
            {/* Accent dot */}
            <div
              style={{
                position: "absolute",
                top: 8,
                right: -28,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#B4561F",
              }}
            />
          </div>
          <div
            style={{
              fontStyle: "italic",
              color: "#6B6258",
              fontSize: 30,
              marginTop: 24,
              letterSpacing: -0.5,
            }}
          >
            datos públicos, leídos despacio
          </div>
        </div>

        {/* Bottom row: meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "#6B6258",
            fontFamily: "ui-monospace, Menlo, Consolas, monospace",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>cifrasde.com</span>
          <span>07 observatorios · 37 fuentes</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
