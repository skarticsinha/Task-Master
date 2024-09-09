import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "taskmaster.ai",
  description: "Task Master - AI integreted todolist that perfectly mannage your day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ConvexClientProvider>{children}</ConvexClientProvider></body>
    </html>
  );
}
