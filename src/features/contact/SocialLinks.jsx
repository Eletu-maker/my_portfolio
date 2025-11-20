import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/Eletu-maker",
      bgColor: "bg-[#0F172A]",
      hoverBgColor: "bg-[#0F172A]/90",
      textColor: "text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/usman-eletu-236b66313",
      bgColor: "bg-[#0EA5E9]/10",
      hoverBgColor: "bg-[#0EA5E9]/20",
      textColor: "text-[#0EA5E9]",
    },

    {
      name: "Gmail",
      icon: <FaEnvelope className="text-xl" />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=Usmaneletu2@gmail.com",
      bgColor: "bg-white",
      hoverBgColor: "bg-gray-100",
      textColor: "text-[#EA4335]",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-xl" />,
      url: "https://wa.me/2349134969393",
      bgColor: "bg-[#14B8A6]/10",
      hoverBgColor: "bg-[#14B8A6]/20",
      textColor: "text-[#14B8A6]",
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center sm:items-start text-center sm:text-left"
      variants={itemVariants}
    >
      <motion.h3
        className="text-lg font-semibold text-[#0EA5E9] mb-4"
        variants={itemVariants}
      >
        Follow Me
      </motion.h3>
      <motion.div
        className="flex flex-wrap justify-center sm:justify-start gap-4"
        variants={containerVariants}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-3 ${link.bgColor} hover:${link.hoverBgColor} ${link.textColor} rounded-md transition duration-300`}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: link.hoverBgColor.replace("bg-", ""),
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {link.icon}
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;
