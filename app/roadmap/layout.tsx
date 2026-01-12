import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap - Trove",
  description: "Discover what's already available and what's coming next.",
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
