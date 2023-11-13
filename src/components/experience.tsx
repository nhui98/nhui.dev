"use client";

import { m } from "framer-motion";

import { cn } from "@/utils";

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
    <div className="pt-[90px]">
      <m.h2
        className="text-center text-3xl font-bold text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        My Experience
      </m.h2>

      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          {...experience}
          reverse={index % 2 !== 0}
          className={cn(index === 0 ? "mt-[41px]" : "mt-8")}
        />
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
      className={cn(
        "group relative w-full max-w-md border border-gray-200/5 bg-black p-6",
        reverse && "ml-auto",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="text-xl font-medium text-gray-100">{title}</h3>
      <h4 className="pt-2 text-sm font-semibold text-gray-500">{company}</h4>
      <p className="pt-[11px] text-gray-400">{description}</p>
      <span className="flex items-center gap-x-2 pt-[11px] text-sm font-semibold text-gray-600 md:hidden">
        <CalendarIcon className="h-5 w-5 fill-gray-600" /> {workingYears}
      </span>

      <div
        className={cn(
          "absolute top-8 hidden gap-x-4 gap-y-1 md:flex md:flex-col",
          !reverse && "right-0 translate-x-full items-end",
          reverse && "left-0 -translate-x-full flex-row-reverse items-start",
        )}
      >
        <span className="flex items-center gap-x-2 text-sm font-semibold text-gray-600 transition-colors duration-200 group-hover:text-gray-400">
          <CalendarIcon className="h-5 w-5 fill-gray-600 transition-colors duration-200 group-hover:fill-gray-400" />{" "}
          {workingYears}
        </span>
        <div
          className={cn(
            "h-0.5 w-52 translate-x-px bg-gray-200/5",
            !reverse && "translate-x-px rounded-r-full",
            reverse && "-translate-x-px rounded-l-full",
          )}
        />
      </div>
    </m.article>
  );
}
