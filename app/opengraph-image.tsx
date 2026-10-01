import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} safety app`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F2A3A",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 96,
            background: "#D6353B",
            border: "10px solid #fff",
            marginBottom: 48,
          }}
        />
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#B9CAD6" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size
  );
}
