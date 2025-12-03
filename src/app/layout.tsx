import Header from "@/components/Header/Header";
import "./globals.css";
import vazirmatn from "@/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
