import { motion } from "motion/react";

const cards = [
  { icon: "brush", title: "Design Assets", desc: "Creating visuals and UI components in Modo for web projects." },
  { icon: "code", title: "Write & Test Code", desc: "Writing clean, tested front-end and back-end code before every release." },
  { icon: "storage", title: "Connect Databases", desc: "Integrating databases and APIs to power dynamic web applications." },
  { icon: "rocket_launch", title: "Deploy Live Sites", desc: "Pushing projects to production — optimized and ready for real users." },
];

export default function WhyUsSlide() {
  return (
    <div className="relative w-full h-full min-h-0 overflow-hidden overflow-y-auto overscroll-contain bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_212252_7d25a6d2-cf7f-465c-9bd1-a1496112806e.mp4"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 min-h-full flex flex-col px-4 sm:px-8 lg:px-20 py-8 sm:py-12 pb-24 sm:pb-20">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-4"
        >
          Duties
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-heading italic text-white tracking-tight leading-[0.85] mb-6 lg:mb-auto"
        >
          Daily Tasks.
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 280, damping: 22 } }}
              className="liquid-glass rounded-2xl p-6 lg:p-7 flex items-start gap-5 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/25 to-white/10 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-rounded text-white"
                  style={{ fontFamily: "Material Symbols Rounded", fontSize: 26 }}
                >
                  {c.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-body font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-lg font-body font-normal text-white/90 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
