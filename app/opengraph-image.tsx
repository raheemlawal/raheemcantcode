import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0c",
          color: "#ebe9e3",
          padding: 80,
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, color: "#8d8a80" }}>
          {site.url.replace("https://", "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 34, color: "#8d8a80" }}>{site.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
