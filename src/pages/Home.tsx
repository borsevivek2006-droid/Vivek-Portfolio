import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import vivekPhoto from "../assets/vivek-photo.jpg";

const roles = [
  "Computer Engineer",
  "Java Developer",
  "Web Developer",
  "Problem Solver",
  "Innovator",
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayed(role.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px),
            linear-gradient(90deg, #c9a84c 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#c9a84c]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">

        {/* Left — Text Content */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border
            border-[#c9a84c]/30 bg-[#c9a84c]/5 text-[#c9a84c] text-xs
            font-['DM_Sans'] font-medium tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
            Available for Opportunities
          </div>

          {/* Name */}
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl xl:text-7xl font-bold
            text-[#e8e8e8] leading-tight mb-4">
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e, #a0823a)",
              }}
            >
              Vivek
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="text-[#6b6b6b] font-['DM_Sans'] text-lg md:text-xl">
              I'm a{" "}
            </span>
            <span className="font-['DM_Sans'] text-lg md:text-xl font-semibold text-[#c9a84c] min-w-[220px]">
              {displayed}
              <span className="animate-pulse text-[#e2c97e]">|</span>
            </span>
          </div>

          {/* Objective / Bio */}
          <div className="mb-6 max-w-xl mx-auto lg:mx-0">
            <p className="font-['DM_Sans'] text-[#6b6b6b] text-base md:text-lg leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Objective card */}
          <div
            className="mb-10 max-w-xl mx-auto lg:mx-0 rounded-2xl p-5 border border-[#c9a84c]/20"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))",
            }}
          >
            <p className="font-['DM_Sans'] text-[10px] text-[#c9a84c] tracking-[0.3em] uppercase mb-2">
              Objective
            </p>
            <p className="font-['DM_Sans'] text-sm text-[#6b6b6b] leading-relaxed italic">
              "Enthusiastic and innovative individual eager to transform ideas into
              real-world solutions, contribute to team success, and grow through
              hands-on experience in a challenging environment."
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mb-10">
            {[
              { value: "8.6",  label: "CGPA" },
              { value: "2+",   label: "Projects" },
              { value: "6+",   label: "Achievements" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div
                  className="font-['Playfair_Display'] text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-['DM_Sans'] text-xs text-[#6b6b6b] tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <Link
              to="/projects"
              className="px-7 py-3 rounded-full font-['DM_Sans'] font-medium text-sm
                text-[#0d0d0d] transition-all duration-300 hover:opacity-90 hover:scale-105
                hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              View My Work →
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 rounded-full font-['DM_Sans'] font-medium text-sm
                border border-[#c9a84c] text-[#c9a84c]
                hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            {[
              {
                label: "GitHub",
                url: "https://github.com/yourusername",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                url: "https://linkedin.com/in/yourusername",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "CodeChef",
                url: "https://codechef.com/users/yourusername",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.257.004C5.055.264-.051 5.608.001 11.815c.05 6.208 5.221 11.232 11.432 11.18 6.21-.05 11.234-5.221 11.183-11.432C22.565 5.356 17.459.004 11.257.004zm-.427 4.026l5.114 2.975-1.373.8-3.74-2.176-3.74 2.176-1.374-.8 5.113-2.975zm-5.494 4.21l1.374.799v4.35l3.74 2.176v1.597L5.336 14.19V8.24zm10.988 0v5.95l-5.114 2.972V15.564l3.74-2.176V9.04l1.374-.8z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#c9a84c]/20 flex items-center justify-center
                  text-[#6b6b6b] hover:text-[#c9a84c] hover:border-[#c9a84c]/60
                  hover:bg-[#c9a84c]/10 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}

            <div className="h-px w-12 bg-[#c9a84c]/20" />
            <span className="font-['DM_Sans'] text-xs text-[#6b6b6b] tracking-widest uppercase">
              {profile.location}
            </span>
          </div>
        </div>

        {/* Right — Avatar Card */}
        <div className="flex-shrink-0">
          <div className="relative">

            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-30 blur-md"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e2c97e, #a0823a)",
              }}
            />

            {/* Gold border ring */}
            <div
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-[3px]"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e2c97e, #0d0d0d, #c9a84c)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#1e1e1e] overflow-hidden flex items-center justify-center">
                <img
                  src={vivekPhoto}
                  alt="Vivek"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge — CGPA */}
            <div className="absolute -bottom-2 -left-4 bg-[#1e1e1e] border border-[#c9a84c]/30
              rounded-2xl px-4 py-2 shadow-xl shadow-black/40">
              <div className="font-['Playfair_Display'] text-lg font-bold text-[#c9a84c]">8.6</div>
              <div className="font-['DM_Sans'] text-[10px] text-[#6b6b6b] tracking-wider uppercase">CGPA</div>
            </div>

            {/* Floating badge — Top 15 */}
            <div className="absolute -top-2 -right-4 bg-[#1e1e1e] border border-[#c9a84c]/30
              rounded-2xl px-4 py-2 shadow-xl shadow-black/40">
              <div className="font-['Playfair_Display'] text-lg font-bold text-[#c9a84c]">Top 15</div>
              <div className="font-['DM_Sans'] text-[10px] text-[#6b6b6b] tracking-wider uppercase">India Innovates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-['DM_Sans'] text-[10px] text-[#6b6b6b] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>

    </section>
  );
}