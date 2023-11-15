"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { Box } from "@/components/box";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

function HomeIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM13 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001H11V13.0001H13V19.0001Z"></path>
    </svg>
  );
}

export default function NotFound() {
  return (
    <Container className="flex h-screen flex-col pt-[120px]">
      <h1 className="-translate-x-0.5 text-4xl font-semibold text-gray-100">
        404
      </h1>

      <div className="relative -z-10">
        <Box className="absolute" />
      </div>

      <m.p
        className="pt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        You&apos;ve entered forbidden territory. Be careful, lorem ipsum ahead.
      </m.p>
      <m.p
        className="pt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        voluptatum reprehenderit laboriosam similique magni quas sit debitis
        voluptate deleniti iure illo dolore eius, eveniet provident at.
        Dignissimos qui quis laboriosam!
      </m.p>
      <m.p
        className="pt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sint.
        Ipsam aut deleniti consequuntur et minima quaerat asperiores quod
        quidem.
      </m.p>

      <m.div
        className="mt-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <Link
          href="/"
          className="group inline-flex w-fit items-center gap-x-1 rounded border border-gray-200/10 bg-black px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-gray-200"
        >
          <HomeIcon className="h-5 w-5 fill-gray-400 transition-colors duration-300 group-hover:fill-gray-200" />
          Return Home
        </Link>
      </m.div>

      <Footer className="mt-auto" />
    </Container>
  );
}
