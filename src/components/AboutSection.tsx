import { motion } from "framer-motion";
import { RecentWorkButton } from "./RecentWorkButton.tsx";

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
                       }: MarqueeColumnProps) => {
    const loopImages = images.concat(images);

    return (
        <div className="relative flex-1 overflow-hidden rounded-[22px]">
            <motion.div
                className="flex flex-col gap-4"
                animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    delay,
                }}
            >
                {loopImages.map((src, index) => (
                    <div
                        key={`${src}-${index}`}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px]"
                    >
                        <img
                            src={src}
                            alt="Recent work preview"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const leftColumnImages = [
    "https://framerusercontent.com/images/670uUrkwoRnzhCl9b3kEMwUmgE4.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/J4Ox47KYv4g8Lb2C0PXNkjDaA.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png?width=1600&height=1200",
    "https://framerusercontent.com/images/670uUrkwoRnzhCl9b3kEMwUmgE4.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/J4Ox47KYv4g8Lb2C0PXNkjDaA.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png?width=1600&height=1200",
];

const rightColumnImages = [
    "https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/TWgBR6dpy8VfcVcGIy2oyBYzyY.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg?width=1120&height=840",
    "https://framerusercontent.com/images/TWgBR6dpy8VfcVcGIy2oyBYzyY.jpg?width=1120&height=840",
];

export const AboutSection = () => {
    return (
        <section className="relative isolate flex min-h-screen w-full items-center justify-center">
            <div className="relative w-full max-w-[1440px] border-8 border-white/40 rounded-[36px]">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[36px] bg-[#181818]">
                    <motion.div
                        className="relative h-full"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.6,
                            duration: 1.4,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="relative flex h-full flex-col md:flex-row gap-4 md:gap-5 px-5">
                            <MarqueeColumn images={leftColumnImages} speed={60} />
                            <MarqueeColumn
                                images={rightColumnImages}
                                reverse
                                speed={60}
                            />
                        </div>

                        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                            <RecentWorkButton />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
