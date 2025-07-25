import AOSInitializer from "@/component/AOS"; 
import "./globals.css";

export const metadata = {
  title: "Dr. Hemendra Agarwal",
  description:
    "Dr. Hemendra Agarwal is a leading orthopedic surgeon in Jaipur specializing in joint replacement, arthroscopy, and sports injury treatments. Book your appointment today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/weblogo.png" />
      </head>
      <body className="overflow-x-hidden">
        <AOSInitializer /> 
        {children}
      </body>
    </html>
  );
}
