"use client";

import { useRef, useState, useEffect } from "react";

/**
 * Inline autoplay video with a loading skeleton.
 *
 * Optimisation:
 *  - Lazy-loads: the <video> element is only injected when the wrapper
 *    enters the viewport (with 300px lookahead), so no bytes are
 *    fetched for off-screen videos.
 *  - Shimmer skeleton preserves the exact aspect-ratio so the
 *    layout never shifts.
 *  - Once the video's first frame loads, the skeleton fades out.
 *  - Pauses when scrolled out of view to save bandwidth.
 */
export default function InlineVideo({
  src,
  className = "",
  style,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy-load: only inject <video> when near the viewport
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
    if (!video || !loaded) return;

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
  }, [loaded]);

  return (
    <div ref={wrapRef} className={`inline-video-wrap ${className}`} style={style}>
      {/* Skeleton loader — visible until the video's first frame is ready */}
      <div
        className={`inline-video-skeleton ${loaded ? "inline-video-skeleton--hidden" : ""}`}
      />
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`inline-video ${loaded ? "inline-video--loaded" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
