import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DialogProvider } from "./ui/context/DialogContext";
import Layout from "./ui/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currency conversion rate calculator",
  description: "By Johnson Chen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DialogProvider>
          <Layout>
            {children}
          </Layout>
        </DialogProvider>
      </body>
    </html>
  );
}
