import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import { AuthHero } from "@/components/auth-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Trove",
  description: "Access your Trove bookmark library. Secure and simple login.",
  openGraph: {
    title: "Login | Trove",
    description: "Access your Trove bookmark library. Secure and simple login.",
    type: "website",
    siteName: "Trove",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/login`,
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
    title: "Login | Trove",
    description: "Access your Trove bookmark library. Secure and simple login.",
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-background">
        <div className="flex justify-center gap-2 md:justify-start pt-4 md:pt-0">
          <Link href="/" className="flex items-center">
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
        </div>
        <div className="flex flex-1 items-start lg:items-center justify-center py-8 lg:py-0">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
      <AuthHero />
    </div>
  );
}
