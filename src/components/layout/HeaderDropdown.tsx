import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "../ui/icons/XIcon";
import { LinkedInIcon } from "../ui/icons/LinkedInIcon";
import { InstagramIcon } from "../ui/icons/InstagramIcon";

type Props = {
  open: boolean;
};

const menuOptions = [
  {
    title: "Process",
    link: "#",
  },
  {
    title: "Work",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Pricing",
    link: "#",
  },
  {
    title: "FAQ",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "Get Template",
    link: "#",
    bold: true,
  },
];

const socials = [
  {
    link: "#",
    component: XIcon,
  },
  {
    link: "#",
    component: LinkedInIcon,
  },
  {
    link: "#",
    component: InstagramIcon,
  },
];

export const HeaderDropdown = ({ open }: Props) => (
  <AnimatePresence>
    {open && (
      <motion.div
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="absolute right-0 mt-3 w-[320px] rounded-2xl bg-white z-30 rounded-[24px_8px_24px_24px] p-[50px] flex flex-col gap-3"
      >
        {menuOptions.map((opt, index) => {
          return (
            <motion.p
              key={opt.title}
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
            >
              <a
                href={opt.link}
                className={`text-left text-xl hover:text-black/50 transition-all duration-300 ease-in-out ${
                  opt.bold ? "text-[#ff3700] hover:!text-black font-medium" : ""
                }`}
              >
                {opt.title}
              </a>
            </motion.p>
          );
        })}
        <motion.div
          className="pt-6 flex gap-4"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          {socials.map((item, index) => {
            const Icon = item.component;

            return (
              <a
                href={item.link}
                key={index}
                className="
          group
          border border-black/50 rounded-full
          w-11 h-11 flex items-center justify-center
          transition-colors duration-200
          hover:border-black
        "
              >
                <Icon
                  size={20}
                  className="
            transition-transform duration-200
            group-hover:scale-110
          "
                />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
