import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "sending" | "success" | "error";
  message: string;
}

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "borsevivek2006@gmail.com",
    href: "mailto:borsevivek2006@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 7709023098",
    href: "tel:+917709023098",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Shirpur, Maharashtra, India",
    href: "https://maps.google.com/?q=Shirpur,Maharashtra",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "CodeChef",
    href: "https://codechef.com/users/yourusername",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.257.004C5.055.264-.051 5.608.001 11.815c.05 6.208 5.221 11.232 11.432 11.18 6.21-.05 11.234-5.221 11.183-11.432C22.565 5.356 17.459.004 11.257.004zm-.427 4.026l5.114 2.975-1.373.8-3.74-2.176-3.74 2.176-1.374-.8 5.113-2.975zm-5.494 4.21l1.374.799v4.35l3.74 2.176v1.597L5.336 14.19V8.24zm10.988 0v5.95l-5.114 2.972V15.564l3.74-2.176V9.04l1.374-.8z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setStatus({ type: "sending", message: "Sending your message..." });

    // Simulate sending — replace with your email API (EmailJS, Formspree, etc.)
    await new Promise((res) => setTimeout(res, 1800));

    setStatus({
      type: "success",
      message: "Message sent! I'll get back to you soon. 🎉",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
  };

  const inputClass = `w-full bg-[#161616] border border-white/5 rounded-xl px-4 py-3
    font-['DM_Sans'] text-sm text-[#e8e8e8] placeholder-[#6b6b6b]
    focus:outline-none focus:border-[#c9a84c]/50 focus:bg-[#1a1a1a]
    hover:border-white/10 transition-all duration-300`;

  return (
    <section className="relative min-h-screen bg-[#0d0d0d] pt-32 pb-24 overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#c9a84c]/5
        rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#c9a84c]/4
        rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 animate-[fadeUp_0.7s_ease_forwards]">
          <span className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-[0.3em] uppercase">
            Let's Talk
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#e8e8e8] mt-2">
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c, #e2c97e)",
              }}
            >
              Touch
            </span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-[#c9a84c] to-transparent" />
          <p className="font-['DM_Sans'] text-[#6b6b6b] text-sm mt-4 max-w-xl">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Contact Cards */}
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-[#1e1e1e] border border-white/5
                  rounded-2xl p-5 hover:border-[#c9a84c]/25 hover:-translate-y-1
                  transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl
                    group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c18, #c9a84c08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-['DM_Sans'] text-[10px] text-[#c9a84c] tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-['DM_Sans'] text-sm text-[#e8e8e8] group-hover:text-white
                    transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
                <span className="ml-auto text-[#c9a84c] opacity-0 group-hover:opacity-100
                  transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-6
              hover:border-[#c9a84c]/20 transition-all duration-300">
              <p className="font-['DM_Sans'] text-[10px] text-[#c9a84c] tracking-widest uppercase mb-5">
                Find Me Online
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center
                      border border-white/5 text-[#6b6b6b]
                      hover:text-[#c9a84c] hover:border-[#c9a84c]/40
                      hover:bg-[#c9a84c]/10 hover:scale-110
                      transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="rounded-2xl p-6 border border-[#c9a84c]/20"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(201,168,76,0.02))",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-['DM_Sans'] text-sm font-medium text-[#e8e8e8]">
                  Available for Opportunities
                </span>
              </div>
              <p className="font-['DM_Sans'] text-xs text-[#6b6b6b] leading-relaxed">
                Currently open to internships, collaborations, and freelance
                projects. Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#1e1e1e] border border-white/5 rounded-2xl p-8
              hover:border-[#c9a84c]/15 transition-all duration-500">

              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#e8e8e8] mb-8">
                Send Me a Message
              </h3>

              <div className="flex flex-col gap-5">

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-wider uppercase">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-wider uppercase">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-wider uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-['DM_Sans'] text-xs text-[#c9a84c] tracking-wider uppercase">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status Message */}
                {status.type !== "idle" && (
                  <div
                    className={`px-4 py-3 rounded-xl font-['DM_Sans'] text-sm
                      ${
                        status.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : status.type === "error"
                          ? "bg-red-500/10 border border-red-500/20 text-red-400"
                          : "bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c]"
                      }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status.type === "sending"}
                  className={`w-full py-4 rounded-xl font-['DM_Sans'] font-semibold text-sm
                    transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      status.type === "sending"
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                    }`}
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #e2c97e)",
                    color: "#0d0d0d",
                  }}
                >
                  {status.type === "sending" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}