import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sign in | Workflow AI",
  description: "Compare AI agents. Find the best approach for your task.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        roboto.variable,
        roboto.className,
      )}
    >
      <head>
        <style>{`
          html {
            scrollbar-width: none;
          }

          html::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
