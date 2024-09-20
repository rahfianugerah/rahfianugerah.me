import localFont from "next/font/local";
import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Import custom fonts
const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Naufal Rahfi Anugerah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header>
          <MyNavbar />
        </header>
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className="flex-shrink-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
