import { motion } from "framer-motion";
import { RecentWorkButton } from "./RecentWorkButton";

type MarqueeColumnProps = {
  images: string[];
  reverse?: boolean;
  speed?: number;
  delay?: number;
};

const MarqueeColumn = ({
  images,
  reverse = false,
  speed = 26,
  delay = 0,
}: MarqueeColumnProps) => (
  <div className="relative h-full overflow-hidden rounded-[22px]">
    <motion.div
      className="flex h-full flex-col gap-4"
      animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay,
      }}
    >
      {images.concat(images).map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <img
            src={src}
            alt="Recent work preview"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40" />
        </div>
      ))}
    </motion.div>
  </div>
);

const leftColumnImages = [
  "https://framerusercontent.com/images/670uUrkwoRnzhCl9b3kEMwUmgE4.jpg?width=1120&height=840",
  "https://framerusercontent.com/images/J4Ox47KYv4g8Lb2C0PXNkjDaA.jpg?width=1120&height=840",
  "https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png?width=1600&height=1200",
];

const rightColumnImages = [
  "https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg?width=1120&height=840",
  "https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg?width=1120&height=840",
  "https://framerusercontent.com/images/TWgBR6dpy8VfcVcGIy2oyBYzyY.jpg?width=1120&height=840",
];

export const IntroSection = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center px-4 py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(180%_130%_at_50%_0%,rgba(255,255,255,0.92),rgba(222,222,222,0.92)_55%,rgba(206,206,206,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.02)_45%,transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-[620px]"
      >
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[36px] border border-white/10 bg-[#181818] shadow-[0_34px_90px_rgba(0,0,0,0.5)]">
          <div className="absolute -inset-[1px] rounded-[38px] border border-white/8" />
          <div className="absolute left-1/2 top-2 h-5 w-28 -translate-x-1/2 rounded-b-3xl bg-black/30 blur-[1px]" />
          <div className="absolute left-1/2 top-2 h-[10px] w-20 -translate-x-1/2 rounded-full bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/40" />

          <div className="relative grid h-full grid-cols-2 gap-4 p-5 md:gap-5 md:p-6">
            <MarqueeColumn images={leftColumnImages} speed={28} />
            <MarqueeColumn images={rightColumnImages} reverse speed={30} delay={2} />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,255,255,0.12),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />

          <div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"

          >
            <RecentWorkButton />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
