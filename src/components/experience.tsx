"use client";

import cn from "@nhui/cn";
import { m } from "framer-motion";

import { CalendarIcon } from "./icons";

export const experiences = [
  {
    title: "Front-End Developer",
    company: "iTero",
    description:
      "Responsible for all frontend aspects of prototyping, wireframing, debugging and coding activities relating to the development of iTero's AI powered coaching app for League of Legends.",
    workingYears: "2022 - Present",
  },
  {
    title: "Junior Web Developer",
    company: "Red Technology",
    description:
      "Collaborated with designers and project managers to ship new features for multiple e-commerce websites.",
    workingYears: "2021 - 2022",
  },
];

export function Experience() {
  return (
    <div className="pt-[120px]">
      <m.h2
        className="text-center text-3xl font-semibold text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        My Experience
      </m.h2>

      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}

type ExperienceCardProps = {
  title: string;
  company: string;
  description: string;
  workingYears: string;
  className?: string;
  reverse?: boolean;
};

function ExperienceCard({
  title,
  company,
  description,
  workingYears,
  className,
  reverse,
}: ExperienceCardProps) {
  return (
    <m.article
      className={cn("relative mt-8 w-fit", reverse && "ml-auto", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <div className="peer w-full max-w-md rounded-lg border-2 border-transparent px-0 py-6 transition-colors duration-300 md:px-6 md:hover:border-gray-200/10 md:hover:bg-black">
        <h3 className="text-sm font-medium text-gray-500">{company}</h3>
        <h4 className="pt-1.5 text-xl font-medium text-gray-100">{title}</h4>
        <p className="pt-2.5">{description}</p>
        <span className="flex items-center gap-x-2 pt-[18px] font-medium text-gray-600 md:hidden">
          <CalendarIcon className="h-5 w-5 fill-gray-600" /> {workingYears}
        </span>
      </div>

      <div
        className={cn(
          "absolute top-8 hidden w-52 gap-x-4 gap-y-1 md:flex md:flex-col [&>span]:peer-hover:text-gray-400 [&_svg]:peer-hover:fill-gray-400",
          !reverse && "right-0 translate-x-full items-end",
          reverse && "left-0 -translate-x-full flex-row-reverse items-start",
        )}
      >
        <span className="flex items-center gap-x-2 font-medium text-gray-600 transition-colors duration-300 hover:text-gray-400 [&>svg]:fill-gray-600 [&>svg]:hover:fill-gray-400">
          <CalendarIcon className="h-5 w-5 transition-colors duration-300" />
          {workingYears}
        </span>
      </div>
    </m.article>
  );
}
