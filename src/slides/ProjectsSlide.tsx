import { motion } from "motion/react";
import cycleTech from "@/images/cycletech.png";
import xala from "@/images/xala.png";
import taxPro from "@/images/taxpro.png";
import jgDesigns from "@/images/JGdesigns.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsSlide() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#09090b]">
      <main className="h-full flex flex-col px-8 py-8 lg:px-12 lg:py-10">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 flex items-end justify-between shrink-0"
        >
          <div>
            <span className="block text-white/50 font-body text-sm tracking-[0.3em] uppercase mb-2">
              Portfolio
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.88]">
              Projects I've Built
            </h1>
          </div>
          <span className="text-white/30 font-body text-sm tracking-[0.2em] hidden md:block">
            4 projects
          </span>
        </motion.header>

        {/* Bento grid — fills all remaining height */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 min-h-0 grid grid-cols-3 grid-rows-2 gap-4"
          style={{ overflow: "visible" }}
        >
          {/* Card 01 — CycleTech tall left */}
          <motion.div
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card row-span-2 group cursor-default"
          >
            <img src={cycleTech} alt="CycleTech" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative h-full p-6 lg:p-7 flex flex-col">
              <div className="flex justify-between text-xs text-white/60 font-body tracking-[0.25em] uppercase">
                <span>01</span><span>CycleTech</span>
              </div>
              <div className="flex-1" />
              <h2 className="text-2xl lg:text-3xl font-heading italic text-white leading-tight">
                CycleTech
              </h2>
            </div>
          </motion.div>

          {/* Card 02 — Xala wide top right */}
          <motion.div
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card col-span-2 group cursor-default"
          >
            <img src={xala} alt="Xala" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative h-full p-6 lg:p-7 flex flex-col">
              <div className="flex justify-between text-xs text-white/60 font-body tracking-[0.25em] uppercase">
                <span>02</span><span>Xala</span>
              </div>
              <div className="flex-1" />
              <h2 className="text-2xl lg:text-3xl font-heading italic text-white leading-tight">
                Xala
              </h2>
            </div>
          </motion.div>

          {/* Card 03 — TaxPro */}
          <motion.div
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card group cursor-default"
          >
            <img src={taxPro} alt="TaxPro" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative h-full p-6 lg:p-7 flex flex-col">
              <div className="flex justify-between text-xs text-white/60 font-body tracking-[0.25em] uppercase">
                <span>03</span><span>TaxPro</span>
              </div>
              <div className="flex-1" />
              <h2 className="text-xl lg:text-2xl font-heading italic text-white leading-tight">
                TaxPro
              </h2>
            </div>
          </motion.div>

          {/* Card 04 — JG Designs */}
          <motion.div
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card group cursor-default"
          >
            <img src={jgDesigns} alt="JG Designs" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative h-full p-6 lg:p-7 flex flex-col">
              <div className="flex justify-between text-xs text-white/60 font-body tracking-[0.25em] uppercase">
                <span>04</span><span>JG Designs</span>
              </div>
              <div className="flex-1" />
              <h2 className="text-xl lg:text-2xl font-heading italic text-white leading-tight">
                JG Designs
              </h2>
            </div>
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
}
