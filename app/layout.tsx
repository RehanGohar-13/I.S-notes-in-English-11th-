import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import MobileDrawer from "@/components/MobileDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Islamiat 11th Class — Complete Notes",
  description:
    "Complete notes for Islamiat (Compulsory) Class 11 based on National Curriculum 2023 (Revised) by PECTAA, Punjab.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📗</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#047857",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <div className="flex pt-14">
          <Sidebar />
          <main className="flex-1 min-h-[calc(100vh-3.5rem)]">{children}</main>
        </div>
        <Footer />
        <MobileNav />
        <MobileDrawer />
      </body>
    </html>
  );
}
