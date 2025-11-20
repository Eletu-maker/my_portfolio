import { motion } from "framer-motion";
import HeroSection from "../features/hero/HeroSection";
import Skills from "../features/skills/Skills";
import ProjectLists from "../features/projects/ProjectLists";
import About from "../features/about/About";
import ContactMe from "../features/contact/ContactMe";

const sections = [
  { id: "home", component: <HeroSection /> },
  { 
    id: "resume-button", 
    component: (
      <div className="flex justify-center py-8">
        <motion.a
          href="/Usman Eletu frontend cv.pdf"
          download="Usman Eletu frontend cv.pdf"
          className="relative overflow-hidden bg-[#4F46E5] text-white px-6 py-3 rounded-full font-medium
                    before:absolute before:inset-0 before:bg-[#4F46E5] before:-translate-x-full
                    before:transition-transform before:duration-500 hover:before:translate-x-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Download Resume</span>
        </motion.a>
      </div>
    )
  },
  { id: "skills", component: <Skills /> },
  { id: "work", component: <ProjectLists /> },
  { id: "about", component: <About /> },
  { id: "contact", component: <ContactMe /> },
];

const Home = () => {
  return (
    <div className="px-5">
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </div>
  );
};

export default Home;