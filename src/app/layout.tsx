import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avinash Papineni",
    template: "%s | Avinash Papineni",
  },
  description:
    "Systems architect intrested in AI infrastructure — helping teams control cost, reliability, and governance as LLMs move into production.",
  metadataBase: new URL("https://avinashpapineni.com"),
  openGraph: {
    title: "Avinash Papineni",
    description:
      "Systems architect intrested in AI infrastructure.",
    url: "https://avinashpapineni.com",
    siteName: "Avinash Papineni",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Papineni",
    description:
      "Systems architect intrested in AI infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">
            <Header />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
