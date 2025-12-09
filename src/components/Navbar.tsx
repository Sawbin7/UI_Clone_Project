import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavLinkItem {
  link: string;
  value: string;
}

const navLinks: NavLinkItem[] = [
  { link: "/", value: "Home" },
  { link: "/about", value: "About" },
  { link: "/services", value: "Services" },
  { link: "/projects", value: "Projects" },
  { link: "/contact", value: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = (isActive: boolean) =>
    isActive
      ? "font-bold text-[#fb2056] hover:underline hover:decoration-black"
      : "text-white hover:underline hover:decoration-black";

  return (
    <nav className="container mx-auto px-4 py-4 absolute  ">
      {/* Top section: logo + hamburger */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src="/Images/logo.png" alt="Logo" className="h-8" />

        {/* Hamburger button (mobile only) */}
        <button
          className="text-white p-2 rounded bg-[#fb2056] block tab:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop menu (tab and above) */}
        <ol className="hidden tab:flex gap-7 items-center">
          {navLinks.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) => activeClass(isActive)}
            >
              {item.value}
            </NavLink>
          ))}
          <Button value="TAKE ACTION" />
        </ol>
      </div>

      {/* Mobile menu (visible when isOpen is true, hidden on tab and above) */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 tab:hidden items-center bg-gray-600 p-4 rounded-xl opacity-90">
          {navLinks.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) => activeClass(isActive)}
            >
              {item.value}
            </NavLink>
          ))}
          <Button value="TAKE ACTION" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
