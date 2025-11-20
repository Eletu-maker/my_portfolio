import { motion } from "framer-motion";
import {  FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactInfo = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto border border-[#0EA5E9]/20"
      variants={itemVariants}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(14, 165, 233, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col justify-center items-center sm:items-start space-y-3">
        <motion.h3
          className="text-lg font-semibold text-[#0EA5E9]"
          variants={itemVariants}
        >
          Contact Information
        </motion.h3>

        
        <motion.p
          className="text-[#0F172A]/70 flex items-center gap-2 text-center sm:text-left"
          variants={itemVariants}
        >
          <FaEnvelope className="text-[#0EA5E9]" />
          Usmaneletu2@gmail.com
        </motion.p>

        <motion.p
          className="text-[#0F172A]/70 flex items-center gap-2 text-center sm:text-left"
          variants={itemVariants}
        >
          <FaPhoneAlt className="text-[#0EA5E9]" />
          +234 913 496 9393
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
