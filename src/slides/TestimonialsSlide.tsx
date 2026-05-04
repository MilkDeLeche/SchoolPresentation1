import { motion } from "motion/react";

const salaryCards = [
  {
    label: "Entry Level",
    range: "$50K – $60K",
    detail: "Starting salaries for junior web developers and UI/UX designers.",
    tag: "Per Year",
  },
  {
    label: "Mid Level",
    range: "$70K – $90K",
    detail: "Developers with 2–4 years of experience and a solid portfolio.",
    tag: "Per Year",
  },
  {
    label: "Senior / Full Stack",
    range: "$100K+",
    detail: "Senior and full-stack engineers with advanced skills and leadership.",
    tag: "Per Year",
  },
];

export default function TestimonialsSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_102157_ad7d8fd0-1039-4516-8d40-db76927cc9c5.mp4"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-4"
        >
          Salary
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-auto"
        >
          What this career pays.
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {salaryCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } }}
              className="liquid-glass rounded-2xl p-8 lg:p-10 flex flex-col justify-between cursor-default"
            >
              <div className="mb-6">
                <span className="text-white/80 font-body text-base tracking-[0.2em] uppercase block mb-4">
                  {s.label}
                </span>
                <p className="text-5xl lg:text-6xl font-heading italic text-white leading-none mb-5">
                  {s.range}
                </p>
                <p className="text-white/90 font-body font-normal text-lg leading-relaxed">
                  {s.detail}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/25">
                <span className="text-white/70 font-body text-base font-normal">{s.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
