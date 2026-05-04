import { useState } from "react";
import { skills } from "../data/skills";

type Category = "all" | "frontend" | "backend" | "tools";

const categories: { label: string; value: Category; icon: string }[] = [
  { label: "All",       value: "all",      icon: "⚡" },
  { label: "Frontend",  value: "frontend",  icon: "🎨" },
  { label: "Backend",   value: "backend",   icon: "⚙️" },
  { label: "Tools",     value: "tools",     icon: "🛠️" },
];

const techIcons: Record<string, string> = {
  "C":            "🔵",
  "Java":         "☕",
  "Java Swing":   "🖥️",
  "OOPS":         "🧩",
  "HTML":         "🌐",
  "Git & GitHub": "🐙",
  "VS Code":      "💻",
  "Netbeans":     "🟡",
  "CodeChef":     "👨‍🍳",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="relative min-h-screen bg-[#0d0d0d] pt-32 pb-24 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#c9a84c]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 animate-[fadeUp_0.7s_ease_forwards]">
          <span className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-[0.3em] uppercase">
            What I Work With
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e8e8] mt-2">
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              Skills
            </span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent" />
          <p className="font-['DM_Sans'] text-[#6b6b6b] text-sm mt-4 max-w-xl">
            Technologies and tools I've worked with. Always learning and
            adding new skills to my toolkit.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full
                font-['DM_Sans'] text-sm font-medium tracking-wide
                transition-all duration-300
                ${
                  activeCategory === cat.value
                    ? "text-[#0d0d0d] shadow-[0_0_25px_rgba(201,168,76,0.3)] scale-105"
                    : "border border-white/10 text-[#6b6b6b] hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
                }`}
              style={
                activeCategory === cat.value
                  ? { background: "linear-gradient(135deg, #c9a84c, #e2c97e)" }
                  : {}
              }
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group bg-[#1e1e1e] border border-white/5 rounded-2xl p-6
                hover:border-[#c9a84c]/25 hover:-translate-y-1
                transition-all duration-400 shadow-lg shadow-black/20
                hover:shadow-[0_10px_40px_rgba(201,168,76,0.08)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg
                      transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #c9a84c15, #c9a84c08)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    {techIcons[skill.name] ?? "💡"}
                  </div>

                  {/* Name */}
                  <span className="font-['DM_Sans'] text-sm font-semibold text-[#e8e8e8]
                    group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>

                {/* Level % */}
                <span
                  className="font-['JetBrains_Mono'] text-sm font-medium transition-all duration-300"
                  style={{
                    color: hoveredSkill === skill.name ? "#e2c97e" : "#c9a84c",
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
                  style={{
                    width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    background: "linear-gradient(90deg, #c9a84c, #e2c97e)",
                    boxShadow: "0 0 10px rgba(201,168,76,0.5)",
                  }}
                />
              </div>

              {/* Category Badge */}
              <div className="mt-4 flex items-center justify-between">
                <span
                  className="font-['DM_Sans'] text-[10px] tracking-widest uppercase
                    text-[#c9a84c]/50 group-hover:text-[#c9a84c]/80 transition-colors duration-300"
                >
                  {skill.category}
                </span>

                {/* Skill level label */}
                <span className="font-['DM_Sans'] text-[10px] text-[#6b6b6b]">
                  {skill.level >= 90
                    ? "Expert"
                    : skill.level >= 75
                    ? "Advanced"
                    : skill.level >= 60
                    ? "Intermediate"
                    : "Beginner"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Proficiency Summary */}
        <div
          className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-8
            hover:border-[#c9a84c]/20 transition-all duration-500"
        >
          <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#e8e8e8] mb-8">
            Overall Proficiency
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Programming Languages", value: 84, icon: "🔵" },
              { label: "Frontend Development",  value: 85, icon: "🎨" },
              { label: "Tools & Platforms",     value: 80, icon: "🛠️" },
              { label: "Problem Solving",       value: 88, icon: "🧠" },
            ].map((item, i) => (
              <div key={item.label} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-['DM_Sans'] text-sm text-[#6b6b6b]
                      group-hover:text-[#e8e8e8] transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-sm text-[#c9a84c]">
                    {item.value}%
                  </span>
                </div>

                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${item.value}%`,
                      background: `linear-gradient(90deg, #c9a84c, #e2c97e)`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}