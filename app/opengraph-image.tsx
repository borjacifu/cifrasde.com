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
          padding: "72px 80px",
          background: "#ffffff",
          color: "#18181b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#991b1b",
            }}
          />
          <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.4 }}>
            Cifras de España
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#71717a",
              fontFamily: "ui-monospace, Menlo, monospace",
            }}
          >
            Edición · 2026
          </span>
          <h1
            style={{
              fontSize: 116,
              lineHeight: 1.02,
              fontWeight: 500,
              letterSpacing: -3,
              margin: "20px 0 0",
              maxWidth: 1000,
            }}
          >
            Las cifras que
            <br />
            explican España.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 28,
            borderTop: "1px solid #e4e4e7",
            fontSize: 20,
            color: "#71717a",
          }}
        >
          <span>cifrasde.com</span>
          <span style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
            07 webs · 37 fuentes públicas
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
