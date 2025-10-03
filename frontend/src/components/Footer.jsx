import React from "react";

function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Darul Uloom Alamdar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
