import { VerticalMotionList } from "./ui/VerticalMotionList";
import { HorizontalMotionList } from "./ui/HorizontalMotionList";
import { HeroSectionButton } from "./ui/HeroSectionButton";
import { motion } from "framer-motion";
import { HeroSectionLetterAnimation } from "./animation/HeroSectionLetterAnimation";

export const HeroSection = () => {
  return (
    <div className="pt-[180px] pb-20 md:pb-14 xl:pb-[118px] gap-6 md:gap-7 xl:gap-12 flex flex-col gap-6 md:gap-7 xl:gap-12">
      <div className="flex flex-col items-center gap-9">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "linear",
            delay: 1.5,
          }}
          className="flex items-center gap-2 py-2 px-4 bg-white rounded-full"
        >
          <div className="h-1.5 w-1.5 bg-[#0cb300] rounded-full" />
          <div>Booking Open — 2 Spots Left</div>
        </motion.div>
        <div className="flex flex-wrap flex-none items-center justify-center h-min gap-1.5 md:gap-2 max-w-none md:max-w-[718px] xl:max-w-[980px]">
          <div>
            <h1>
              <strong>
                <span className="text-[44px] md:text-[80px] xl:text-[108px] !font-medium tracking-[-0.06em] leading-[1.25em] md:leading-[1.15em]">
                  {"Unlimited".split("").map((letter, index) => {
                    return (
                      <HeroSectionLetterAnimation
                        initialDelay={0.5}
                        delayRate={index * 0.07}
                        key={index}
                      >
                        {letter}
                      </HeroSectionLetterAnimation>
                    );
                  })}
                </span>
                <span className="h-full px-1.5 md:px-2 xl:px-2.5" />
              </strong>
            </h1>
          </div>
          <div>
            <VerticalMotionList />
          </div>
          <div>
            <h1>
              <strong>
                <span className="h-full px-1.5 md:px-2 xl:px-2.5" />
                <span className="text-[44px] md:text-[80px] xl:text-[108px] font-normal tracking-[-0.06em] leading-[1.25em] md:leading-[1.15em] text-[rgba(0,0,0,0.5)]">
                  {"Design".split("").map((letter, index) => {
                    return (
                      <HeroSectionLetterAnimation
                        initialDelay={1.2}
                        delayRate={index * 0.07}
                        key={index}
                      >
                        {letter}
                      </HeroSectionLetterAnimation>
                    );
                  })}
                </span>
              </strong>
            </h1>
          </div>
          <div>
            <h1>
              <strong>
                <span className="text-[44px] md:text-[80px] xl:text-[108px] font-normal tracking-[-0.06em] leading-[1.25em] md:leading-[1.15em] text-[rgba(0,0,0,0.5)]">
                  {"For".split("").map((letter, index) => {
                    return (
                      <HeroSectionLetterAnimation
                        initialDelay={1.2}
                        delayRate={index * 0.07}
                        key={index}
                      >
                        {letter}
                      </HeroSectionLetterAnimation>
                    );
                  })}
                </span>
                <span className="h-full px-1.5 md:px-2 xl:px-2.5" />
              </strong>
            </h1>
          </div>
          <div>
            <HorizontalMotionList />
          </div>
          <div>
            <h1>
              <strong>
                <span className="h-full px-1.5 md:px-2 xl:px-2.5" />
                <span className="text-[44px] md:text-[80px] xl:text-[108px] !font-medium tracking-[-0.06em] leading-[1.25em] md:leading-[1.15em]">
                  {"Solid Startups".split("").map((letter, index) => {
                    return (
                      <HeroSectionLetterAnimation
                        initialDelay={1.4}
                        delayRate={index * 0.07}
                        key={index}
                      >
                        {letter}
                      </HeroSectionLetterAnimation>
                    );
                  })}
                </span>
              </strong>
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "linear",
            delay: 1.5,
          }}
        >
          <p className="text-black/50 max-w-[434px] text-center leading-[1.7] tracking-[0em] text-balance">
            We help startups and brands create beautiful, functional products —
            fast and hassle-free.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 1,
          ease: "linear",
          delay: 1.5,
        }}
        className="flex gap-2 justify-center gap-4 flex-wrap"
      >
        <HeroSectionButton />
        <div className="flex flex-col justify-center gap-0.5">
          <div className="flex">
            <img
              src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024"
              className="border border-white h-[31px] w-[31px] object-cover rounded-full"
            />
            <img
              src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024"
              className="border border-white h-[31px] w-[31px] object-cover rounded-full relative right-1.5"
            />
            <img
              src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024"
              className="border border-white h-[31px] w-[31px] object-cover rounded-full relative right-3"
            />
            <img
              src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024"
              className="border border-white h-[31px] w-[31px] object-cover rounded-full relative right-4.5"
            />
            <img
              src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512&width=1536&height=1024"
              className="border border-white h-[31px] w-[31px] object-cover rounded-full relative right-6"
            />
          </div>
          <p className="text-xs text-black/50">Trusted by Leaders</p>
        </div>
      </motion.div>
    </div>
  );
};
