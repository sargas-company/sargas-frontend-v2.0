import { useState } from "react";

export const HeaderMenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white cursor-pointer"
    >
      <span className="relative block w-4 h-2">
        <span
          className={[
            "absolute left-0 top-0 h-px w-full bg-black rounded-full",
            "transition-transform duration-300 ease-in-out",
            open ? "translate-y-[3.5px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 bottom-0 h-px w-full bg-black rounded-full",
            "transition-transform duration-300 ease-in-out",
            open ? "-translate-y-[3.5px] -rotate-45" : "",
          ].join(" ")}
        />
      </span>
    </button>
  );
};
