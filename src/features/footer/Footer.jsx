import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-[#F0FDFE] py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Eletu Usman Olaseni. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Eletu-maker" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0EA5E9] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-eletu-236b66313" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0EA5E9] transition"
          >
            <FaLinkedin />
          </a>
          
          <a
            href="https://wa.me/2349134969393"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14B8A6] transition"
          >
            <FaWhatsapp />
          </a>
          
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Usmaneletu2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14B8A6] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
