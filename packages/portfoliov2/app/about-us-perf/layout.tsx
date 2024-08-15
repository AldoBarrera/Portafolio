import "./globals.css";
import Nav, { mockNav } from "@/app/ui/components/Common/Nav"
import Footer from "@/app//ui/components/Common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav {...mockNav}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
