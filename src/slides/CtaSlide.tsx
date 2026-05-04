import { motion } from "motion/react";

const facts = [
  { icon: "trending_up", title: "Growing Fast", desc: "Growing much faster than average — outpacing most other tech fields." },
  { icon: "public", title: "Remote Demand", desc: "Huge demand for remote workers — one of the most flexible careers available." },
  { icon: "store", title: "Digital Presence", desc: "Every business needs a website, driving constant demand for developers." },
];

export default function CtaSlide() {
  return (
    <div className="relative w-full h-full min-h-0 overflow-hidden overflow-y-auto overscroll-contain bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 min-h-full flex flex-col px-4 sm:px-8 lg:px-20 py-8 sm:py-12 pb-24 sm:pb-20">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-4"
        >
          Outlook
        </motion.span>

        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 lg:gap-16 min-h-0">
          <div className="flex-1 max-w-2xl min-w-0">
            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading italic text-white leading-[0.85] tracking-tight mb-6 sm:mb-8"
            >
              The future is digital.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/90 font-body font-normal text-lg sm:text-xl md:text-2xl leading-relaxed"
            >
              Growing much faster than average with huge demand for remote workers — web development is one of the most future-proof careers available.
            </motion.p>
          </div>

          <div className="w-full lg:w-[420px] flex flex-col gap-4 sm:gap-5 shrink-0 lg:ml-auto">
            {facts.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                className="liquid-glass rounded-2xl p-5 sm:p-6 flex items-start gap-4 sm:gap-5 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/25 to-white/10 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-rounded text-white"
                    style={{ fontFamily: "Material Symbols Rounded", fontSize: 26 }}
                  >
                    {f.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-body font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-base sm:text-lg font-body font-normal text-white/90 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
