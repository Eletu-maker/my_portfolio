import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-[#0F0F0F] sticky top-0 z-50 shadow-[0_4px_12px_-2px_rgba(79,70,229,0.7)] hover:shadow-[0_6px_18px_-2px_rgba(79,70,229,0.9)] backdrop-blur-md bg-[#0F0F0F]/95 border-b border-[#4F46E5]/30">
      <motion.a
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.05, 1],
          textShadow: [
            "0 0 0px rgba(79, 70, 229, 0.5)",
            "0 0 15px rgba(79, 70, 229, 0.9)",
            "0 0 0px rgba(79, 70, 229, 0.5)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        className="text-[#4F46E5] text-lg sm:text-xl font-bold tracking-wide cursor-pointer whitespace-nowrap"
        whileHover={{
          scale: 1.1,
          color: "#4F46E5",
          textShadow: "0 0 20px rgba(79, 70, 229, 1)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        &lt;/&gt; I_AM USMAN
      </motion.a>

      <div className="hidden md:flex">
        <NavBar />
      </div>

      <div className="md:hidden">
        <motion.button
          onClick={toggleMenu}
          className="text-[#4F46E5] text-3xl focus:outline-none bg-[#06B6D4]/10 rounded-full p-2 backdrop-blur-sm border border-[#4F46E5]/30 shadow-[0_0_10px_rgba(79,70,229,0.3)]"
          whileHover={{
            scale: 1.2,
            rotate: [0, -15, 15, 0],
            color: "#4F46E5",
            boxShadow: "0 0 20px rgba(79, 70, 229, 0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      <motion.div
        className={`fixed inset-0 z-[100] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>

        <motion.div
          className="absolute left-0 top-0 h-full w-64 backdrop-blur-lg p-6 shadow-2xl z-[100]"
          initial={{ x: -100 }}
          animate={{ x: isOpen ? 0 : -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="mb-9">
            <h2 className="text-[#4F46E5] text-xl font-bold">Navigation</h2>
          </div>
          <NavBar onItemClick={() => setIsOpen(false)} />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
