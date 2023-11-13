"use client";

import { m } from "framer-motion";

import { cn } from "@/utils";

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
      transition={{ duration: 5, delay: 0.6 }}
    >
      <div className="relative h-full w-full bg-black">
        <div className="animate-rotation absolute -inset-1 -z-10 border-inherit bg-[conic-gradient(from_var(--gradient-angle),var(--box-1),var(--box-2),var(--box-3),var(--box-2),var(--box-1))]" />
        <div className="animate-rotation absolute inset-0 -z-10 border-inherit bg-[conic-gradient(from_var(--gradient-angle),var(--box-1),var(--box-2),var(--box-3),var(--box-2),var(--box-1))] blur-lg" />
      </div>
    </m.div>
  );
}
