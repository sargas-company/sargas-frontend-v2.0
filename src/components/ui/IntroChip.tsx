import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ChipAnimation = {
  fromX: number;
  fromY: number;
  initialRotateOffset?: number;
  delay?: number;
  duration?: number;
};

type ChipConfig = {
  title: string;
  icon: React.FC<any>;
  bg: string;
  rotation: number;
  positionClass: string;
  animation: ChipAnimation;
};

export const IntroChip = ({ chip }: { chip: ChipConfig }) => {
  const Icon = chip.icon;
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={`
        ${chip.positionClass}
        flex items-center gap-2 p-1 pr-5 bg-white
        w-min h-min whitespace-nowrap rounded-full
      `}
      style={{
        boxShadow:
          "rgba(255, 255, 255, 0.25) 0px 0px 0px 8px, rgba(0, 0, 0, 0.1) 12px 16px 16px 0px",
      }}
      initial={{
        opacity: 0,
        x: chip.animation.fromX,
        y: chip.animation.fromY,
        rotate: chip.rotation + (chip.animation.initialRotateOffset ?? 0),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: chip.rotation,
            }
          : undefined
      }
      transition={{
        duration: chip.animation.duration ?? 0.6,
        ease: "easeOut",
        delay: chip.animation.delay ?? 0,
      }}
    >
      <div
        className="h-8 w-8 rounded-full flex items-center justify-center"
        style={{ background: chip.bg }}
      >
        <Icon />
      </div>
      <p className="text-sm font-medium">{chip.title}</p>
    </motion.div>
  );
};
