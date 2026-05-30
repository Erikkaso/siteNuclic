import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logoNuclic from "../assets/images/logo-nuclic.svg";
import backgroundTexture from "../assets/textures/background-texture.jpg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Notícias", to: "/noticias" },
  { label: "Contato", to: "/contato" },
  { label: "ExpoIoT", to: "/expoiot", featured: true },
];

function getNavClass(isActive: boolean, featured?: boolean) {
  if (featured) {
    return [
      "expoiot-nav-glow focus-ring mx-2 flex h-[42px] items-center justify-center rounded-lg border border-white/90 px-4 text-center text-lg font-bold transition",
      isActive
        ? "bg-white text-[#075b75]"
        : "bg-white/95 text-[#075b75] hover:bg-white hover:-translate-y-0.5",
    ].join(" ");
  }

  return [
    "focus-ring flex h-full items-center justify-center rounded-md px-3 py-2 text-center text-lg font-normal transition",
    isActive
      ? "bg-white/25 text-[#004f63]"
      : "text-[#006b83] hover:bg-white/15 hover:text-[#004f63]",
  ].join(" ");
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-2 z-50 px-2 transition duration-300 max-lg:top-0 max-lg:px-0 ${
        hasScrolled
          ? "drop-shadow-[0_8px_24px_rgba(0,62,82,0.12)]"
          : ""
      }`}
    >
      <nav
        className="relative z-50 mx-auto flex h-[52px] w-full max-w-[1148px] items-center justify-between rounded-md border border-white/80 bg-white/30 px-3 shadow-glow backdrop-blur max-lg:h-[88px] max-lg:rounded-none max-lg:border-0 max-lg:bg-transparent max-lg:shadow-none max-lg:backdrop-blur-0"
        aria-label="Navegação principal"
      >
        <NavLink
          to="/"
          className="focus-ring flex h-full w-28 items-center justify-center rounded-md max-lg:ml-3"
          aria-label="Ir para a Home do NUCLIC"
        >
          <img src={logoNuclic} alt="NUCLIC" className="h-11 w-auto" />
        </NavLink>

        <div className="hidden h-full flex-1 grid-cols-6 items-center lg:grid">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => getNavClass(isActive, item.featured)}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring mr-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#006b83] text-white lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div
          className="fixed inset-0 z-40 bg-cover bg-center px-6 pb-8 pt-32 lg:hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(37,150,190,0.92), rgba(22,112,144,0.9)), url(${backgroundTexture})`,
          }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
            <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => getNavClass(isActive, item.featured)}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
