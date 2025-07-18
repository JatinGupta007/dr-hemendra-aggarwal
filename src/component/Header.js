/* eslint-disable @next/next/no-img-element */


import { Menu, X } from "lucide-react"; // You can use react-icons if preferred
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/component/ui/sheet";

export default function Navbar() {

  return (
    <header className="bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 px-6 lg:px-20 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center w-16 md:w-full">
          <img
            src="/Images/just-logo.png"
            width={80}
            height={28}
            alt="logo"
          />
          <div className="flex-col leading-4 hidden md:flex text-sm">
            <p className="border-b pb-1 border-black">Dr. Hemendra Agarwal</p>
            <p>Orthopedic Surgeon Jaipur</p>
          </div>
        </div>
        

        <nav className="hidden lg:flex items-center space-x-10 text-xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="#">Blog</Link>
          <Link href="/clinics">Clinics</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-1 md:gap-7 pt-2">
          

          {/* Mobile Hamburger */}
          <Sheet>
            <SheetTrigger>
              <Menu className="lg:hidden" size={45} />
            </SheetTrigger>
            <SheetContent className="bg-sky-50">
              <SheetHeader>
                <SheetTitle className="border-b-2 border-gray-300">
                  <Image
                    src="/Images/nav-logo.png"
                    alt="doctor"
                    width={200}
                    height={40}
                  />
                </SheetTitle>
                <SheetDescription asChild className="p-6">
                  <section>
                    <nav className="lg:hidden flex flex-col mb-12 space-y-5 text-xl">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/expertise">Expertise</Link>
                      <Link href="/blog">Blog</Link>
                      <Link href="/clinics">Clinics</Link>
                      <Link href="/contact">Contact</Link>
                    </nav>
                  </section>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Menu */}
    </header>
  );
}
