import "./globals.css";
import vazirmatn from "@/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
