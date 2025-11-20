import LoveBuilding from "./LoveBuilding";

const Mission = () => {
  return (
    <div className="p-6 text-left flex flex-col justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md border border-[#0EA5E9]/20">
        <h3 className="text-xl font-semibold mb-4 text-[#0EA5E9]">My Mission</h3>
        <p className="text-[#0F172A]/70 leading-relaxed">
         I see technology as a powerful tool that brings people together and addresses meaningful challenges. I’m driven by a desire to build creative, impactful solutions that contribute positively to everyday life, while designing digital experiences that are intuitive, enjoyable, and accessible to all.
        </p>
        <p className="py-5 text-[#0F172A]/70">
          When i'm not coding, you can find me reading books, learning new
          things, or exploring the outdoors.
        </p>
      </div>
      <LoveBuilding />
    </div>
  );
};

export default Mission;
