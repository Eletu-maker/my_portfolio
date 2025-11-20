export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/NicholasIchukwuAgbo001",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363",
  },
  {
    name: "Twitter",
    url: "https://x.com/AgboIchukw36207",
  },
  {
    name: "Email",
    url: "mailto:ichukwunicholasagbo@email.com",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/2347058705863",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61579155453621",
  },
];

export const PROJECTS = [
  
  {
    title: "Credit wise Nigeria",
    description:
      "CreditWise Nigeria is a financial education platform designed to help people in Nigeria understand and improve their credit scores. Think of it as a personal finance coach that teaches you how to manage money better and build a good credit history.it offer Educational Content, Personalized Plans, Progress Tracking, Expert Consultation and Credit Tips",
    imageUrl: "credit-wise.png",
    tags: ["React", "Vite", "Tailwind", "TypeScript", "REST API", "React Router", "Recharts", "Node.js", "Express", "MongoDB", "JSON Web Tokens (JWT)", "Bcrypt"],
    demoLink: "https://frontend-credit-wise.vercel.app",
    
  },
  {
    title: "Video streaming website",
    description:
      "This is a Netflix-like streaming platform that you can access through a web browser. It's a front-end application that mimics the look and feel of Netflix, allowing users to browse movies and TV shows.",
    imageUrl: "video-streaming.png",
    tags: ["React", "Firebase", "React Toastify ", "JavaScript"],
    demoLink: "https://nikki-s-home-made-pizza.vercel.app/",
   
  },
  {
    title: "E-commerce Website",
    description:
      "A modern, responsive e-commerce platform featuring dynamic product listings, integrated shopping cart functionality, and advanced Redux Toolkit state management. Built with a sleek Tailwind CSS interface for smooth browsing, it offers optimized performance, mobile-friendly design, and a scalable architecture ready for future expansion.",
    imageUrl: "e-com.png",
    tags: ["React", "CSS", "Vite","Firebase","React Toastify", "Node.js","Vercel"],
    demoLink: "https://e-commerce-coral-beta-84.vercel.app/",
  },
  {
    title: "SuiArt",
    description:
      "SuiArt is a React-based NFT marketplace application built on the Sui blockchain. It allows users to mint, buy, and manage digital art as NFTs. The platform provides a complete ecosystem for creators and collectors to interact with digital assets securely on the blockchain.",
    imageUrl: "suiArt.png",
    tags: ["React", "CSS", "Vite", "Sui blockchain SDK", "Wallet integration for Sui blockchain", " React Router DOM"],
    demoLink: "https://sui-art.vercel.app/",
    
  },
];

export const SKILLS = {
  frontend: [
    { name: "React", level: 95, color: "bg-sky-600" },
    { name: "TypeScript", level: 90, color: "bg-blue-500" },
    { name: "Next.js", level: 85, color: "bg-neutral-800" },
    { name: "Tailwind CSS", level: 99, color: "bg-cyan-500" },
    { name: "JavaScript", level: 90, color: "bg-amber-500" },
    { name: "Framer Motion", level: 80, color: "bg-rose-400" },
    { name: "React Native", level: 75, color: "bg-indigo-600" },
    { name: "Flutter", level: 65, color: "bg-blue-400" },
  ],
  backend: [
    { name: "Node.js", level: 90, color: "bg-[#14B8A6]" },
    { name: "Java", level: 85, color: "bg-[#0F172A]" },
    { name: "Python", level: 65, color: "bg-[#0EA5E9]" },
    { name: "Dart", level: 65, color: "bg-[#0F172A]" },
    { name: "GraphQL", level: 50, color: "bg-[#14B8A6]" },
    { name: "REST APIs", level: 85, color: "bg-[#0EA5E9]" },
    { name: "Go", level: 65, color: "bg-[#0F172A]" },
  ],
  database: [
    { name: "MongoDB", level: 100, color: "bg-[#14B8A6]" },
    { name: "Firebase", level: 100, color: "bg-[#0EA5E9]" },
    { name: "Supabase", level: 90, color: "bg-[#14B8A6]" },
    { name: "MySQL", level: 75, color: "bg-[#0EA5E9]" },
    { name: "Postgres", level: 75, color: "bg-[#14B8A6]" },
  ],
  devops: [
    { name: "Netlify", level: 99, color: "bg-[#14B8A6]" },
    { name: "Vercel", level: 100, color: "bg-[#0F172A]" },
    { name: "Docker", level: 70, color: "bg-[#0EA5E9]" },
    { name: "Git", level: 90, color: "bg-[#0F172A]" },
    { name: "AWS", level: 60, color: "bg-[#0EA5E9]" },
  ],
};
