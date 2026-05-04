import { useState } from "react";
import { projects } from "../data/projects";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="relative min-h-screen bg-[#0d0d0d] pt-32 pb-24 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#c9a84c]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 animate-[fadeUp_0.7s_ease_forwards]">
          <span className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-[0.3em] uppercase">
            What I've Built
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e8e8] mt-2">
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              Projects
            </span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent" />
          <p className="font-['DM_Sans'] text-[#6b6b6b] text-sm mt-4 max-w-xl">
            A collection of projects I've built — from IoT safety systems to
            web applications. Each one taught me something new.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full font-['DM_Sans'] text-xs font-medium
                tracking-wide transition-all duration-300
                ${
                  activeTag === tag
                    ? "text-[#0d0d0d] shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                    : "border border-white/10 text-[#6b6b6b] hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
                }`}
              style={
                activeTag === tag
                  ? { background: "linear-gradient(135deg, #c9a84c, #e2c97e)" }
                  : {}
              }
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-[#1e1e1e] border border-white/5 rounded-2xl overflow-hidden
                hover:border-[#c9a84c]/25 transition-all duration-500 hover:-translate-y-2
                shadow-lg shadow-black/30 hover:shadow-[0_20px_60px_rgba(201,168,76,0.1)]"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Project Image / Placeholder */}
              <div className="relative h-52 overflow-hidden bg-[#161616]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // Placeholder with pattern
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px),
                          linear-gradient(90deg, #c9a84c 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <span
                      className="font-['Playfair_Display'] text-6xl font-bold bg-clip-text text-transparent relative z-10"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #c9a84c22, #c9a84c44)",
                      }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent
                    transition-opacity duration-500
                    ${hovered === project.id ? "opacity-100" : "opacity-60"}`}
                />

                {/* Hover action buttons */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4
                    transition-all duration-500
                    ${hovered === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full font-['DM_Sans'] text-xs font-medium
                        text-[#0d0d0d] hover:opacity-90 transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #c9a84c, #e2c97e)",
                      }}
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full font-['DM_Sans'] text-xs font-medium
                        border border-[#c9a84c] text-[#c9a84c]
                        hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Title row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#e8e8e8]
                    group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#c9a84c]/20
                    flex items-center justify-center text-[#c9a84c]
                    group-hover:bg-[#c9a84c]/10 group-hover:border-[#c9a84c]/40
                    transition-all duration-300">
                    ↗
                  </span>
                </div>

                {/* Description */}
                <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-5" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-['DM_Sans'] text-[10px] font-medium
                        tracking-wider uppercase text-[#c9a84c]/70 border border-[#c9a84c]/15
                        bg-[#c9a84c]/5 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]
                        transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span className="text-4xl">🔍</span>
            <p className="font-['DM_Sans'] text-[#6b6b6b] text-sm">
              No projects found for this tag.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="font-['DM_Sans'] text-[#6b6b6b] text-sm">
            Want to see more? Check out my GitHub profile.
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full
              font-['DM_Sans'] font-medium text-sm border border-[#c9a84c]
              text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0d0d]
              hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]
              transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}