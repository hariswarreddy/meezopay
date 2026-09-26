"use client";

import { Play } from "lucide-react";
import Link from "next/link";

// 👇 PASTE YOUR APP STORE AND PLAY STORE LINKS HERE 👇
const APP_STORE_LINK = "https://apps.apple.com/app/id6806741939"; 
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.meezopay.ltd"; 

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Download now</h2>
        <p>Get the Meezo app on your preferred platform.</p>
        <div className="store-buttons">
          <Link href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink: 0}}>
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.29-.88 3.56-.84 1.51.04 2.75.63 3.57 1.83-3.14 1.83-2.61 5.82.35 7.07-.63 1.63-1.6 3.12-2.56 4.11zm-4.32-15.1c.32-2.23 2.21-3.9 4.31-3.92-.37 2.37-2.3 3.97-4.31 3.92z"/>
            </svg>
            <div className="store-text">
              <span className="store-sub">Download on the</span>
              <span className="store-main">App Store</span>
            </div>
          </Link>
          <Link href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn">
            <Play size={28} />
            <div className="store-text">
              <span className="store-sub">GET IT ON</span>
              <span className="store-main">Google Play</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
