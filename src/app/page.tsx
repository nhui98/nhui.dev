"use client";

import { About } from "@/components/about";
import { Container } from "@/components/container";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <About />
        <Experience />
        <Footer />
      </Container>
    </main>
  );
}
