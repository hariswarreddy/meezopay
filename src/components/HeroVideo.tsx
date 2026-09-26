"use client";

import { useRef, useState, useCallback, useEffect } from "react";

/**
 * Full-screen background video for the hero section.
 *
 * Optimisation strategy:
 *  - Waits until the browser is idle (text is painted) before loading
 *  - Starts muted (browsers block unmuted autoplay)
 *  - Uses `preload="metadata"` so only a few KB are fetched initially
 *  - Plays inline (no fullscreen takeover on mobile)
 *  - Pauses when scrolled out of view to save bandwidth & battery
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Defer loading until browser has finished painting text content.
  // requestIdleCallback fires after layout + paint are done,
  // ensuring all text is visible before any video bytes are fetched.
  useEffect(() => {
    if (shouldLoad) return;

    const start = () => setShouldLoad(true);

    // requestIdleCallback isn't available in all browsers (Safari),
    // fall back to a rAF + setTimeout combo for the same effect.
    if ("requestIdleCallback" in window) {
      const id = (window as Window).requestIdleCallback(start, { timeout: 1500 });
      return () => (window as Window).cancelIdleCallback(id);
    } else {
      const raf = requestAnimationFrame(() => {
        const timer = setTimeout(start, 100);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (raf as unknown) = timer; // just for cleanup reference
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [shouldLoad]);

  // Play/pause based on visibility (saves bandwidth when scrolled away)
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
      { threshold: 0.1 }
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
    <div ref={containerRef} className="hero-video-wrap">
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`hero-video ${isLoaded ? "hero-video--loaded" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source
            src="https://ik.imagekit.io/hariswarreddy/meezo/hero"
            type="video/mp4"
          />
        </video>
      )}

      {/* Dark overlay so text stays readable */}
      <div className="hero-video-overlay" />

      {/* Sound toggle — bottom-right of hero */}
      <button
        className="hero-sound-toggle"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
}
