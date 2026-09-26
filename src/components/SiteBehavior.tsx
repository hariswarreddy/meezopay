"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Shared page behaviour, ported from the original static build's assets/main.js.
 *
 * This intentionally stays close to the original progressive-enhancement
 * pattern (querySelectorAll + plain event listeners) rather than being
 * rewritten as controlled React state for every widget. Reasons:
 *   - it keeps the ported markup/behaviour pixel- and pattern-identical to
 *     the approved static build, which matters for a brand-locked marketing
 *     site;
 *   - it's easy to verify against the original main.js line by line.
 *
 * It re-runs on every route change (via usePathname) since Header/Footer/
 * this component live in the persistent root layout, while the interactive
 * elements it wires up (tabs, FAQ items, reveal targets) live in the page
 * content that gets swapped out underneath it.
 */
export default function SiteBehavior() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Tabs (e.g. "Send money your way")
    document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((group) => {
      const buttons = Array.from(group.querySelectorAll<HTMLElement>(".tab-btn"));
      const panels = Array.from(group.querySelectorAll<HTMLElement>(".tab-panel"));
      buttons.forEach((btn) => {
        const handler = () => {
          buttons.forEach((b) => b.setAttribute("aria-selected", "false"));
          panels.forEach((p) => p.classList.remove("active"));
          btn.setAttribute("aria-selected", "true");
          const targetId = btn.getAttribute("data-target");
          if (targetId) {
            const target = group.querySelector(`#${targetId}`);
            target?.classList.add("active");
          }
        };
        btn.addEventListener("click", handler);
        cleanups.push(() => btn.removeEventListener("click", handler));
      });
    });

    // Tab-visual swap (homepage "Send money your way" section) — swaps the
    // screenshot/video alongside the active tab. Also plays/pauses videos
    // so hidden ones don't consume bandwidth.
    document.querySelectorAll<HTMLElement>("[data-tabs] .tab-btn").forEach((btn) => {
      const handler = () => {
        const target = btn.getAttribute("data-target");
        document.querySelectorAll<HTMLElement>(".tp-visual").forEach((v) => {
          const isActive = v.getAttribute("data-for") === target;
          v.style.display = isActive ? "block" : "none";
          // Play/pause videos inside each visual
          const video = v.querySelector<HTMLVideoElement>("video");
          if (video) {
            if (isActive) {
              video.currentTime = 0;
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          }
        });
      };
      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });

    // FAQ accordion
    document.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
      const q = item.querySelector<HTMLElement>(".faq-q");
      if (!q) return;
      const handler = () => {
        const isOpen = item.classList.contains("open");
        const group = item.closest("[data-faq-group]");
        group?.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      };
      q.addEventListener("click", handler);
      cleanups.push(() => q.removeEventListener("click", handler));
    });

    // Scroll reveal — content is styled fully visible by default (see
    // globals.css), so a slow or failed script never leaves anything
    // permanently hidden.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | undefined;
    if (!reduceMotion && "IntersectionObserver" in window) {
      const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => {
        el.classList.add("reveal-init");
        io?.observe(el);
      });
    }

    // Waitlist form (business page) — local acknowledgement only, no backend
    const wf = document.querySelector<HTMLFormElement>("[data-waitlist-form]");
    let waitlistHandler: ((e: Event) => void) | undefined;
    if (wf) {
      waitlistHandler = (e: Event) => {
        e.preventDefault();
        const note = wf.querySelector<HTMLElement>(".waitlist-note");
        if (note) note.textContent = "You're on the list — we'll email you when business accounts open.";
        const input = wf.querySelector<HTMLInputElement>("input");
        if (input) input.value = "";
      };
      wf.addEventListener("submit", waitlistHandler);
      cleanups.push(() => wf.removeEventListener("submit", waitlistHandler as EventListener));
    }

    return () => {
      cleanups.forEach((fn) => fn());
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
