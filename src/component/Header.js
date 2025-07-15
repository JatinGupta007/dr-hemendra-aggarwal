'use client'

import { useState } from "react";
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
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <header className="bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90 px-6 md:px-20 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/just-logo.png"
            width={80}
            height={28}
            alt="logo"
          />
          <div className="flex flex-col leading-4 text-sm">
            <p className="border-b pb-1 border-black">Dr. Hemendra Agarwal</p>
            <p>Orthopedic Surgeon Jaipur</p>
          </div>
        </div>

        {/* Desktop Menu */}
        
          <input
            className={`text-[white] -left-60 rounded-2xl w-1/2 px-3 py-2 outline-none absolute translate-x-full transition-all duration-500 origin-right ease-in-out bg-black shadow-md z-2 ${
              isOpen
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-75 pointer-events-none"
            }`}
            placeholder="Search"
            type="search"
          />
        
          <nav className="hidden md:flex items-center space-x-10 text-xl">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="#">Expertise</Link>
            <Link href="#">Blog</Link>
            <div className="relative group">
              <button className="flex items-center space-x-1">
                <span>Clinics </span>
                <span className="text-xs">▼</span>
              </button>
              {/* Dropdown (optional) */}
              <div className="absolute top-full hidden group-hover:block bg-white shadow rounded p-2 text-sm z-1">
                <Link href="#" className="block px-2 py-1 hover:bg-gray-100">
                  FAQ
                </Link>
                <Link href="#" className="block px-2 py-1 hover:bg-gray-100">
                  Pricing
                </Link>
              </div>
            </div>
            <Link href="#">Contact</Link>
          </nav>
        

        <div className="flex items-center gap-7 pt-2">
          {isOpen ? (
            <X size={45} onClick={onOpen} />
          ) : (
            <CiSearch onClick={onOpen} size={45} />
          )}

          {/* Mobile Hamburger */}
          <Sheet>
            <SheetTrigger>
              <Menu size={45} />
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-r from-[#197d85]/90 to-[#97a345]/90">
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
                  <div className="flex flex-col space-y-5">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                      <FaCalendarCheck size={20} />
                      Book Appointment
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                      <FaPhoneAlt size={20} />
                      <p>Call Now</p>
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#28D2DF] to-[#197d85]  hover:opacity-80 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-transform hover:scale-105">
                      <FaWhatsapp size={20} />
                      <p>WhatsApp</p>
                    </button>
                  </div>
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
