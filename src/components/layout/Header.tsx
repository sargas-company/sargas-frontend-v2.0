import { useState } from "react";
import { motion } from "framer-motion";
import { HeaderMenuButton } from "./HeaderMenuButton";
import { HeaderDropdown } from "./HeaderDropdown";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="h-20 w-full fixed top-0 left-0 px-6 md:px-12 xl:px-30 z-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 1,
        ease: "easeInOut",
        delay: 1.5,
      }}
    >
      <div className="h-full mx-auto flex justify-between items-center max-w-[1440px]">
        <a href="#" className="px-6 py-2.5 bg-white rounded-[22px] text-black">
          <strong>Hanzo</strong>
        </a>

        <div className="relative">
          <HeaderMenuButton open={open} onToggle={() => setOpen((v) => !v)} />
          <HeaderDropdown open={open} />
        </div>
      </div>
    </motion.header>
  );
};
