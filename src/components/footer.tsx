import { m } from "framer-motion";

export function Footer() {
  return (
    <m.footer
      className="pb-[37px] pt-[90px] text-center text-sm font-medium text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Nathan Hui &copy; {new Date().getFullYear()}
    </m.footer>
  );
}