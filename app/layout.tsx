import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DialogProvider } from "./ui/context/DialogContext";
import Layout from "./ui/layouts/Layout";
import TanstackQueryProvider from "./ui/providers/TanstackQueryProvider";
import StoreProvider from "./ui/providers/StoreProvider";

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
        <StoreProvider>
          <DialogProvider>
            <TanstackQueryProvider>
              <Layout>
                {children}
              </Layout>
            </TanstackQueryProvider>
          </DialogProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
