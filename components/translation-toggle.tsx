"use client";

import { useState, useEffect, useCallback } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const DEBUG = true; // Set to false in production

const log = (...args: unknown[]) => {
  if (DEBUG) console.log("[GTranslate]", ...args);
};

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
];

// Declare global window properties for GTranslate
declare global {
  interface Window {
    gtranslateSettings: Record<string, unknown>;
    doGTranslate: (langPair: string) => void;
  }
}

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isReady, setIsReady] = useState(false);

  // Get current language from GTranslate cookie
  const getCurrentLanguageFromCookie = useCallback(() => {
    if (typeof document === "undefined") return "en";
    const match = document.cookie.match(/googtrans=\/en\/([a-z-]+)/i);
    const lang = match ? match[1] : "en";
    log("Cookie language:", lang, "| Cookie:", document.cookie);
    return lang;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    log("Component mounted");
    log("gtranslateSettings:", window.gtranslateSettings);
    log("doGTranslate exists:", typeof window.doGTranslate === "function");

    // Set current language from cookie on mount
    const cookieLang = getCurrentLanguageFromCookie();
    setCurrentLang(cookieLang);

    // Check if GTranslate is already loaded
    const checkReady = () => {
      const ready = typeof window.doGTranslate === "function";
      if (ready && !isReady) {
        log("doGTranslate is now available!");
        setIsReady(true);
      }
      return ready;
    };

    // If already ready, we're done
    if (checkReady()) return;

    // Poll for GTranslate to be ready
    log("Polling for doGTranslate...");
    const interval = setInterval(() => {
      if (checkReady()) {
        clearInterval(interval);
      }
    }, 500);

    // Cleanup
    return () => clearInterval(interval);
  }, [getCurrentLanguageFromCookie, isReady]);

  const handleLanguageChange = useCallback(
    (langCode: string) => {
      if (typeof window === "undefined") return;

      log("Language change requested:", langCode);
      log("Current language:", currentLang);
      log("doGTranslate exists:", typeof window.doGTranslate === "function");

      // If selecting the current language, do nothing
      if (langCode === currentLang) {
        log("Same language, skipping");
        return;
      }

      // Check for required elements
      const wrapper = document.querySelector(".gtranslate_wrapper");
      const googleElement = document.getElementById(
        "google_translate_element2"
      );
      const googTeCombo = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      log("Wrapper element:", wrapper);
      log("google_translate_element2:", googleElement);
      log("goog-te-combo (Google's select):", googTeCombo);

      // Try using doGTranslate first
      if (typeof window.doGTranslate === "function") {
        const langPair = `en|${langCode}`;
        log("Calling doGTranslate with:", langPair);
        window.doGTranslate(langPair);
        setCurrentLang(langCode);

        // If goog-te-combo exists, also trigger it directly as fallback
        if (googTeCombo) {
          log("Also triggering goog-te-combo directly");
          googTeCombo.value = langCode;
          googTeCombo.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          // Fallback: Set cookie and reload if Google Translate widget isn't ready
          log("goog-te-combo not found, setting cookie manually");
          const domain = window.location.hostname;
          document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
          document.cookie = `googtrans=/en/${langCode}; path=/`;

          // Give doGTranslate a moment to work, then reload if needed
          setTimeout(() => {
            const translated = document.querySelector(
              ".translated-ltr, .translated-rtl"
            );
            if (!translated && langCode !== "en") {
              log("Translation didn't apply, reloading page");
              window.location.reload();
            }
          }, 1000);
        }
      } else {
        console.warn("[GTranslate] doGTranslate not available!");
      }
    },
    [currentLang]
  );

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-12">
              <Globe className="size-4" />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Language {isReady ? "✓" : "..."}</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer flex items-center gap-2 ${
              currentLang === language.code ? "bg-muted font-medium" : ""
            }`}
          >
            <span className="text-sm">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
            {currentLang === language.code && (
              <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
