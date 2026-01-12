"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/integrations/supabase/supabase";
import { Button } from "@/components/ui/button";
import { PublicHeader } from "@/components/public-header";
import {
  Bookmark,
  Tag,
  Sparkles,
  Search,
  Star,
  Zap,
  Github,
} from "lucide-react";

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return null;
  }

  // Landing Page View (Not Logged In)
  return (
    <div className="flex min-h-svh flex-col bg-background selection:bg-primary/20">
      <PublicHeader currentPath="/" />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center pt-32 pb-24 px-4 text-center relative overflow-hidden gap-10 md:gap-14">
        {/* Dynamic Background */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square bg-primary/5 rounded-full blur-[140px] -z-10 animate-pulse" />

        <div className="max-w-6xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] border border-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={14} />
            ORGANIZE YOUR DIGITAL WORLD
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.95] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Every link,{" "}
            <span className="italic font-serif text-primary/80">
              beautifully
            </span>{" "}
            archived.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-10 duration-1000 max-w-3xl mx-auto leading-relaxed">
            The minimal bookmark manager designed for focused creators. Organize
            with elegance, synchronize with ease.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <Button
              className="px-5 h-12 text-md font-bold tracking-tight rounded-lg"
              asChild
            >
              <Link href="/register">Get Started</Link>
            </Button>
            <Button variant="outline" className="h-12 px-5" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>

        {/* Hero Preview - Smart Light/Dark Screenshots */}
        <div className="mt-12 w-full max-w-7xl px-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <div className="relative group">
            {/* Ambient Glow */}
            <div className="absolute -inset-8 bg-primary/5 rounded-[3rem] blur-3xl opacity-0" />

            {/* Main Screenshot Container */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              {/* Light Mode Screenshot */}
              <img
                src="/dashboard-light.png"
                alt="Trove Dashboard Light Mode"
                className="w-full h-auto block dark:hidden"
              />
              {/* Dark Mode Screenshot */}
              <img
                src="/dashboard-dark.png"
                alt="Trove Dashboard Dark Mode"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-32 w-full max-w-7xl px-4 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
              Everything you need to{" "}
              <span className="italic font-serif text-primary/80">
                organize
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful features designed to help you capture, organize, and find
              your digital resources effortlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            {[
              {
                icon: Search,
                title: "Command Palette",
                desc: "Press Ctrl+K to search everything instantly. Navigate, filter, and find bookmarks in milliseconds.",
                color: "text-orange-500",
                bg: "bg-orange-500/10",
              },
              {
                icon: Bookmark,
                title: "Smart Collections",
                desc: "Automatically categorize your links by project or theme with custom icons and colors.",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                icon: Tag,
                title: "Powerful Tagging",
                desc: "Deep tagging system with color-coded tags to find any resource instantly.",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                icon: Star,
                title: "Favorites & Archive",
                desc: "Mark favorites for quick access, archive what you don't need, and keep your workspace clean.",
                color: "text-yellow-500",
                bg: "bg-yellow-500/10",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all hover:translate-y-[-4px] text-left"
              >
                <div
                  className={`size-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Extra Info */}
      <section className="border-t bg-muted/10 py-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
              Designed for creators who live in their{" "}
              <span className="italic font-serif text-primary/80">browser</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trove keeps your best articles, tools, and inspiration one
              shortcut away. No more messy tabs or lost links – just a calm,
              searchable library that grows with you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-muted/20">
              <h3 className="text-lg font-semibold">1. Capture in one click</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Save any page to Trove with a simple action. Titles, favicons
                and metadata are enriched automatically so your library stays
                clean without extra work.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-muted/20">
              <h3 className="text-lg font-semibold">
                2. Organize without friction
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Group links into collections, add tags, and mark favorites.
                Trove&apos;s smart layout makes it easy to scan and jump back
                into what matters.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-muted/20">
              <h3 className="text-lg font-semibold">
                3. Find anything in seconds
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Press{" "}
                <kbd className="px-1.5 py-0.5 text-xs rounded border bg-muted">
                  Ctrl+K
                </kbd>{" "}
                to open the command palette. Powerful filters, search, and
                instant navigation help you resurface what you saved weeks ago.
              </p>
            </div>
          </div>

          {/* Why Trove Section */}
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="space-y-2 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-muted/20">
              <Zap className="size-8 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">100% Free</h3>
              <p className="text-sm text-muted-foreground">
                No subscriptions, no limits. Your bookmarks, your control.
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-muted/20">
              <Github className="size-8 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Open Source</h3>
              <p className="text-sm text-muted-foreground">
                Built transparently. Contribute, fork, or customize as you need.
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-lg border border-border/50 hover:border-primary/20 bg-muted/20">
              <Sparkles className="size-8 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Auto Sync</h3>
              <p className="text-sm text-muted-foreground">
                Your library syncs automatically across all your devices
                instantly.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-dashed border-border/60 rounded-lg px-6 py-6 md:px-8 md:py-8 bg-muted/20">
            <div className="space-y-2 text-left max-w-2xl">
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
                READY WHEN YOU ARE
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Start your Trove in under a minute.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create a free account, connect with GitHub OAuth for instant
                access, and you&apos;re ready to start saving the best of the
                web. Your future self will thank you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto h-11 px-5 font-semibold"
                asChild
              >
                <Link href="/register">Create your free account</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto h-11 px-5"
                asChild
              >
                <Link href="/login">I already have an account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-16 bg-muted/20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center opacity-80">
            <div className="relative h-6 w-auto">
              <Image
                src="/logo-light.svg"
                alt="Trove Logo"
                width={120}
                height={35}
                className="object-contain dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                alt="Trove Logo"
                width={120}
                height={35}
                className="object-contain hidden dark:block"
              />
            </div>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <Link
              href="/roadmap"
              className="hover:text-primary transition-colors"
            >
              Roadmap
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link
              href="https://github.com/kevinkenfack/trove"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/50 tabular-nums">
            © {new Date().getFullYear()} Trove. Designed for focus.
          </p>
        </div>
      </footer>
    </div>
  );
}
