"use client";

import cn from "@nhui/cn";
import { m } from "framer-motion";

type BoxProps = {
  className?: string;
};

export function Box({ className }: BoxProps) {
  return (
    <m.div
      className={cn(
        "relative aspect-square h-[500px] w-[500px] rotate-45",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, delay: 0.45 }}
    >
      <div className="relative h-full w-full bg-black">
        <div className="absolute -inset-1 -z-10 animate-rotation border-inherit bg-[conic-gradient(from_var(--gradient-angle),var(--box-1),var(--box-2),var(--box-3),var(--box-2),var(--box-1))]" />
        <div className="absolute inset-0 -z-10 animate-rotation border-inherit bg-[conic-gradient(from_var(--gradient-angle),var(--box-1),var(--box-2),var(--box-3),var(--box-2),var(--box-1))] blur-lg" />
      </div>
    </m.div>
  );
}
