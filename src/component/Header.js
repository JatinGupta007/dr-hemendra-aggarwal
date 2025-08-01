/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/component/ui/sheet";

const expertiseMenu = [
  {
    title: "Joint Replacement Surgery",
    subItems: [
      "Total & Partial Knee Replacement",
      "Hip Replacement Surgery",
      "Shoulder & Elbow Replacement",
      "Reverse Shoulder Replacement",
      "Revision Joint Replacement Surgeries",
      "Painless & Quick Recovery Joint Surgery",
    ],
  },
  {
    title: "Arthroscopy - Keyhole Surgery",
    subItems: [
      "Knee Arthroscopy (for Meniscus, ACL, PCL)",
      "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
      "Ankle, Wrist, & Elbow Arthroscopy",
      "Diagnostic & Corrective Keyhole Surgery",
    ],
  },
  {
    title: "Sports Injury & Ligament Reconstruction",
    subItems: [
      "ACL Or PCL Reconstruction",
      "Meniscus Repair & Debridement",
      "Shoulder Dislocation Surgery",
      "Labral Tear Repairs",
      "Sports Rehab & Return-to-Play Guidance",
    ],
  },
  {
    title: "Fracture & Trauma Surgery",
    subItems: [
      "Open & Closed Reduction",
      "Internal Fixation (Plates, Screws, Rods)",
      "Geriatric & Pediatric Fracture Management",
      "Complex Polytrauma Surgeries",
      "Non-healing Fracture & Revision Surgery",
    ],
  },
  {
    title: "Shoulder, Elbow & Upper Limb Surgeries",
    subItems: [
      "Recurrent Shoulder Dislocations",
      "Rotator Cuff Tears",
      "Tennis Elbow & Golfers Elbow",
      "Elbow Ligament Repair & Realignment",
      "Frozen Shoulder",
    ],
  },
  {
    title: "Foot, Ankle, Hand & Wrist Procedures",
    subItems: [
      "Carpal Tunnel Syndrome",
      "Plantar Fasciitis",
      "Flat Foot, Bunions, and Toe Deformities",
      "Ankle Sprains & Instability",
      "Ganglion Cyst Removal",
      "Trigger Finger Release",
    ],
  },
];

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 px-6 flex items-center justify-between lg:px-20 py-6">
      <div className="flex items-center">
        <img src="/Images/just-logo.png" width={80} height={28} alt="logo" />
        <div className="flex-col leading-4 text-sm">
          <p className="border-b pb-1 border-black">Dr. Hemendra Agrawal</p>
          <p>Orthopedic Surgeon Jaipur</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-12 text-lg ml-auto">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <div className="relative group/parent">
          <Link
            href="/expertise"
            className="flex items-center gap-1 cursor-pointer text-black relative z-50 py-2"
          >
            Expertise
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/parent:rotate-180" />
          </Link>

          {/* Expertise Dropdown */}
          <div className="absolute top-full -left-40 hidden w-75 h-110 bg-white shadow-2xl rounded-xl group-hover/parent:block z-40">
            <ul className="py-2 text-sm text-gray-800 w-75">
              {expertiseMenu.map((menu, idx) => (
                <li key={idx} className="relative group flex items-center">
                  <Link
                    href={`/expertise/${menu.title.replace(/\s+/g, "-")}`}
                    className="px-5 py-6 hover:bg-[#f1f5f9] hover:text-[#197d85] flex items-center justify-between w-full"
                  >
                    {menu.title}
                    <ChevronRight
                      size={18}
                      className="hidden group-hover:inline"
                    />
                  </Link>
                  <ul
                    style={{ top: `-${idx * 68 + 7}px` }}
                    className="absolute left-full space-y-3 hidden w-72 h-110 py-2 bg-white shadow-xl rounded-xl group-hover:block z-50"
                  >
                    {menu.subItems.map((item, i) => {
                      const href = `/expertise/${menu.title.replace(
                        /\s+/g,
                        "-"
                      )}/${item.replace(/\s+/g, "-")}`;

                      return (
                        <Link
                          key={i}
                          href={href}
                          className="block hover:bg-[#f1f5f9] hover:text-[#197d85]"
                        >
                          <li className="p-5">{item}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/blog">Blog</Link>
        <Link href="/clinics">Clinics</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile Menu */}
      <div className="flex items-center gap-1 md:gap-7 pt-2">
        <Sheet>
          <SheetTrigger>
            <Menu className="lg:hidden" size={45} />
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-r from-[#d7f7f9] to-[#f1f3e0] min-w-screen min-h-screen">
            <SheetHeader>
              <SheetTitle className="border-b-2 border-gray-300 px-2 py-3">
                <div className="flex items-center">
                  <img
                    src="/Images/just-logo.png"
                    width={80}
                    height={28}
                    alt="logo"
                  />
                  <div className="flex-col leading-4 text-sm text-gray-600">
                    <p className="border-b pb-1 border-black">
                      Dr. Hemendra Agrawal
                    </p>
                    <p>Orthopedic Surgeon Jaipur</p>
                  </div>
                </div>
              </SheetTitle>

              <SheetDescription asChild className="p-6">
                <nav className="lg:hidden flex flex-col mb-12 space-y-3 text-xl">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <div>
                    <Link href="/expertise" className="flex items-center gap-2">
                      <p className="text-black font-medium mb-1">Expertise</p>
                      <ChevronDown size={18} />
                    </Link>
                    <ul className="bg-gradient-to-r from-[#197d85]/  rounded-lg text-sm">
                      {expertiseMenu.map((menu, idx) => (
                        <li key={idx}>
                          <Link
                            href={`/expertise/${menu.title.replace(
                              /\s+/g,
                              "-"
                            )}`}
                            className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                          >
                            {menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/blog">Blog</Link>
                  <Link href="/clinics">Clinics</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
