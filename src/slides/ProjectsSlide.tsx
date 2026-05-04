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

const projectLinks = {
  cycleTech: "https://cycle-tech.shop",
  xala: "https://xaladesigns.com/",
  taxPro: "https://taxprotestpilot.netlify.app",
  jgDesigns: "https://jgdesigns.netlify.app",
} as const;

export default function ProjectsSlide() {
  return (
    <div className="relative w-full h-full min-h-0 overflow-hidden overflow-y-auto overscroll-contain bg-[#09090b]">
      <main className="min-h-full flex flex-col px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 pb-24 sm:pb-10">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between shrink-0"
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
          className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 sm:gap-4 auto-rows-[minmax(160px,1fr)] lg:auto-rows-fr"
          style={{ overflow: "visible" }}
        >
          {/* Card 01 — CycleTech tall left */}
          <motion.a
            href={projectLinks.cycleTech}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card min-h-[200px] sm:min-h-[220px] lg:min-h-0 sm:col-span-2 lg:col-span-1 lg:row-span-2 group cursor-pointer no-underline text-inherit"
            aria-label="Open CycleTech live site"
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
          </motion.a>

          {/* Card 02 — Xala wide top right */}
          <motion.a
            href={projectLinks.xala}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card min-h-[180px] sm:min-h-[200px] lg:min-h-0 sm:col-span-2 lg:col-span-2 group cursor-pointer no-underline text-inherit"
            aria-label="Open Xala Designs live site"
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
          </motion.a>

          {/* Card 03 — TaxPro */}
          <motion.a
            href={projectLinks.taxPro}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card group cursor-pointer no-underline text-inherit"
            aria-label="Open TaxPro live site"
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
          </motion.a>

          {/* Card 04 — JG Designs */}
          <motion.a
            href={projectLinks.jgDesigns}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardAnim}
            whileHover={{
              scale: 1.04,
              zIndex: 20,
              transition: { type: "spring", stiffness: 260, damping: 22 },
            }}
            className="feature-card group cursor-pointer no-underline text-inherit"
            aria-label="Open JG Designs live site"
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
          </motion.a>
        </motion.div>

      </main>
    </div>
  );
}
