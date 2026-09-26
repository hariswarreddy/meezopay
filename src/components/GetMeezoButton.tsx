"use client";

import { useState } from "react";
import DownloadModal from "./DownloadModal";

export default function GetMeezoButton({ 
  className = "btn btn-primary",
  text = "Get Meezo — it's free" 
}: { 
  className?: string;
  text?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a 
        href="#download" 
        className={className} 
        onClick={(e) => { 
          e.preventDefault(); 
          setIsOpen(true); 
        }}
      >
        {text}
      </a>
      <DownloadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

