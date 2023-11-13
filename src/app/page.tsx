"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";

import { About } from "@/components/about";
import { Container } from "@/components/container";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <Container>
          <About />
          <Experience />
          <Footer />
        </Container>
      </main>
    </LazyMotion>
  );
}
