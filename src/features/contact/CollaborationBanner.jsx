import { motion } from "framer-motion";
import Button from "../../ui/buttons/Button";

const CollaborationBanner = () => {
  return (
    <motion.div
      className="bg-[#14B8A6]/10 text-[#14B8A6] px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-md max-w-full sm:max-w-xl md:max-w-lg mx-auto text-center shadow-lg hover:shadow-xl transition duration-300 border border-[#14B8A6]/20"
      // NEW ANIMATION STYLE
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 90,
        damping: 12,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 25px 30px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.05)",
      }}
    >
      {/* Title */}
      <motion.p
        className="font-extrabold text-lg sm:text-xl md:text-2xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
      >
        🌟 Let's Collaborate! 🌟
      </motion.p>

      {/* Subtitle */}
      <motion.p
        className="font-semibold text-base sm:text-lg md:text-xl mt-1"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        ✅ Available for Work
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-sm sm:text-base md:text-md mt-2 px-2 sm:px-0"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      >
        I'm excited to bring my skills and expertise to your next project! I'm
        currently open to freelance projects and full-time opportunities. Let’s
        build something great together! 🚀
      </motion.p>

      <motion.div
        className="flex justify-center" // 👉 Centers the button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
      >
        <Button
          variant="accent"
          className="mt-6"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get in Touch
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationBanner;
