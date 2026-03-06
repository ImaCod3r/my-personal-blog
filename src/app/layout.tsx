import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog - Edson Rodrigues",
  description: "Espaço dedicado aos meus pensamentos e aprendizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} antialiased flex justify-center`}
      >
        <div className="mt-10 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
