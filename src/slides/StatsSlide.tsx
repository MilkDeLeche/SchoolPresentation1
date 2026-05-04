import { motion } from "motion/react";

const items = [
  {
    eyebrow: "Degree",
    title: "Associate of Applied Science",
    sub: "Computer Information Systems",
    desc: "Covers programming, databases, networking, and systems analysis — the most direct academic path to web development.",
  },
  {
    eyebrow: "Portfolio",
    title: "Real-World Projects",
    sub: "Shipped and deployed",
    desc: "A strong portfolio of live, deployed projects is as essential as any degree. Employers want to see working code.",
  },
];

export default function StatsSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-24">
        <div className="mb-auto">
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-6"
          >
            Education & Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] max-w-4xl"
          >
            Credentials that open doors
          </motion.h2>
        </div>

        <div className="flex flex-col gap-0">
          {items.map((item, i) => (
            <motion.div
              key={item.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 28 } }}
              className="group py-8 lg:py-10 border-t border-white/25 grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-4 lg:gap-10 items-start cursor-default"
            >
              <div>
                <span className="text-white/70 font-body text-base tracking-[0.25em] uppercase block mb-2">
                  {item.eyebrow}
                </span>
                <span className="text-white/85 font-body text-lg font-normal">{item.sub}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-white/90 font-body font-normal text-lg lg:text-xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
          <div className="h-px bg-white/25 mt-0" />
        </div>
      </div>
    </div>
  );
}
