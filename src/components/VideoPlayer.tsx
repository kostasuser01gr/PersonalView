"use client";

import { useRef, useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };
    const onMeta = () => setDuration(video.duration);

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onMeta);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

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

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = pct * duration;
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section id="video" className="py-32 px-6">
      <div className="max-w-md mx-auto">
        <RevealOnScroll>
          <h2 className="text-sm font-mono text-accent tracking-wide mb-4">
            Video Introduction
          </h2>
          <p className="text-muted text-base mb-10 max-w-lg">
            A two-minute introduction — who I am, what I work with, and what
            I&apos;m looking for.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150} direction="scale">
          <div className="relative rounded-xl overflow-hidden border border-border glow-lg bg-black group/player">
            <video
              ref={videoRef}
              src="/intro-v6.mp4"
              className="w-full"
              style={{ aspectRatio: "1024 / 1536" }}
              playsInline
              preload="metadata"
              onEnded={() => { setIsPlaying(false); setProgress(100); }}
              onClick={togglePlay}
            />

            {/* Play overlay */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity hover:bg-black/30 group cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-20 h-20 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all group-hover:scale-110 glow">
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
                    Click to play &middot; 2:34
                  </span>
                )}
              </button>
            )}

            {/* Progress bar */}
            {hasStarted && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-2 flex items-center gap-3 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
                <span className="text-[11px] font-mono text-white/70 w-8 text-right">
                  {fmt(currentTime)}
                </span>
                <div
                  className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer group/bar"
                  onClick={seek}
                >
                  <div
                    className="h-full bg-accent rounded-full relative transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white scale-0 group-hover/bar:scale-100 transition-transform" />
                  </div>
                </div>
                <span className="text-[11px] font-mono text-white/70 w-8">
                  {fmt(duration)}
                </span>
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
