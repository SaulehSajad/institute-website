import React, { useState } from "react";

function Navbar({ instituteName }) {
  const [open, setOpen] = useState(false);

  const navStyle = {
    background:
      "linear-gradient(120deg, rgba(255,255,255,0.8), rgba(245,245,245,0.7))",
    backdropFilter: "saturate(120%) blur(6px)",
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#faculty", label: "Faculty" },
    { href: "#admission", label: "Admission" },
    { href: "#about", label: "About Us" },
    { href: "#support", label: "Support" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-40" style={navStyle}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo instituteName={instituteName} />
        <DesktopNav links={navLinks} />
        <MobileNavToggle open={open} setOpen={setOpen} />
      </nav>
      <MobileMenu open={open} links={navLinks} />
    </header>
  );
}

const Logo = ({ instituteName }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-lg">
      <span className="font-semibold text-gray-800">DUA</span>
    </div>
    <div>
      <div className="font-semibold text-gray-900">{instituteName}</div>
      <div className="text-xs text-gray-500 -mt-1">
        KNOWLEDGE • FAITH • GUIDENCE
      </div>
    </div>
  </div>
);

const DesktopNav = ({ links }) => (
  <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
    {links.map((link) => (
      <a key={link.href} href={link.href} className="hover:text-gray-900">
        {link.label}
      </a>
    ))}
  </div>
);

const MobileNavToggle = ({ open, setOpen }) => (
  <div className="md:hidden">
    <button
      aria-label="Toggle navigation"
      onClick={() => setOpen((s) => !s)}
      className="p-2 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-lg"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12H20"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 18H20"
          stroke="#424242"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  </div>
);

const MobileMenu = ({ open, links }) =>
  open && (
    <div className="md:hidden px-4 pb-4">
      <div className="flex flex-col gap-3 text-gray-700 font-medium">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

export default Navbar;
