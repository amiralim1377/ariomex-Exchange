import Header from "@/components/Header";
import "./globals.css";
import vazirmatn from "@/fonts";
import Footer from "@/components/Footer";
import FooterCopyright from "@/components/Footer/FooterCopyright/FooterCopyright";
import { GlobalProvider } from "@/providers/GlobalProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazirmatn.className}>
        <GlobalProvider>
          <Header />
          <main className="">{children}</main>
          <Footer />
          <FooterCopyright />
        </GlobalProvider>
      </body>
    </html>
  );
}
