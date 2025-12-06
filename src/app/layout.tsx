"use client";
import Header from "@/components/Header";
import "./globals.css";
import vazirmatn from "@/fonts";
import Footer from "@/components/Footer";
import FooterCopyright from "@/components/Footer/FooterCopyright/FooterCopyright";
import { ScrollProvider } from "@/context/ScrollContext";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        <ScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="">{children}</main>
            <Footer />
            <FooterCopyright />
          </ThemeProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
