"use client";

import { domAnimation, LazyMotion } from "framer-motion";

import { About } from "@/components/about";
import { Container } from "@/components/container";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="overflow-x-hidden">
        <Container>
          <About />
          <Experience />
          <Footer />
        </Container>
      </main>
    </LazyMotion>
  );
}
