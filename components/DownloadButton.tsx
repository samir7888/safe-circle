import { siteConfig } from "@/lib/config";

export default function DownloadButton({
  variant = "dark",
  label = "Download the app",
}: {
  variant?: "dark" | "light";
  label?: string;
}) {
  return (
    <a
      className={`btn btn-${variant}`}
      href={siteConfig.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v12m0 0l-5-5m5 5l5-5M5 20h14"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  );
}
