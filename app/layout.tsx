import type { Metadata } from "next";
import Loading from "@/components/loading";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Template-Zast",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <Suspense fallback={<Loading/>}> {children}</Suspense>
  
      </body>
    </html>
  );
}
