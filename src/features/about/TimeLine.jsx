const TimeLine = () => {
  const timelineItems = [
    {
      year: "2018 - 2023",
      title: "Studying at an University",
      taught: "Lagos State University",
      description:
        "Bachelor degree on Transport planning and policy.",
    },
    {
      year: "2023 - 2024",
      title: "NYSC",
      taught: "Served at Abeokuta Ogun State",
      description:
        "Worked for the Vehicle Inspection Agency. ",
    },
    {
      year: "2023",
      title: "Started My Coding Journey",
      taught: "Self-taught",
      description:
        "Began learning HTML, CSS, and JavaScript through online tutorials and building small projects.",
    },
      {
      year: "2024",
      title: "Becoming a Software Engineer",
      taught: "Semicolon Africa",
      description:
        "Currently building scalable applications, contributing to meaningful projects, and continually learning.",
    },
        {
      year: "2024",
      title: "Dived Into Frontend",
      taught: "Self-taught",
      description:
        "Started learning React.js and Next.js, explored component-based architecture, state management with Redux and Context API, dynamic routing, and built several responsive web applications using Tailwind CSS and API integration.",
    },
    {
      year: "2025",
      title: "Graduating as a Software Engineer",
      taught: "Semicolon Africa",
      description:
        "Graduated with honors from Semicolon Africa, where I specialized in web technologies and software engineering. Gained in-depth knowledge of full-stack development, algorithms, system design, and agile methodologies. Built real-world projects, collaborated with teams, and developed strong problem-solving and communication skills that prepared me for professional software engineering roles.",
    },
  ];

  return (
    <div className="p-6 text-left">
      <h3 className="text-2xl font-semibold mb-4 text-[#0EA5E9]">My Journey</h3>
      <ul className="space-y-6 border-l-2 border-blue-600 pl-8 relative">
        {timelineItems.map((item, index) => (
          <li
            key={index}
            className="relative hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -left-3 top-1 w-5 h-5 bg-[#0EA5E9] rounded-full border-4 border-[#F0FDFE]" />
            <div className="bg-white p-4 rounded-lg shadow-md border border-[#0EA5E9]/20">
              <p className="text-sm text-[#0EA5E9]">{item.year}</p>
              <h4 className="text-xl font-semibold text-[#0F172A]">{item.title}</h4>
              {item.taught && (
                <p className="text-[#14B8A6] text-sm mt-1 py-1">{item.taught}</p>
              )}
              <p className="text-[#0F172A]/70 text-sm mt-1">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
