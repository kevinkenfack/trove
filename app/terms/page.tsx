import { Metadata } from "next";
import { PublicHeader } from "@/components/public-header";
import Footer from "@/components/public-footer";

export const metadata: Metadata = {
  title: "Terms of Service | Trove",
  description:
    "Read the terms and conditions for using Trove, the minimal bookmark manager.",
  openGraph: {
    title: "Terms of Service | Trove",
    description:
      "Read the terms and conditions for using Trove, the minimal bookmark manager.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/terms`,
    siteName: "Trove",
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Trove - Minimal Bookmark Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Trove",
    description:
      "Read the terms and conditions for using Trove, the minimal bookmark manager.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background selection:bg-primary/20">
      <PublicHeader currentPath="/terms" />

      <main className="flex-1 pt-32 pb-24 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
              Terms of{" "}
              <span className="italic font-serif text-primary/80">Service</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 13, 2026
            </p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Trove ("the Service"), you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                2. Description of Service
              </h2>
              <p>
                Trove is a minimal bookmark manager designed to help users
                organize and synchronize digital resources. We reserve the right
                to modify or discontinue the Service at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                3. User Accounts
              </h2>
              <p>
                You are responsible for maintaining the security of your account
                and any activities that occur under your account. We use GitHub
                OAuth for authentication to ensure a secure and seamless
                experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                4. Intellectual Property
              </h2>
              <p>
                Trove and its original content, features, and functionality are
                owned by Trove and are protected by international copyright,
                trademark, and other intellectual property laws. As an
                open-source project, our source code is available under the MIT
                License on GitHub.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                5. Termination
              </h2>
              <p>
                We may terminate or suspend access to our Service immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall Trove, nor its directors, employees, or
                partners, be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of
                the Service.
              </p>
            </section>

            <section className="space-y-4 pt-8 border-t border-border">
              <p className="text-sm">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:hello@trove.to"
                  className="text-primary hover:underline underline-offset-4"
                >
                  hello@trove.to
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
