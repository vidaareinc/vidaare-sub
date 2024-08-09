import { useState } from "react";
import "../../styles/styles.css";
import EmailModal from "../modals/EmailModal";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 md:p-8 bg-transparent relative">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center text-2xl md:text-3xl text-white"
      >
        <img src={logo} alt="Logo" className="mr-2 w-8"/>
        <p className="font-polaris">vidaare</p>
      </Link>

      {/* Menu Button for Small Screens */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="block sm:hidden w-6 h-6 text-white cursor-pointer"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* Desktop Button */}
      <button
        className="hidden sm:inline-block bg-transparent text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        Let&apos;s Get Started
      </button>

      {/* Modal for email */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 rounded-lg text-white shadow-lg bg-gray-800 bg-opacity-90 z-50 sm:hidden">
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full px-4 py-2 text-left hover:bg-gray-700 rounded-t-lg"
          >
            Let&apos;s Get Started
          </button>
        </div>
      )}
    </header>
  );
}
