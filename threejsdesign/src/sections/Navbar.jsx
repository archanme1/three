import { useState } from "react";
import { navLinks } from "../constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinks = () => {};

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map((item) => (
          <li key={item.id} className="nav-li">
            <a
              href={`/${item.href}`}
              className="nav-li_a"
              onClick={handleNavLinks}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between py-5 mx-auto c-space ">
          <a
            href="/"
            className="text-white-700 font-semibold text-xl hover:text-white transition-colors"
          >
            Archan
          </a>
          <button
            onClick={handleIsOpen}
            className="text-white-600 hover:text-white focus:outline-none sm:hidden flex"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-6 h-6 "
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      {/* for mobile nav  */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <NavItems />
      </div>
    </header>
  );
};
