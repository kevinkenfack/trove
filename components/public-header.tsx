"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Menu, X } from "lucide-react";

interface PublicHeaderProps {
  currentPath?: string;
}

export function PublicHeader({ currentPath = "/" }: PublicHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center h-full">
            <div className="relative h-full flex items-center">
              <Image
                src="/logo-light.svg"
                alt="Trove Logo"
                width={120}
                height={35}
                className="object-contain dark:hidden h-auto"
                priority
              />
              <Image
                src="/logo-dark.svg"
                alt="Trove Logo"
                width={120}
                height={35}
                className="object-contain hidden dark:block h-auto"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:flex gap-2"
            >
              <Link
                href="https://github.com/kevinkenfack/trove"
                target="_blank"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </Link>
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <div className="w-px h-4 bg-border mx-1" />
              <Button asChild className="px-5">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative h-6 w-auto">
                <Image
                  src="/logo-light.svg"
                  alt="Trove Logo"
                  width={120}
                  height={35}
                  className="object-contain dark:hidden"
                  priority
                />
                <Image
                  src="/logo-dark.svg"
                  alt="Trove Logo"
                  width={120}
                  height={35}
                  className="object-contain hidden dark:block"
                  priority
                />
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 px-6 py-6 text-lg font-semibold">
            <Link
              href="/roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 border-b border-border/50 hover:bg-muted/60 hover:text-primary transition-colors rounded-md px-2 -mx-2 ${
                currentPath === "/roadmap" ? "text-primary" : ""
              }`}
            >
              Roadmap
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-border/50 hover:bg-muted/60 hover:text-primary transition-colors rounded-md px-2 -mx-2"
            >
              Create account
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-border/50 hover:bg-muted/60 hover:text-primary transition-colors rounded-md px-2 -mx-2"
            >
              Login
            </Link>
            <Link
              href="https://github.com/kevinkenfack/trove"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-border/50 flex items-center gap-2 hover:bg-muted/60 hover:text-primary transition-colors rounded-md px-2 -mx-2"
            >
              <Github className="size-5" />
              View on GitHub
            </Link>
            <div className="pt-2">
              <Button className="w-full" asChild>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
