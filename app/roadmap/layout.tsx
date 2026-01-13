import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | Trove",
  description: "Discover what's already available and what's coming next.",
  openGraph: {
    title: "Roadmap | Trove",
    description: "Discover what's already available and what's coming next.",
    type: "website",
    siteName: "Trove",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/roadmap`,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmap | Trove",
    description: "Discover what's already available and what's coming next.",
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
