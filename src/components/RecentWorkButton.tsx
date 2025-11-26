import { motion } from "framer-motion";

const folderPath =
    "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77A16,16,0,0,0,54.59,114.94L40,158.7V64Z";

const tooltipVariants = {
    initial: {
        opacity: 0,
        rotate: -35,
        x: -60,
        y: -18,
    },

    inView: {
        opacity: 1,
        rotate: 21,
        x: 50,
        y: 7,
        transition: {
            duration: 0.5,
            //ease: [0.23, 0.9, 0.32, 1],
            delay: 0.2,
        },
    },
    hover: {
        x: 56,
        y: 3,
        rotate: 21,
        transition: {
            duration: 0.5,
            // ease: [0.23, 0.9, 0.32, 1],
        },
    },
};

export const RecentWorkButton = () => {
    return (
        <motion.a
            href="#work"
            className="group relative flex h-32 w-32 items-center justify-center rounded-full border border-white/80 bg-white/75 text-black backdrop-blur-[2px] transition-colors duration-600 hover:bg-white"
            initial="initial"
            whileInView="inView"
            whileHover="hover"
            viewport={{ once: true, amount: 0.6 }}
        >
            <motion.div
                variants={tooltipVariants}
                className="pointer-events-none absolute -top-[66px] left-[-42px] inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold leading-[1.2] text-white"
                style={{ willChange: "transform, opacity" }}
            >
                <span className="absolute left-1/2 bottom-[-7px] block h-4 w-4 -translate-x-1/2 rotate-45 bg-black" />
                See Recent Work
            </motion.div>

      <span className="absolute inset-0 rounded-full border border-white/60" />
      <div className="flex h-9 w-9 items-center justify-center rounded-full text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-full w-full"
          aria-hidden
        >
          <path d={folderPath} fill="currentColor" />
        </svg>
      </div>
    </motion.a>
  );
};
