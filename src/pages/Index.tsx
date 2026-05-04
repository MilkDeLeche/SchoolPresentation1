import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TitleSlide from "@/slides/TitleSlide";
import ProblemSlide from "@/slides/ProblemSlide";
import CapabilitiesSlide from "@/slides/CapabilitiesSlide";
import WhyUsSlide from "@/slides/WhyUsSlide";
import StatsSlide from "@/slides/StatsSlide";
import ProjectsSlide from "@/slides/ProjectsSlide";
import TestimonialsSlide from "@/slides/TestimonialsSlide";
import CtaSlide from "@/slides/CtaSlide";
import WhyIPickedSlide from "@/slides/WhyIPickedSlide";
import SlideControls from "@/components/SlideControls";

const slides = [
  { Comp: TitleSlide, label: "Career" },
  { Comp: ProblemSlide, label: "Job Description" },
  { Comp: CapabilitiesSlide, label: "Skills" },
  { Comp: WhyUsSlide, label: "Duties" },
  { Comp: StatsSlide, label: "Education" },
  { Comp: ProjectsSlide, label: "Projects" },
  { Comp: TestimonialsSlide, label: "Salary" },
  { Comp: CtaSlide, label: "Outlook" },
  { Comp: WhyIPickedSlide, label: "Why I Picked This" },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-28%" : "28%", opacity: 0, scale: 0.97 }),
};

export default function Index() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const lockRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  const go = (next: number, direction: number) => {
    if (lockRef.current) return;
    if (next < 0 || next >= slides.length) return;
    lockRef.current = true;
    setState([next, direction]);
    setTimeout(() => {
      lockRef.current = false;
    }, 800);
  };

  const next = () => go(index + 1, 1);
  const prev = () => go(index - 1, -1);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (d > 0) next();
      else prev();
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current == null) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current;
      if (Math.abs(dx) > 60) {
        if (dx < 0) next();
        else prev();
      }
      touchStartRef.current = null;
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index]);

  const Current = slides[index].Comp;

  return (
    <div className="relative w-full max-w-[100vw] h-dvh min-h-dvh overflow-hidden bg-black">
      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Current />
        </motion.div>
      </AnimatePresence>
      <SlideControls
        current={index}
        total={slides.length}
        label={slides[index].label}
        onPrev={prev}
        onNext={next}
        onGo={(i) => go(i, i > index ? 1 : -1)}
      />
    </div>
  );
}
