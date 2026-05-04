import { motion } from "motion/react";
import { Monitor, Palette, Globe } from "lucide-react";

const reasons = [
  {
    Icon: Monitor,
    title: "Full Stack Development",
    desc: "I enjoy building complete products — from the database to the UI — and seeing everything come together.",
  },
  {
    Icon: Palette,
    title: "Modern Design Tools",
    desc: "Designing with tools like Modo and coding with React and Tailwind CSS keeps the work creative and challenging.",
  },
  {
    Icon: Globe,
    title: "Remote Flexibility",
    desc: "The remote flexibility this career offers allows me to work from anywhere and achieve my personal goals.",
  },
];

export default function WhyIPickedSlide() {
  return (
    <div className="relative w-full h-full min-h-0 overflow-hidden overflow-y-auto overscroll-contain bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
      <div className="relative z-10 min-h-full flex flex-col px-4 sm:px-8 lg:px-20 py-8 sm:py-12 pb-28 sm:pb-24">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-4"
        >
          Why I Picked This Career
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-auto"
        >
          Built for this. Chose it on purpose.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.13, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } }}
              className="liquid-glass rounded-2xl p-8 lg:p-10 flex flex-col cursor-default"
            >
              <div className="liquid-glass-strong rounded-full w-14 h-14 flex items-center justify-center mb-6 shrink-0">
                <r.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-body font-semibold text-white mb-3">
                {r.title}
              </h3>
              <p className="text-base md:text-lg font-body font-normal text-white/90 leading-relaxed flex-1">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center border-t border-white/25 pt-4 mt-6"
        >
          <span className="text-white/60 text-sm sm:text-base font-body break-words">
            Miguel Angel Sanchez — Career Presentation
          </span>
          <span className="text-white/40 text-sm sm:text-base font-body shrink-0">8 / 8</span>
        </motion.div>
      </div>
    </div>
  );
}
