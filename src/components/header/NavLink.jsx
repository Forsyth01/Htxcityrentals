import React from "react";

export default function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="sm:text-base tracking-tighter sm:text-gray-800 text-2xl uppercase font-medium hover:text-orange-600 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
