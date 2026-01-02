import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-5 flex justify-between items-center py-4">
                {/* Logo or Brand */}
                <div className="text-2xl font-bold text-blue-600">nxco</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)} // close menu on click
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
