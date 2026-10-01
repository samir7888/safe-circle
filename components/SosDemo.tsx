"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HOLD_MS = 1500;
const RADIUS = 78;
const CIRC = 2 * Math.PI * RADIUS;

type Status = "idle" | "holding" | "sent" | "safe";

const circle = ["Mom", "Dad", "Sister"];

export default function SosDemo() {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef(0);

  const stop = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
  }, []);

  useEffect(() => stop, [stop]);

  const tick = useCallback(() => {
    const p = Math.min((performance.now() - start.current) / HOLD_MS, 1);
    setProgress(p);
    if (p >= 1) {
      stop();
      setStatus("sent");
    } else {
      raf.current = requestAnimationFrame(tick);
    }
  }, [stop]);

  const begin = () => {
    if (status === "sent" || status === "safe") return;
    setStatus("holding");
    start.current = performance.now();
    raf.current = requestAnimationFrame(tick);
  };

  const cancel = () => {
    if (status !== "holding") return;
    stop();
    setProgress(0);
    setStatus("idle");
  };

  const reset = () => {
    stop();
    setProgress(0);
    setStatus("idle");
  };

  const message =
    status === "idle"
      ? "Hold the button to try an SOS"
      : status === "holding"
      ? "Keep holding…"
      : status === "sent"
      ? "SOS sent with your location"
      : "You marked yourself safe";

  return (
    <div className="phone" aria-label="Interactive SOS demo">
      <div className="phone-notch" aria-hidden="true" />
      <p className="phone-status" role="status" aria-live="polite">
        {message}
      </p>

      <div className="sos-wrap">
        <svg className="sos-ring" viewBox="0 0 180 180" aria-hidden="true">
          <circle cx="90" cy="90" r={RADIUS} className="ring-track" />
          <circle
            cx="90"
            cy="90"
            r={RADIUS}
            className="ring-fill"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - progress)}
          />
        </svg>
        <button
          type="button"
          className={`sos-btn is-${status}`}
          onPointerDown={begin}
          onPointerUp={cancel}
          onPointerLeave={cancel}
          onPointerCancel={cancel}
          onKeyDown={(e) => {
            if ((e.key === " " || e.key === "Enter") && !e.repeat) {
              e.preventDefault();
              begin();
            }
          }}
          onKeyUp={(e) => {
            if (e.key === " " || e.key === "Enter") cancel();
          }}
          aria-label="Hold to send SOS (demo)"
        >
          {status === "safe" ? "Safe" : "SOS"}
        </button>
      </div>

      <ul className="circle-list">
        {circle.map((name) => (
          <li key={name}>
            <span className="avatar" aria-hidden="true">
              {name[0]}
            </span>
            <span className="circle-name">{name}</span>
            <span className={`circle-state s-${status}`}>
              {status === "sent"
                ? "Ringing"
                : status === "safe"
                ? "Told you're safe"
                : "Trusted"}
            </span>
          </li>
        ))}
      </ul>

      <div className="phone-actions">
        {status === "sent" && (
          <button type="button" className="mini-btn safe" onClick={() => setStatus("safe")}>
            I&apos;m safe
          </button>
        )}
        {(status === "sent" || status === "safe") && (
          <button type="button" className="mini-btn" onClick={reset}>
            Try again
          </button>
        )}
      </div>
      <p className="demo-note">Demo only. No alert is sent from this page.</p>
    </div>
  );
}
