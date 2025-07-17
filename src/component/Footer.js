/* eslint-disable @next/next/no-img-element */
// app/components/Footer.jsx
"use client";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base md:place-items-center">
        {/* Left Column - Logo + Description */}
        <div>
          <img src="/Images/footer-logo.png" alt="Logo" className="w-52 mb-4" />
          <p>
            Dr. Hemendra Agarwal is recognized as one of the best orthopedic
            doctors in Jaipur, offering expertise in knee replacement,
            arthroscopy, sports injury treatment, and complex trauma surgeries.
            With clinics in Vaishali Nagar and practice at SMS Hospital Jaipur,
            Dr. Agarwal ensures accessible and effective orthopedic care for
            all.
          </p>
          <div className="flex gap-4 mt-8 text-xl">
            <a
              href="https://www.youtube.com/@DrHemendraOrthopedic"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a href="https://wa.me/919210696405" target="_blank">
              <FaWhatsapp />
            </a>
            <FaInstagram />
            <FaLinkedinIn />
            <FaFacebookF />
          </div>
        </div>

        {/* Center Column - Pages */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Pages</h3>
          <ul className="flex flex-col space-y-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/expertise">Expertise</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/clinic">Clinics</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>

        {/* Right Column - Get In Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Get In Touch</h3>
          <p className="mb-3">
            <strong>Pratap Nagar Clinic</strong> <br />
            183/82, Rana Sanga Marg, Sector 18, Pratap Nagar, Jaipur, Rajasthan
            302033
            <br />
            <strong>Timing:</strong> Monday to Saturday | 4:00 PM - 6:00 PM
          </p>
          <p className="mb-3">
            <strong>Mahapura Clinic</strong> <br />
            Villa 19, balaji mandir, MANGLAM ARPAN, near mohanpura, Hajiwala,
            Mohanpura, Rajasthan 302029
            <br />
            <strong>Timing:</strong> Monday to Saturday | 4:00 PM - 6:00 PM
          </p>
          <p>
            <strong>SMS Hospital Jaipur</strong> <br />
            Jawahar Lal Nehru Marg, Ashok Nagar, Jaipur, Rajasthan 302001
            <br />
            <strong>Timing:</strong> Monday to Saturday | 10:00 AM - 3:00 PM
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm border-t border-[] mt-10 pt-4">
        © Design & Developed by{" "}
        <span className="text-[#197d85] font-semibold">Yashik Yadav & Co.</span>
      </div>
    </footer>
  );
}
