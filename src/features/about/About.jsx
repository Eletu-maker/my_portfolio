import Mission from "./Mission";
import TimeLine from "./TimeLine";

const About = () => {
  return (
    <section className="pt-20 bg-[#0F0F0F] text-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-white/70 uppercase tracking-wide text-sm mb-2">
          Get to know me
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold">
          About <span className="text-[#0EA5E9]">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Mission />
        <TimeLine />
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-10 text-center">
        <p className="text-[#0F172A]/60 uppercase tracking-wide text-sm mb-5">
          Ready to bring your idea to life?
        </p>
        <a
          href="https://wa.me/2347058705863"
          className="px-5 py-2 bg-[#0EA5E9] rounded-full"
        >
          Let's work together
        </a>
      </div>
    </section>
  );
};

export default About;
