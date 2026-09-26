"use client";

import { useRef, useState, useCallback, useEffect } from "react";

/**
 * Section video with optional sound toggle.
 *
 * Optimisation:
 *  - Lazy-loads: the <video> element is only injected when the wrapper
 *    enters the viewport (with 300px lookahead), so no video bytes are
 *    fetched until the user scrolls near it.
 *  - Skeleton loader preserves layout height while loading.
 *  - Pauses when scrolled out of view to save bandwidth.
 */
export default function SectionVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy-load: only inject the <video> when the wrapper is near the viewport
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || shouldLoad) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [isLoaded]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <div ref={wrapRef} className={`section-video-wrap ${className}`}>
      {/* Skeleton loader */}
      <div
        className={`section-video-skeleton ${isLoaded ? "section-video-skeleton--hidden" : ""}`}
      />

      {shouldLoad && (
        <video
          ref={videoRef}
          className={`section-video ${isLoaded ? "section-video--loaded" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Sound toggle */}
      <button
        className="section-sound-toggle"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
}
