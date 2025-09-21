import React from "react";
import { Link } from "react-router";

export default function Logo({ location }) {
  return location.pathname === "/" ? (
    <a href="#home" className="font-bold text-xl tracking-tight">
      <img src="/logo.png" alt="Logo" className="h-20" />
    </a>
  ) : (
    <Link to="/" className="font-bold text-xl tracking-tight">
      <img src="/logo.png" alt="Logo" className="h-20" />
    </Link>
  );
}
