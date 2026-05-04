import { motion } from "motion/react";
import { Palette, Code2, Brain, MessageSquare } from "lucide-react";

const cards = [
  { Icon: Palette, title: "UI/UX Design", desc: "Intuitive, polished interfaces using tools like Modo." },
  { Icon: Code2, title: "React & Tailwind CSS", desc: "Fast, responsive web apps with modern front-end tech." },
  { Icon: Brain, title: "Problem Solving", desc: "Breaking complex challenges into clean, efficient solutions." },
  { Icon: MessageSquare, title: "Bilingual", desc: "Fluent in English and Spanish for diverse teams and clients." },
];

export default function CapabilitiesSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-auto gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block text-white/80 font-body text-lg tracking-[0.3em] uppercase mb-4"
            >
              Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              {"The tools that\nbuild the web."}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/90 font-body font-normal text-xl max-w-sm"
          >
            UI/UX, React, Tailwind CSS, problem solving, and bilingual communication.
          </motion.p>
        </div>
        <div className="flex-1 flex items-end">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                className="liquid-glass rounded-2xl p-6 lg:p-7 flex flex-col cursor-default"
              >
                <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-5">
                  <c.Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-body font-semibold text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-base md:text-lg font-body font-normal text-white/90 leading-relaxed">
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
