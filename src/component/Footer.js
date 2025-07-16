/* eslint-disable @next/next/no-img-element */
// app/components/Footer.jsx
"use client";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base md:place-items-center">
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
            <FaWhatsapp />
            <FaInstagram />
            <FaLinkedinIn />
            <FaFacebookF />
          </div>
        </div>

        {/* Center Column - Pages */}
        <div>
          <h3 className="font-semibold text-lg mb-6 ">Pages</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Expertise</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Clinics</li>
          </ul>
        </div>

        {/* Right Column - Get In Touch */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Get In Touch</h3>
          <p className="mb-3">
            <strong>Vaishali Nagar Clinic</strong> <br />
            B-7, Sawai Ram Singh Rd, Panch Batti, Ashok Nagar, Jaipur, Rajasthan
            302001
            <br />
            <strong>Timing:</strong> 10 AM to 3 PM (BY APPOINTMENT)
          </p>
          <p>
            <strong>SMS Hospital Jaipur</strong> <br />
            1st floor, 28 Shiv Shakti Nagar, Pandit TN Mishra Marg, near Indo
            Bharat School Pundit, Nirman Nagar, Jaipur, Rajasthan 302019
            <br />
            <strong>Timing:</strong> 4 PM to 6 PM (BY APPOINTMENT)
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
