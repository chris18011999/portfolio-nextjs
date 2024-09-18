import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandGitlab, IconBrandLinkedin, IconHome, IconTerminal2 } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Chris Meurink | Home",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/chris-meurink-aa9130a4/",
    },
    {
      title: "GitLab",
      icon: (
        <IconBrandGitlab className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://gitlab.com/cmeurink",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/chris18011999",
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingDock
          desktopClassName="fixed bottom-12 left-[50%] -translate-x-[50%] z-50"
          mobileClassName="fixed bottom-4 right-4"
          items={links}
        />
      </body>
    </html>
  );
}
