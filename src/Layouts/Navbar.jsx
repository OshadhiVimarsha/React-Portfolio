import { useState, createElement } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      {/* Menu toggle button */}
      <div
        className="cursor-pointer fixed top-6 left-6 z-[999] rounded-lg bg-white/60 p-2 sm:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={28} />
      </div>

      {/* Navbar icons */}
      <nav
        className={`fixed z-[998] flex items-center gap-3 sm:gap-5 
          bg-slate-200/70 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md rounded-full 
          text-dark_primary shadow-md duration-300 transition-all
          ${showMenu ? "bottom-6 opacity-100" : "bottom-[-100%] opacity-0"}
          sm:bottom-6 sm:opacity-100`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-lg sm:text-xl p-2 sm:p-2.5 rounded-full transition-all duration-200 
              ${i === active ? "bg-dark_primary text-white" : "hover:bg-dark_primary hover:text-white"}`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
