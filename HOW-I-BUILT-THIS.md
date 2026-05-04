# How This Career Presentation Site Was Built

A short guide you can use to **explain the project to a classmate or instructor**. It is not a line-by-line tutorial; it describes **what the code is doing and why**.

---

## 1. What kind of app is this?

It is a **single-page React app** that behaves like a **fullscreen slide deck** (similar to PowerPoint in the browser). There is one route (`/`) that shows the presentation; everything else is one slide after another inside the same page.

- **No traditional “pages”** for each slide—each slide is a **React component** that gets swapped in when the index changes.

---

## 2. Tech stack (the tools)

| Piece | Role |
|--------|------|
| **React 18** | UI: components, state, hooks |
| **TypeScript** | Types for props and safer refactors |
| **Vite** | Dev server and production build (fast bundling) |
| **Tailwind CSS** | Utility classes for layout, spacing, breakpoints (`sm:`, `lg:`, etc.) |
| **Motion** (`motion/react`) | Slide transitions and small animations (fade, slide, hover) |
| **React Router** | Mostly for `/` and a 404 page |
| **Lucide React** | Icons on some slides |
| **Google Fonts** | Instrument Serif (headings), Barlow (body)—linked in `index.html` |

The app is **bootstrapped in `src/main.tsx`**: it mounts `<App />` into the `#root` div and loads global styles from `src/index.css`.

---

## 3. Project layout (where things live)

- **`src/pages/Index.tsx`** — The **presentation controller**: which slide is active, how to go next/prev, keyboard/wheel/touch, and the transition wrapper.
- **`src/slides/*.tsx`** — One file per slide (title, job description, skills, etc.). Each exports a default component that fills the viewport.
- **`src/components/SlideControls.tsx`** — Fixed bar at the bottom: slide number, label, progress segments, prev/next buttons.
- **`src/components/BlurText.tsx`** — Optional text animation used on the title slide.
- **`src/index.css`** — Tailwind layers + custom classes like **`.liquid-glass`** (frosted-glass look with backdrop blur and gradient border).
- **`vite.config.ts`** — Build settings; **`@` alias** points to `src/` so imports look like `@/slides/TitleSlide`.

---

## 4. How “slides” work in code

### Slide list

In `Index.tsx`, slides are a **array of objects**: each has a **component** (`Comp`) and a **label** (shown in the control bar).

```ts
const slides = [
  { Comp: TitleSlide, label: "Career" },
  // ...
];
```

The **current slide** is just **which index** in that array is active: `slides[index].Comp`.

### Rendering only the current slide

React renders **one** slide component at a time (the current one). When `index` changes, a **new** component mounts and the old one unmounts (with an exit animation—see below).

---

## 5. State and navigation

- **`index`** — Current slide number (0-based).
- **`dir`** — Direction of navigation (**1** = forward, **-1** = backward). It is passed into Motion so enter/exit animations know which way to slide.

**`go(next, direction)`** updates both values but uses a **lock** (`lockRef`) so rapid clicks or scrolls do not stack animations for ~800ms.

**Ways to change slides:**

- **Buttons** in `SlideControls` (`onPrev`, `onNext`, `onGo`).
- **Keyboard**: arrows, space (forward).
- **Mouse wheel**: strong vertical or horizontal scroll moves to next/prev.
- **Touch**: swipe left/right past a threshold.

All of that is wired in a **`useEffect`** in `Index.tsx` that adds listeners to `window` and cleans them up on unmount.

---

## 6. Animations (Motion)

**`AnimatePresence`** (from Motion) wraps the slide area so **exiting** slides can animate out before the DOM removes them.

**`variants`** describe three states:

- **`enter`** — Starts off-screen left or right depending on `dir`.
- **`center`** — Normal visible position.
- **`exit`** — Moves partly off-screen when leaving.

The outer `motion.div` uses **`key={index}`** so React treats each slide change as a **new** element—required for enter/exit animations to run correctly.

Inside individual slides, **`motion.span`**, **`motion.h2`**, **`motion.div`**, etc. handle **staggered** fades and small **hover** effects (e.g. cards lifting slightly).

---

## 7. Styling and “glass” cards

- Most layout and typography use **Tailwind** classes directly in JSX (`flex`, `grid`, `text-*`, `lg:*` breakpoints).
- **`liquid-glass`** in `index.css` is a **component-style** class: semi-transparent background, **backdrop-filter** blur, and a **gradient border** using a `::before` pseudo-element and CSS masking. Slides apply it with classes like `liquid-glass rounded-2xl`.

**Responsive design** uses Tailwind breakpoints and **`h-dvh` / `min-h-dvh`** so height works better on mobile browsers than classic `100vh`. Slides can **scroll vertically** on small screens if content is tall, so nothing is permanently cut off behind the fixed control bar.

---

## 8. Media and assets

- **Background videos** on many slides: HTML `<video>` with `autoPlay`, `loop`, `muted`, `playsInline` (needed for autoplay on mobile).
- **Images** (logos, project screenshots) are imported in TSX (e.g. `import x from "@/images/..."`) so Vite hashes them in production builds.

---

## 9. How you might explain it in one sentence

> “It’s a React app where each slide is its own component, and the main page keeps one number in state for which slide to show; Motion animates the transition, Tailwind handles layout and responsive design, and Vite bundles it for the web.”

---

## 10. Files worth opening first (for a demo)

1. `src/pages/Index.tsx` — Slide list, state, input handlers, `AnimatePresence`.
2. `src/slides/CtaSlide.tsx` or `ProjectsSlide.tsx` — Example of layout + Motion + Tailwind.
3. `src/index.css` — `.liquid-glass` styling.
4. `src/components/SlideControls.tsx` — UI tied to the same state.

---

*Generated as a student-facing summary of this repository’s structure and patterns.*
