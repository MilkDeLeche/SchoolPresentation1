import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  current: number;
  total: number;
  label: string;
  onPrev: () => void;
  onNext: () => void;
  onGo: (i: number) => void;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function SlideControls({ current, total, label, onPrev, onNext, onGo }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 bg-gradient-to-t from-black/80 to-transparent sm:bg-none pointer-events-none [&>*]:pointer-events-auto">
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <span className="text-white/60 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body shrink-0">
          {pad(current + 1)} / {pad(total)}
        </span>
        <span className="w-px h-5 bg-white/25 shrink-0 hidden sm:block" />
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-white/80 text-xs sm:text-sm font-body font-medium truncate"
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0 flex-wrap justify-end">
        <div className="flex items-center gap-1 sm:gap-1.5 max-w-[min(100%,22rem)] sm:max-w-none overflow-x-auto overflow-y-hidden py-1 -my-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onGo(i)}
              style={{
                width: i === current ? "clamp(2.75rem, 22vw, 6rem)" : "clamp(1.25rem, 10vw, 2rem)",
                transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease",
              }}
          className={`h-1 rounded-full shrink-0 ${
                i === current ? "bg-white" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="w-px h-4 bg-white/15 hidden sm:block" />
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full text-white/70 hover:text-white hover:bg-white/15 disabled:opacity-20 transition flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="w-10 h-10 rounded-full text-white/70 hover:text-white hover:bg-white/15 disabled:opacity-20 transition flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
