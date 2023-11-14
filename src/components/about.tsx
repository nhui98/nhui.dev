"use client";

import { m } from "framer-motion";
import { Fragment } from "react";

import { cn } from "@/utils";

import { Box } from "./box";
import { GithubIcon, LinkedinIcon, MailIcon, PdfIcon } from "./icons";
import { TextLink } from "./text-link";

export const technologies = [
  <TextLink key="figma" href="https://www.figma.com/">
    Figma
  </TextLink>,
  <TextLink key="react" href="https://react.dev/">
    React
  </TextLink>,
  <TextLink key="next" href="https://nextjs.org/">
    Next.js
  </TextLink>,
  <TextLink key="typescript" href="https://www.typescriptlang.org/">
    Typescript
  </TextLink>,
  <TextLink key="tailwind" href="https://tailwindcss.com/">
    Tailwind
  </TextLink>,
  <TextLink key="framer" href="https://www.framer.com/motion/">
    Framer Motion
  </TextLink>,
  <TextLink key="prisma" href="https://www.prisma.io/">
    Prisma
  </TextLink>,
  <TextLink key="playwright" href="https://playwright.dev/">
    Playwright
  </TextLink>,
  <TextLink key="jest" href="https://jestjs.io/">
    Jest
  </TextLink>,
  <TextLink key="tlibrary" href="https://testing-library.com/">
    Testing Library
  </TextLink>,
];

const socialLinks = [
  {
    href: "/resume.pdf",
    text: "Resume",
    icon: PdfIcon,
    button: true,
  },
  {
    href: "mailto:hui.nathan9@gmail.com",
    text: "Mail",
    icon: MailIcon,
    button: false,
  },
  {
    href: "https://github.com/nhui98",
    text: "Github",
    icon: GithubIcon,
    button: false,
  },
  {
    href: "https://www.linkedin.com/in/nathan-hui/",
    text: "Linkedin",
    icon: LinkedinIcon,
    button: false,
  },
];

const aboutText = [
  `I'm Nathan. A front-end web developer.`,
  <>
    In 2020, I stumbled upon{" "}
    <TextLink href="https://www.awwwards.com/">Awwwards</TextLink> which
    showcased the talented work of experienced designers and developers all over
    the world. This discovery ultimately inspired and kickstarted my learning
    journey to build incredible user experiences for the web.
  </>,
  <>
    Some of the tools and technologies I&apos;ve grown fond of using include:{" "}
    {technologies.map((technology, index) => (
      <Fragment key={index}>
        {technology}
        {index < technologies.length - 2 && ", "}
        {index === technologies.length - 2 && " and "}
        {index === technologies.length - 1 && "."}
      </Fragment>
    ))}
  </>,
];

export function About() {
  return (
    <div className="pt-[120px]">
      <h1 className="-translate-x-0.5 text-4xl font-semibold text-gray-100">
        Hello!
      </h1>

      <div className="relative -z-10">
        <Box className="absolute" />
      </div>

      {aboutText.map((text, index) => (
        <m.p
          key={index}
          className="pt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          {text}
        </m.p>
      ))}

      <m.div
        className="mt-7 grid grid-cols-2 flex-wrap items-center gap-4 sm:inline-flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        {socialLinks.map((link) => (
          <SocialLink key={link.text} {...link} />
        ))}
      </m.div>
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  text: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  button: boolean;
};

function SocialLink({ href, text, icon, button }: SocialLinkProps) {
  return (
    <a
      key={text}
      href={href}
      target="_blank"
      className={cn(
        "group inline-flex w-fit items-center gap-x-1 px-4 py-2 text-sm font-medium",
        button && "rounded border border-gray-200/10 bg-black px-4 py-2",
      )}
    >
      {icon({
        className:
          "h-5 w-5 fill-gray-400 transition-colors duration-300 group-hover:fill-gray-200",
      })}
      <span className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
        {text}
      </span>
    </a>
  );
}
