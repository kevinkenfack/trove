import { Metadata } from "next";
import { PublicHeader } from "@/components/public-header";
import Footer from "@/components/public-footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Trove",
  description: "Learn how Trove protects and manages your digital data and privacy.",
  openGraph: {
    title: "Privacy Policy | Trove",
    description: "Learn how Trove protects and manages your digital data and privacy.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy`,
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
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background selection:bg-primary/20">
      <PublicHeader currentPath="/privacy" />

      <main className="flex-1 pt-32 pb-24 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.95]">
              Privacy <span className="italic font-serif text-primary/80">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 13, 2026</p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              <p>
                At Trove, your privacy is our priority. We are committed to protecting your personal data and being transparent about how we collect and use it. This policy explains our practices regarding your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
              <p>
                When you sign up via GitHub, we collect basic profile information (such as your GitHub username and email address) to create and maintain your account. We also store the bookmarks and collections you create within the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
              <p>
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain Trove.</li>
                <li>Synchronize your bookmarks across your devices.</li>
                <li>Communicate with you regarding updates or support inquiries.</li>
                <li>Improve the performance and features of the Service.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. All authentication is handled securely through GitHub OAuth, and your data is stored in encrypted databases provided by Supabase.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your data at any time through your account settings. If you choose to delete your account, all your data will be permanently removed from our active servers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Third-Party Services</h2>
              <p>
                We use Supabase for data storage and GitHub for authentication. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="space-y-4 pt-8 border-t border-border">
              <p className="text-sm">
                If you have any questions or concerns about our Privacy Policy, please reach out to us at{" "}
                <a href="mailto:privacy@trove.to" className="text-primary hover:underline underline-offset-4">
                  privacy@trove.to
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
