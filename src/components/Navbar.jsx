import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar({
    links = [],
    scrollToSection,
    navBgOpacity,
    navBackdropBlur,
    navBorderOpacity
    }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const renderLink = (link, index, isMobile = false) => {

        const baseClass = isMobile
        ? "hover:text-neonGreen transition-colors"
        : "hover:text-neonGreen transition-colors cursor-pointer";

        if (link.type === "scroll") {
        return (
            <a
            key={index}
            href={`#${link.target}`}
            onClick={(e) => {
                scrollToSection(e, link.target);
                if (isMobile) setMenuOpen(false);
            }}
            className={baseClass}
            >
            {link.label}
            </a>
        );
        }

        if (link.type === "route") {
        return (
            <Link
            key={index}
            to={link.to}
            onClick={() => isMobile && setMenuOpen(false)}
            className={baseClass}
            >
            {link.label}
            </Link>
        );
        }

        if (link.type === "button") {
        return (
            <a
            key={index}
            href="#"
            className="bg-neonGreen text-black px-4 py-1 font-bold rounded-sm hover:brightness-110 transition-all cursor-not-allowed"
            >
            {link.label}
            </a>
        );
        }

    };

    return (
        <>
        <motion.nav
            className="fixed w-full top-0 z-50 py-4 px-6 flex justify-between items-center transition-all duration-300"
            style={{
            backgroundColor: navBgOpacity,
            backdropFilter: navBackdropBlur,
            borderBottom: navBorderOpacity
            }}
        >

            {/* Logo */}
            <div className="flex items-center gap-3">
            <Link to="/">
                <img
                src="/images/Roboragepal.png"
                alt="ROBORAGE"
                className="h-16 md:h-20 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
                />
            </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider text-gray-300">
            {links.map((link, index) => renderLink(link, index))}
            </div>

            {/* Hamburger */}
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-neonGreen hover:scale-110 transition-transform"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            </button>

        </motion.nav>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="md:hidden fixed top-[80px] left-0 w-full bg-black border-t border-neonGreen/30 px-6 py-6 flex flex-col gap-6 text-gray-300 font-semibold tracking-wider z-40">

            {links.map((link, index) =>
                renderLink(link, index, true)
            )}

            </div>
        )}
        </>
    );
}

export default Navbar;