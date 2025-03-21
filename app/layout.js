import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import SessionWrapper from "@/components/SessionWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIGMA",
  description: "This is my first app Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
     
      <body>
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      <Navbar/>
      <div className="container mx-auto min-h-[85vh">
        {children}
        </div>
        <Footer/>
       
      </body>
     
    </html>
  );
}
