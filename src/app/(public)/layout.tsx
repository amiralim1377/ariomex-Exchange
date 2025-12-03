import Header from "@/components/Header";
import "../globals.css";
import vazirmatn from "@/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
