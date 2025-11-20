const LoveBuilding = () => {
  const items = [
    {
      no: "1",
      title: "Responsive Design",
      description: "Creating interfaces that look great on every screen size",
    },
    {
      no: "2",
      title: "Interactive UI",
      description: "Building smooth, engaging, and dynamic user experiences",
    },
    {
      no: "3",
      title: "Code Quality",
      description: "Writing clean, reusable, and well-structured components",
    },
    {
      no: "4",
      title: "Accessibility",
      description:
        "Ensuring every user can interact with the product effortlessly",
    },
    {
      no: "5",
      title: "Performance Optimization",
      description: "Building fast and responsive applications",
    },
  ];

  return (
    <section className="py-12 text-[#0F172A]">
      <p className="text-[#0EA5E9] font-semibold text-sm uppercase mb-6 tracking-wide">
        What I Love Building
      </p>

      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#0EA5E9]/20 p-6 rounded-lg shadow hover:shadow-lg transition duration-500 flex gap-7 items-center hover:scale-105"
          >
            <p className="p-4 border border-[#0EA5E9]/30 text-xl text-[#0EA5E9] rounded-lg">
              {item.no}
            </p>
            <div>
              <h3 className="font-bold text-[#0EA5E9] mb-2">{item.title}</h3>
              <p className="text-[#0F172A]/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoveBuilding;
