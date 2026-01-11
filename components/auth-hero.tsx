"use client";

import { useEffect, useState } from "react";

function TypingText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-white/80">|</span>
      )}
    </span>
  );
}

export function AuthHero() {
  return (
    <div className="bg-muted relative hidden lg:block overflow-hidden border-l">
      <img
        src="/auth-hero.png"
        alt="Trove Dashboard Preview"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 flex items-center justify-center p-10">
        <div className="max-w-md space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
            Organize your digital world
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            <TypingText
              text="Trove helps you collect, organize, and discover the best resources from across the web. Your personal library of inspiration, all in one beautiful place."
              speed={30}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

