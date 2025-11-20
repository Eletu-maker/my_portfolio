import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = [
  "text-blue-500",
  "text-red-500",
  "text-green-500",
  "text-purple-500",
  "text-yellow-500",
  "text-pink-500",
  "text-cyan-500",
  "text-orange-500",
];

const messages = [
  {
    line1: "Building Reliable",
    line2: "Software Systems",
    line3: "One Line at a Time",
  },
  {
    line1: "Engineering Code",
    line2: "That Empowers",
    line3: "People and Products",
  },
  {
    line1: "Crafting Solutions",
    line2: "Driven by",
    line3: "Logic and Creativity",
  },
  {
    line1: "Turning Complex",
    line2: "Challenges",
    line3: "Into Simple Designs",
  },
  {
    line1: "Bridging Innovation",
    line2: "With Clean",
    line3: "Engineering Practices",
  },
  {
    line1: "Developing Software",
    line2: "Built for",
    line3: "Performance and Growth",
  },
  {
    line1: "Transforming Code",
    line2: "Into Products",
    line3: "People Trust",
  },
  {
    line1: "Designing Systems",
    line2: "That Scale",
    line3: "With Confidence",
  },
  {
    line1: "Writing Code",
    line2: "That Solves",
    line3: "Real-World Problems",
  },
  {
    line1: "Engineering Products",
    line2: "With Precision",
    line3: "And Purpose",
  },
  {
    line1: "Delivering Software",
    line2: `That’s Stable`,
    line3: "Secure, and Efficient",
  },
  {
    line1: "Creating Tech",
    line2: "That Elevates",
    line3: "Human Experience",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: "easeOut",
    },
  },
};

const HeroH1 = () => {
  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = [
      messages[messageIndex].line1,
      messages[messageIndex].line2,
      messages[messageIndex].line3,
    ];

    if (!isDeleting) {
      if (lineIndex >= currentMessage.length) {
        const pauseTimeout = setTimeout(() => {
          setIsDeleting(true);
          setLineIndex(currentMessage.length - 1);
          setCharIndex(currentMessage[currentMessage.length - 1].length);
        }, 2000);
        return () => clearTimeout(pauseTimeout);
      }

      if (charIndex < currentMessage[lineIndex].length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const updated = [...prev];
            updated[lineIndex] += currentMessage[lineIndex][charIndex];
            return updated;
          });
          setCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(typingTimeout);
      } else {
        const linePause = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(linePause);
      }
    } else {
      if (charIndex > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const updated = [...prev];
            updated[lineIndex] = updated[lineIndex].slice(0, -1);
            return updated;
          });
          setCharIndex((prev) => prev - 1);
        }, 40);
        return () => clearTimeout(deleteTimeout);
      } else {
        if (lineIndex > 0) {
          const linePause = setTimeout(() => {
            setLineIndex((prev) => prev - 1);
            setCharIndex(currentMessage[lineIndex - 1].length);
          }, 300);
          return () => clearTimeout(linePause);
        } else {
          const restartTimeout = setTimeout(() => {
            setIsDeleting(false);
            setDisplayedText(["", "", ""]);
            setLineIndex(0);
            setCharIndex(0);
            setMessageIndex((prev) => (prev + 1) % messages.length);
            setColorIndex((prev) => (prev + 1) % colors.length);
          }, 500);
          return () => clearTimeout(restartTimeout);
        }
      }
    }
  }, [charIndex, lineIndex, messageIndex, isDeleting]);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.p
        className="text-stone-400 uppercase text-sm tracking-widest mb-4 sm:mb-6 text-center lg:text-left"
        variants={itemVariants}
      >
         Software Engineer
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug text-center lg:text-left"
        variants={containerVariants}
      >
        <motion.span
          className="inline-block"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          {displayedText[0]}
        </motion.span>
        <br />

        <motion.span
          className={`${colors[colorIndex]} inline-block font-extrabold py-2`}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          initial={{ textShadow: "0 0 0px currentColor" }}
          animate={{
            textShadow: [
              "0 0 0px currentColor",
              "0 0 10px currentColor",
              "0 0 0px currentColor",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {displayedText[1]}
        </motion.span>
        <br />

        <motion.span
          className="inline-block"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          {displayedText[2]}
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default HeroH1;
