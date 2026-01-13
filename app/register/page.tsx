import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "@/components/register-form";
import { Metadata } from "next";
import { AuthHero } from "@/components/auth-hero";

export const metadata: Metadata = {
  title: "Register | Trove",
  description:
    "Create your Trove account and start organizing your digital library today.",
  openGraph: {
    title: "Register | Trove",
    description:
      "Create your Trove account and start organizing your digital library today.",
    type: "website",
    siteName: "Trove",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/register`,
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
    title: "Register | Trove",
    description:
      "Create your Trove account and start organizing your digital library today.",
    images: ["/og-image.png"],
  },
};

export default function RegisterPage() {
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
            <RegisterForm />
          </div>
        </div>
      </div>
      <AuthHero />
    </div>
  );
}
