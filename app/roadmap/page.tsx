"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PublicHeader } from "@/components/public-header";
import {
  CheckCircle2,
  Circle,
  Sparkles,
  Bookmark,
  Tag,
  Search,
  Archive,
  Star,
  Settings,
  Github,
  Zap,
  Globe,
  Download,
  Share2,
  FileText,
  BarChart3,
  Keyboard,
  Plug,
  Cloud,
  ArrowRight,
} from "lucide-react";

export default function RoadmapPage() {
  const completedFeatures = [
    {
      icon: Github,
      title: "GitHub OAuth Authentication",
      description: "Secure login via GitHub with automatic profile and avatar retrieval",
      status: "completed",
    },
    {
      icon: Bookmark,
      title: "Smart Collections",
      description: "Organize links into collections with custom icons and colors",
      status: "completed",
    },
    {
      icon: Tag,
      title: "Advanced Tagging System",
      description: "Deep tagging with color-coded tags for instant resource discovery",
      status: "completed",
    },
    {
      icon: Search,
      title: "Command Palette (Ctrl+K)",
      description: "Instant search for everything with keyboard shortcuts, quick navigation, and filters",
      status: "completed",
    },
    {
      icon: Star,
      title: "Favorites & Archive",
      description: "Mark favorites for quick access, archive unused links, and manage trash",
      status: "completed",
    },
    {
      icon: Archive,
      title: "Archive & Trash Management",
      description: "Smart archiving, restore from archive, and permanent deletion",
      status: "completed",
    },
    {
      icon: Settings,
      title: "Settings & Profile Page",
      description: "User profile management, avatar, name, and preferences",
      status: "completed",
    },
    {
      icon: Zap,
      title: "Dark/Light Mode",
      description: "Automatic theme sync with system, manual toggle available",
      status: "completed",
    },
    {
      icon: Globe,
      title: "Complete Landing Page",
      description: "Modern homepage with hero section, features showcase, CTAs, and responsive design",
      status: "completed",
    },
    {
      icon: Cloud,
      title: "Automatic Synchronization",
      description: "Real-time sync via Supabase across all your devices",
      status: "completed",
    },
    {
      icon: Keyboard,
      title: "Grid & List Views",
      description: "Switch between grid and list views, sort by date, advanced filters",
      status: "completed",
    },
    {
      icon: FileText,
      title: "PWA Support",
      description: "Progressive Web App installable with manifest and icons",
      status: "completed",
    },
  ];

  const upcomingFeatures = [
    {
      icon: Download,
      title: "Import/Export Bookmarks",
      description: "Import from Chrome/Firefox, export to JSON/HTML for backup",
      status: "planned",
      priority: "high",
    },
    {
      icon: Plug,
      title: "Browser Extension",
      description: "Chrome/Firefox extension to save links with one click from any page",
      status: "planned",
      priority: "high",
    },
    {
      icon: Share2,
      title: "Collection Sharing",
      description: "Share public or private collections with shareable links",
      status: "planned",
      priority: "medium",
    },
    {
      icon: FileText,
      title: "Bookmark Notes",
      description: "Add personal notes and annotations to each bookmark",
      status: "planned",
      priority: "medium",
    },
    {
      icon: BarChart3,
      title: "Advanced Statistics",
      description: "Analytics on your bookmarks: most visited links, popular tags, trends",
      status: "planned",
      priority: "low",
    },
    {
      icon: Search,
      title: "Enhanced Global Search",
      description: "Full-text search in page content, intelligent suggestions",
      status: "planned",
      priority: "medium",
    },
    {
      icon: Keyboard,
      title: "Extended Keyboard Shortcuts",
      description: "More keyboard shortcuts for all common actions",
      status: "planned",
      priority: "low",
    },
    {
      icon: Plug,
      title: "Public API",
      description: "REST API to integrate Trove into other applications and tools",
      status: "planned",
      priority: "low",
    },
    {
      icon: Cloud,
      title: "Enhanced Offline Mode",
      description: "Full access to bookmarks offline with deferred synchronization",
      status: "planned",
      priority: "medium",
    },
  ];

  return (
    <div className="flex min-h-svh flex-col bg-background selection:bg-primary/20">
      <PublicHeader currentPath="/roadmap" />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center pt-32 pb-16 px-4 text-center relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square bg-primary/5 rounded-full blur-[140px] -z-10 animate-pulse" />

        <div className="max-w-4xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] border border-primary/10">
            <Sparkles size={14} />
            ROADMAP
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
            The future of{" "}
            <span className="italic font-serif text-primary/80">Trove</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover what's already available and what's coming next. Your
            feedback guides our development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24 max-w-7xl space-y-16">
        {/* Completed Features */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Completed Features
              </h2>
              <p className="text-sm text-muted-foreground">
                {completedFeatures.length} features already available
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedFeatures.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all hover:translate-y-[-2px] text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <feature.icon size={20} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground text-sm leading-tight">
                        {feature.title}
                      </h3>
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Features */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Circle size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Coming Soon
              </h2>
              <p className="text-sm text-muted-foreground">
                {upcomingFeatures.length} features in development
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* High Priority */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-orange-500"></span>
                High Priority
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingFeatures
                  .filter((f) => f.priority === "high")
                  .map((feature, i) => (
                    <div
                      key={i}
                      className="group p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all hover:translate-y-[-2px] text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                          <feature.icon size={20} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-foreground text-sm leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Medium Priority */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-blue-500"></span>
                Medium Priority
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingFeatures
                  .filter((f) => f.priority === "medium")
                  .map((feature, i) => (
                    <div
                      key={i}
                      className="group p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all hover:translate-y-[-2px] text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                          <feature.icon size={20} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-foreground text-sm leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Low Priority */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-muted-foreground"></span>
                Low Priority
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingFeatures
                  .filter((f) => f.priority === "low")
                  .map((feature, i) => (
                    <div
                      key={i}
                      className="group p-6 rounded-lg bg-muted/20 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all hover:translate-y-[-2px] text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-10 rounded-lg bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                          <feature.icon size={20} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-semibold text-foreground text-sm leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-dashed border-border/60 rounded-lg px-6 py-6 md:px-8 md:py-8 bg-muted/20">
          <div className="space-y-2 text-left max-w-2xl">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
              HAVE AN IDEA?
            </p>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              Help us build Trove
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your feedback is valuable. Share your ideas on GitHub to help us
              improve Trove.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button asChild className="w-full sm:w-auto h-11 px-5 font-semibold">
              <Link
                href="https://github.com/kevinkenfack/trove"
                target="_blank"
              >
                <Github className="mr-2 size-4" />
                Contribute on GitHub
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-11 px-5"
              asChild
            >
              <Link href="/register">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
