"use client";

import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="video" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-4">
          Video Introduction
        </h2>
        <p className="text-muted text-base mb-10 max-w-lg">
          A two-minute introduction — who I am, what I work with, and what
          I&apos;m looking for.
        </p>

        <div className="relative rounded-xl overflow-hidden border border-border glow bg-black">
          <video
            ref={videoRef}
            src="/intro-video.mp4"
            className="w-full aspect-video"
            playsInline
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
          />

          {/* Play overlay */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity hover:bg-black/30 group cursor-pointer"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all group-hover:scale-105 glow">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {!hasStarted && (
                <span className="absolute bottom-8 text-sm text-white/70 font-medium">
                  Click to play &middot; 0:08
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
