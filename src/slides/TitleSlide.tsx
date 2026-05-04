import { motion } from "motion/react";
import BlurText from "@/components/BlurText";
import modoLogo from "@/images/modo white.png";

export default function TitleSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex flex-col justify-between px-10 lg:px-20 py-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-heading italic text-base">M</span>
          </div>
          <span className="ml-3 font-heading italic text-white text-2xl">Miguel Angel Sanchez</span>
          <span className="w-px h-6 bg-white/40 mx-4" />
          <span className="text-white/80 font-body text-sm tracking-[0.2em] uppercase">
            Career Presentation
          </span>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="liquid-glass rounded-full inline-flex items-center self-start gap-2 pl-1 pr-5 py-1.5 mb-8"
          >
            <span className="bg-white text-black rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              2026
            </span>
            <span className="text-white/90 text-sm font-normal tracking-widest uppercase">Period TBD</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-heading italic text-white leading-[0.85] tracking-[-3px] mb-10">
            <BlurText text="Web Developer & UI/UX Designer" delay={80} />
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <img src={modoLogo} alt="Modo" className="h-8 w-auto object-contain" />
            <span className="w-px h-6 bg-white/40" />
            <span className="text-2xl md:text-3xl text-white font-body font-normal leading-relaxed">
              Miguel Angel Sanchez
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex items-center gap-8 flex-wrap"
        >
          <span className="text-white/70 font-body text-sm tracking-[0.2em] uppercase">
            Career Focus
          </span>
          {["React", "Tailwind CSS", "UI/UX", "Full Stack", "Bilingual"].map((b) => (
            <span key={b} className="text-xl md:text-2xl font-heading italic text-white/70">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
