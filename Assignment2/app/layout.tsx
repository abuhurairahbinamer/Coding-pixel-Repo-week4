import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Country Explorer",
  description: "Explore countries around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("P8 task done with deeper")
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold">
              Country Explorer
            </Link>

            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Countries
            </Link>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}