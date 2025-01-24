import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
const [isScrolled, setIsScrolled] = useState(false);
const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-white shadow-lg"
          : "bg-white/30 backdrop-blur-md text-black"
      }`}
    >
      <div
        className={`${navbarBackground} container mx-auto flex items-center justify-between py-4 px-7`}
      >
        <h1 className="text-lg font-bold">Mi Portafolio</h1>

        {/* Links para pantallas grandes */}
        {isAboveMediumScreens ? (
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-secondary">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-secondary">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        ) : (
          <button
            className="rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 " />
          </button>
        )}
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-white">
          {/* Ícono para cerrar el menú */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Ítems del menú */}
          <div className="flex flex-col items-center gap-10 text-lg">
            <a
              href="#about"
              className="hover:text-secondary"
              onClick={() => setIsMenuToggled(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-secondary"
              onClick={() => setIsMenuToggled(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-secondary"
              onClick={() => setIsMenuToggled(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
