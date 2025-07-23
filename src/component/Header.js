/* eslint-disable @next/next/no-img-element */
import { Menu, ChevronDown } from "lucide-react"; // You can use react-icons if preferred
import Link from "next/link";

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
    <header className="bg-gradient-to-r from-[#197d85]/20 to-[#97a345]/20 px-6 lg:px-20 py-6">
      <div className="flex items-center justify-between lg:min-w-[1385px]">
        <div className="flex items-center">
          <img src="/Images/just-logo.png" width={80} height={28} alt="logo" />
          <div className="flex-col leading-4 text-sm">
            <p className="border-b pb-1 border-black">Dr. Hemendra Agrawal</p>
            <p>Orthopedic Surgeon Jaipur</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 text-lg">
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

            {/* Main Dropdown */}
            <div className="absolute top-full -left-40 hidden w-80 bg-white shadow-xl border border-[#197d85] rounded-lg group-hover/parent:block transition-all duration-300 ease-in-out z-40">
              <ul className="py-2 text-sm text-gray-800 divide-y divide-[#197d85]">
                {/* Joint Replacement */}
                <li className="relative group">
                  <Link
                    href="/expertise/joint-replacement"
                    className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                  >
                    Joint Replacement Surgery
                  </Link>
                  <ul className="absolute left-full py-2 divide-y divide-[#197d85] top-0 hidden w-72 bg-white shadow-lg border border-[#197d85] rounded-lg group-hover:block z-50">
                    {[
                      "Total & Partial Knee Replacement",
                      "Hip Replacement Surgery",
                      "Shoulder & Elbow Replacement",
                      "Reverse Shoulder Replacement",
                      "Revision Joint Replacement Surgeries",
                      "Painless & Quick Recovery Joint Surgery",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/expertise/joint-replacement/${item.replaceAll(
                          " ",
                          "-"
                        )}`}
                      >
                        <li className="px-4 py-2 hover:bg-[#f1f5f9] border-b border-b-[#197d85] text-sm">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>

                {/* Arthroscopy */}
                <li className="relative group">
                  <Link
                    href="/expertise/arthroscopy"
                    className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                  >
                    Arthroscopy - Keyhole Surgery
                  </Link>
                  <ul className="absolute left-full py-2 divide-y divide-[#197d85] top-0 hidden w-72 bg-white shadow-lg border border-[#197d85] rounded-lg group-hover:block z-50">
                    {[
                      "Knee Arthroscopy (for Meniscus, ACL, PCL)",
                      "Shoulder Arthroscopy (for Rotator Cuff, Labrum)",
                      "Ankle, Wrist, and Elbow Arthroscopy",
                      "Diagnostic & Corrective Keyhole Surgery",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/expertise/arthroscopy/${item.replaceAll(
                          " ",
                          "-"
                        )}`}
                      >
                        <li className="px-4 py-2 hover:bg-[#f1f5f9] border-b border-b-[#197d85] text-sm">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>

                {/* Sports Injury */}
                <li className="relative group">
                  <Link
                    href="/expertise/sports-injury"
                    className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                  >
                    Sports Injury & Ligament Reconstruction
                  </Link>
                  <ul className="absolute left-full py-2 divide-y divide-[#197d85] top-0 hidden w-72 bg-white shadow-lg border border-[#197d85] rounded-lg group-hover:block z-50">
                    {[
                      "ACL/PCL Reconstruction",
                      "Meniscus Repair & Debridement",
                      "Shoulder Dislocation Surgery",
                      "Labral Tear Repairs",
                      "Sports Rehab & Return-to-Play Guidance",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/expertise/sports-injury/${item.replaceAll(
                          " ",
                          "-"
                        ).replace('/', 'Or')}`}
                      >
                        <li className="px-4 py-2 hover:bg-[#f1f5f9] border-b border-b-[#197d85] text-sm">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>

                {/* Fracture & Trauma */}
                <li className="relative group">
                  <Link
                    href="/expertise/fracture"
                    className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                  >
                    Fracture & Trauma Surgery
                  </Link>
                  <ul className="absolute left-full py-2 divide-y divide-[#197d85] top-0 hidden w-72 bg-white shadow-lg border border-[#197d85] rounded-lg group-hover:block z-50">
                    {[
                      "Open & Closed Reduction",
                      "Internal Fixation (Plates, Screws, Rods)",
                      "Geriatric & Pediatric Fracture Management",
                      "Complex Polytrauma Surgeries",
                      "Non-healing Fracture & Revision Surgery",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/expertise/fracture/${item.replaceAll(
                          " ",
                          "-"
                        )}`}
                      >
                        <li className="px-4 py-2 hover:bg-[#f1f5f9] border-b border-b-[#197d85] text-sm">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>

                {/* Shoulder & Elbow */}
                <li className="relative group">
                  <Link
                    href="/expertise/shoulder-elbow"
                    className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                  >
                    Shoulder, Elbow & Upper Limb Surgeries
                  </Link>
                  <ul className="absolute left-full py-2 divide-y divide-[#197d85] top-0 hidden w-72 bg-white shadow-lg border border-[#197d85] rounded-lg group-hover:block z-50">
                    {[
                      "Recurrent Shoulder Dislocations",
                      "Rotator Cuff Tears",
                      "Tennis Elbow & Golfers Elbow",
                      "Elbow Ligament Repair & Realignment",
                      "Frozen Shoulder",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/expertise/shoulder-elbow/${item.replaceAll(
                          " ",
                          "-"
                        )}`}
                      >
                        <li className="px-4 py-2 hover:bg-[#f1f5f9] border-b border-b-[#197d85] text-sm">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>

                {/* Foot, Ankle, Hand, Wrist */}
                <li className="relative group/1">
                  <Link
                    href="/expertise/foot-ankle"
                    className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85]"
                  >
                    Foot, Ankle, Hand & Wrist Procedures
                  </Link>
                  <ul className="absolute left-full py-2 divide-y divide-[#197d85] top-0 hidden w-72 bg-white shadow-lg border border-[#197d85] rounded-lg group-hover/1:block z-50">
                    {[
                      "Carpal Tunnel Syndrome",
                      "Plantar Fasciitis",
                      "Flat Foot, Bunions, and Toe Deformities",
                      "Ankle Sprains & Instability",
                      "Ganglion Cyst Removal",
                      "Trigger Finger Release",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/expertise/foot-ankle/${item.replaceAll(
                          " ",
                          "-"
                        )}`}
                      >
                        <li className="px-4 py-2 hover:bg-[#f1f5f9] border-b border-b-[#197d85] text-sm">
                          {item}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>

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
            <SheetContent className="bg-gradient-to-r from-[#9ae0e5] to-[#e5edb1] min-w-screen">
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
                  <section>
                    <nav className="lg:hidden flex flex-col mb-12 space-y-2 text-xl">
                      <Link href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <div className="relative group">
                        {/* Main Link */}
                        <Link
                          href="/expertise"
                          className="flex items-center gap-1 cursor-pointer text-black py-2 focus:outline-none"
                        >
                          Expertise
                          <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                        </Link>

                        {/* Dropdown Menu */}
                        <div className="top-full w-80 bg-gradient-to-r from-[#197d85]/40 to-[#97a345]/40 shadow-xl border border-[#197d85] rounded-lg transition-all duration-300 ease-in-out z-40">
                          <ul className="py-2 text-sm text-gray-800 divide-y divide-[#197d85]">
                            <li>
                              <Link
                                href="/expertise/joint-replacement"
                                className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85] transition-colors"
                              >
                                Joint Replacement Surgery
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/expertise/arthroscopy"
                                className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85] transition-colors"
                              >
                                Arthroscopy - Keyhole Surgery
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/expertise/sports-injury"
                                className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85] transition-colors"
                              >
                                Sports Injury & Ligament Reconstruction
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/expertise/fracture"
                                className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85] transition-colors"
                              >
                                Fracture & Trauma Surgery
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/expertise/shoulder-elbow"
                                className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85] transition-colors"
                              >
                                Shoulder, Elbow & Upper Limb Surgeries
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/expertise/foot-ankle"
                                className="block px-5 py-3 hover:bg-[#f1f5f9] hover:text-[#197d85] transition-colors"
                              >
                                Foot, Ankle, Hand & Wrist Procedures
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
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
    </header>
  );
}
