import { achievements } from "../data/achievements";

const stats = [
  { value: "₹10K",  label: "Prize Won",        icon: "💰" },
  { value: "25K+",  label: "Teams Beaten",      icon: "🏆" },
  { value: "Top 15", label: "India Innovates",  icon: "🥇" },
  { value: "6+",    label: "Certifications",    icon: "📜" },
];

export default function Achievements() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] pt-32 pb-24 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
        bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#c9a84c]/4
        rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-[#c9a84c]/3
        rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 animate-[fadeUp_0.7s_ease_forwards]">
          <span className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-[0.3em] uppercase">
            Milestones & Recognition
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e8e8] mt-2">
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              Achievements
            </span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent" />
          <p className="font-['DM_Sans'] text-[#6b6b6b] text-sm mt-4 max-w-xl">
            Recognition, certifications, and milestones I've earned through
            hard work, innovation, and a passion for building things.
          </p>
        </div>

        {/* Stats Banner */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl
            border border-[#c9a84c]/15 bg-[#c9a84c]/[0.03]"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-4 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </span>
              <span
                className="font-['Playfair_Display'] text-3xl font-bold bg-clip-text text-transparent mb-1"
                style={{
                  backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
                }}
              >
                {stat.value}
              </span>
              <span className="font-['DM_Sans'] text-[11px] text-[#6b6b6b] tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="relative">

          {/* Vertical gold line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0
            w-px bg-gradient-to-b from-[#c9a84c] via-[#c9a84c]/40 to-transparent" />

          <div className="flex flex-col gap-10">
            {achievements.map((achievement, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Card — takes half width on desktop */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] md:max-w-[calc(50%-2rem)]
                      ml-14 md:ml-0
                      ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div
                      className="group bg-[#1e1e1e] border border-white/5 rounded-2xl p-6
                        hover:border-[#c9a84c]/25 hover:-translate-y-1
                        transition-all duration-400 shadow-lg shadow-black/20
                        hover:shadow-[0_10px_40px_rgba(201,168,76,0.08)]"
                    >
                      {/* Top row */}
                      <div className="flex items-start gap-4 mb-3">
                        {/* Emoji icon */}
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                            group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: "linear-gradient(135deg, #c9a84c18, #c9a84c08)",
                            border: "1px solid rgba(201,168,76,0.2)",
                          }}
                        >
                          {achievement.icon}
                        </div>

                        <div>
                          <h3
                            className="font-['Playfair_Display'] text-lg font-semibold text-[#e8e8e8]
                              group-hover:text-white transition-colors duration-300 leading-tight"
                          >
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/5 mb-3" />

                      {/* Description */}
                      <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Gold accent corner */}
                      <div
                        className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl overflow-hidden
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <div
                          className="absolute top-0 right-0 w-8 h-8"
                          style={{
                            background: "linear-gradient(225deg, rgba(201,168,76,0.15) 0%, transparent 70%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10
                    items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-base
                        bg-[#1e1e1e] border-2 border-[#c9a84c]/50
                        hover:border-[#c9a84c] hover:bg-[#c9a84c]/10
                        transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                    >
                      {achievement.icon}
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-0 z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-base
                        bg-[#1e1e1e] border-2 border-[#c9a84c]/50
                        transition-all duration-300"
                    >
                      {achievement.icon}
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 rounded-2xl border border-[#c9a84c]/15 bg-[#c9a84c]/[0.03]
            p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#e8e8e8] mb-2">
              Let's Build Something Together
            </h3>
            <p className="font-['DM_Sans'] text-sm text-[#6b6b6b]">
              I'm always looking for new challenges and opportunities to grow.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-['DM_Sans'] font-medium text-sm
                text-[#0d0d0d] hover:opacity-90 hover:scale-105
                hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]
                transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              Download Resume ↗
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-full font-['DM_Sans'] font-medium text-sm
                border border-[#c9a84c] text-[#c9a84c]
                hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
            >
              Contact Me →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}