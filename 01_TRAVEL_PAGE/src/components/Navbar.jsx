import React, { useState } from "react";
import assets from "../assets/assets";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Destinations" },
  { to: "/activities", label: "Activities" },
  { to: "/usd", label: "USD" },
  { to: "/signup", label: "Sign up" },
];

const linkClass = ({ isActive }) =>
  `hover:text-primary transition-all duration-300 active:scale-95 text-sm ${
    isActive ? "text-primary" : "text-gray-900"
  }`;

const loginClass =
  "py-2 px-4 bg-primary rounded-md text-white text-sm text-center active:scale-95 transition-all duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white relative">
      <div className="flex items-center justify-between gap-4 mx-4 sm:mx-8 lg:mx-20 py-3">
        {/* Left: logo + desktop search */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-28 sm:w-40 shrink-0">
            <img className="w-full object-cover" src={assets.logo} alt="logo" />
          </div>
          <div className="hidden lg:flex flex-1 max-w-md items-center justify-between gap-4 border border-gray-300 py-2 px-4 rounded-md">
            <input
              className="outline-0 flex-1"
              type="text"
              placeholder="Search destinations or activities"
            />
            <IoSearch
              size={20}
              className="text-gray-500 cursor-pointer active:scale-95"
            />
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/login" className={loginClass}>
            Log in
          </NavLink>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-gray-900 cursor-pointer active:scale-95"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 px-4 sm:px-8 pb-4">
          {/* Search (mobile/tablet e desktop search hidden thake) */}
          <div className="flex lg:hidden items-center justify-between gap-4 border border-gray-300 py-2 px-4 rounded-md mb-4">
            <input
              className="outline-0 flex-1 min-w-0"
              type="text"
              placeholder="Search destinations or activities"
            />
            <IoSearch size={20} className="text-gray-500 cursor-pointer" />
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className={loginClass}
              onClick={() => setOpen(false)}
            >
              Log in
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;