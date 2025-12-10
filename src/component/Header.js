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
      "Total Knee Replacement",
      "Partial Knee Replacement",
      "Hip Replacement",
      "Elbow Replacement",
      "Shoulder Replacement",
      "Painless and Quick Recovery Joint Replacement",
    ],
  },

  {
    title: "Arthroscopy - Keyhole Surgery",
    subItems: [
      "Knee Arthroscopy - Meniscus Repair",
      "Knee Arthroscopy - Meniscus Debridement",
      "Knee Arthroscopy - ACL Reconstruction",
      "Knee Arthroscopy - PCL Reconstruction",
      "Shoulder Arthroscopy - Rotator Cuff Repair",
      "Shoulder Arthroscopy - Labrum Repair",
      "Ankle Arthroscopy",
      "Wrist Arthroscopy",
      "Elbow Arthroscopy",
      "Diagnostic Arthroscopy",
      "Corrective Arthroscopy",
    ],
  },

  {
    title: "Sports Injury and Ligament Reconstruction",
    subItems: [
      "ACL Reconstruction",
      "PCL Reconstruction",
      "Meniscus Repair",
      "Meniscus Debridement",
      "Shoulder Dislocation",
      "Labral Tear Repair",
      "Sports Rehabilitation",
      "Return-to-Play Guidance",
    ],
  },

  {
    title: "Fracture and Trauma Surgery",
    subItems: [
      "Open Reduction",
      "Closed Reduction",
      "Internal Fixation with Plates",
      "Internal Fixation with Nails",
      "Internal Fixation with Screws",
      "Pediatric Fracture Management",
      "Geriatric Fracture Management",
      "Complex Polytrauma",
      "Non-Healing Fracture",
      "Fracture Revision",
    ],
  },

  {
    title: "Shoulder Elbow and Upper Limb Surgeries",
    subItems: [
      "Recurrent Shoulder Dislocation",
      "Rotator Cuff Tear Repair",
      "Tennis Elbow",
      "Golfers Elbow",
      "Elbow Ligament Repair",
      "Elbow Realignment",
      "Frozen Shoulder",
    ],
  },

  {
    title: "Foot Ankle Hand and Wrist Procedures",
    subItems: [
      "Carpal Tunnel Release",
      "Plantar Fasciitis",
      "Flat Foot Correction",
      "Bunion Correction",
      "Toe Deformity Correction",
      "Ankle Sprain",
      "Ankle Instability",
      "Ganglion Cyst Removal",
      "Trigger Finger Release",
    ],
  },
];


export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 px-6 flex items-center justify-between lg:px-20 py-6">
      <Link href="/" className="flex items-center">
        <img src="/Images/nav-logo.png" width={300} height={28} alt="logo" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-16 text-lg ml-auto">
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
          <div className="absolute top-full -left-40 hidden w-75 bg-white shadow-2xl rounded-xl group-hover/parent:block z-40">
            <ul className="text-sm text-gray-800 w-75">
              {expertiseMenu.map((menu, idx) => (
                <li key={idx} className="relative group flex items-center">
                  <Link
                    href={`/expertise/${menu.title.replace(/\s+/g, "-")}`}
                    className="px-3 py-4 border-b border-gray-300 hover:bg-[#197d85]/30 font-semibold flex items-center justify-between w-full"
                  >
                    {menu.title}
                    <ChevronRight
                      size={18}
                      className="hidden group-hover:inline"
                    />
                  </Link>
                  <ul
                    style={{ top: `-${idx * 53 }px` }}
                    className="absolute left-full hidden w-72 bg-white shadow-xl rounded-xl group-hover:block z-50"
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
                          className="block hover:bg-[#197d85]/20"
                        >
                          <li className="p-4 font-semibold border-b border-gray-300">{item}</li>
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
