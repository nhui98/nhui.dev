"use client";

import cn from "@nhui/cn";
import { m } from "framer-motion";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <m.footer
      className={cn(
        "pb-10 pt-[120px] text-center text-sm font-medium text-gray-500",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      Nathan Hui &copy; {new Date().getFullYear()}
    </m.footer>
  );
}
