import { profile } from "../data/profile";

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institute: "SES's R.C. Patel Institute of Technology, Shirpur",
    year: "2023 — Present",
    score: "CGPA: 8.6",
    icon: "🎓",
  },
  {
    degree: "HSC in Science",
    institute: "R.C. Patel Junior College, Shirpur",
    year: "2021 — 2023",
    score: "86.67%",
    icon: "📘",
  },
  {
    degree: "SSC",
    institute: "R.C. Patel Secondary School, Shirpur",
    year: "Until 2021",
    score: "94.80%",
    icon: "📗",
  },
];

const languages = ["English", "Marathi", "Hindi"];

const softSkills = [
  { label: "Cooperative",      icon: "🤝" },
  { label: "Decision Making",  icon: "🧠" },
  { label: "Communication",    icon: "💬" },
  { label: "Adaptability",     icon: "🔄" },
];

export default function About() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] pt-32 pb-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c9a84c]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 animate-[fadeUp_0.7s_ease_forwards]">
          <span className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-[0.3em] uppercase">
            Get To Know Me
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e8e8] mt-2">
            About{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              Me
            </span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent" />
        </div>

        {/* Top Grid — Bio + Quick Info */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Bio Card */}
          <div
            className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-8
              hover:border-[#c9a84c]/20 transition-all duration-500 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: "linear-gradient(135deg, #c9a84c22, #c9a84c11)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                👨‍💻
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#e8e8e8]">
                Who I Am
              </h3>
            </div>

            <p className="font-['DM_Sans'] text-[#6b6b6b] leading-relaxed text-sm mb-4">
              {profile.bio}
            </p>
            <p className="font-['DM_Sans'] text-[#6b6b6b] leading-relaxed text-sm">
              I'm currently a 2nd year Computer Engineering student at R.C. Patel Institute
              of Technology, Shirpur. I love building projects that solve real-world problems —
              from IoT-based safety systems to useful web applications.
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-white/5" />

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name",     value: "Vivek Borse" },
                { label: "Email",    value: "borsevivek2006@gmail.com" },
                { label: "Phone",    value: "7709023098" },
                { label: "Location", value: "Shirpur, Maharashtra" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-['DM_Sans'] text-[10px] text-[#c9a84c] tracking-widest uppercase">
                    {item.label}
                  </span>
                  <p className="font-['DM_Sans'] text-[#e8e8e8] text-sm mt-0.5 truncate">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Soft Skills + Languages */}
          <div className="flex flex-col gap-6">

            {/* Soft Skills */}
            <div
              className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-8
                hover:border-[#c9a84c]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c22, #c9a84c11)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  ✨
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#e8e8e8]">
                  Soft Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                      bg-white/[0.02] border border-white/5
                      hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/5
                      transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-['DM_Sans'] text-sm text-[#6b6b6b] group-hover:text-[#e8e8e8] transition-colors duration-300">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div
              className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-8
                hover:border-[#c9a84c]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c22, #c9a84c11)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  🌐
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#e8e8e8]">
                  Languages
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-5 py-2 rounded-full font-['DM_Sans'] text-sm font-medium
                      border border-[#c9a84c]/30 text-[#c9a84c]
                      hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300 cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{
                background: "linear-gradient(135deg, #c9a84c22, #c9a84c11)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              🏫
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#e8e8e8]">
              Education
            </h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a84c] via-[#c9a84c]/30 to-transparent" />

            <div className="flex flex-col gap-8">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative flex gap-8 group"
                  style={{
                    animationDelay: `${i * 150}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-base
                        bg-[#1e1e1e] border-2 border-[#c9a84c]/40
                        group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10
                        transition-all duration-300"
                    >
                      {edu.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-[#1e1e1e] border border-white/5 rounded-2xl p-6
                      hover:border-[#c9a84c]/20 hover:-translate-y-1
                      transition-all duration-300 shadow-lg shadow-black/20"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#e8e8e8]">
                        {edu.degree}
                      </h4>
                      <span
                        className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-['DM_Sans']
                          font-medium text-[#c9a84c] border border-[#c9a84c]/30 bg-[#c9a84c]/5"
                      >
                        {edu.score}
                      </span>
                    </div>
                    <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] mb-1">
                      {edu.institute}
                    </p>
                    <p className="font-['DM_Sans'] text-xs text-[#c9a84c]/60 tracking-wider">
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}