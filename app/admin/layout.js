import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Admin: SIGMA",
  description: "Admin Pages:This is my first app Next.js",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span>Admin Navbar</span>
        {children}
        </>
  );
}
