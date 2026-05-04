import { motion } from "motion/react";

const cards = [
  { icon: "language", title: "Front End", desc: "Layouts, interactions, and everything the visitor sees and touches." },
  { icon: "dns", title: "Back End", desc: "Logic, databases, and server-side systems powering what happens behind the scenes." },
  { icon: "devices", title: "Full Stack", desc: "From design to deployment — owning the full product lifecycle." },
];

export default function ProblemSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex px-10 lg:px-20 py-12 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 w-full my-auto">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-6"
            >
              Job Description
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8"
            >
              Web Developers and Designers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 font-body font-normal text-xl md:text-2xl leading-relaxed max-w-xl"
            >
              They build, maintain, and style websites and web applications — handling both the front-end experience and the back-end logic.
            </motion.p>
          </div>
          <div className="w-full lg:w-[440px] flex flex-col gap-4 shrink-0">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                className="liquid-glass rounded-2xl p-6 lg:p-8 cursor-default"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/25 to-white/10 flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-rounded text-white"
                      style={{ fontFamily: "Material Symbols Rounded", fontSize: 26 }}
                    >
                      {c.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-body font-semibold text-white">{c.title}</h3>
                </div>
                <p className="text-lg font-body font-normal text-white/90 leading-relaxed pl-16">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
