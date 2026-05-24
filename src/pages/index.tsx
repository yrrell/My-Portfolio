import Head from "next/head";
import Navbar    from "../components/Navbar";
import Hero      from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import About     from "../components/About";
import Skills    from "../components/Skills";
import Projects  from "../components/Projects";
import Resume    from "../components/Resume";
import Contact   from "../components/Contact";
import Footer    from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Lerry Teodoro — Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of John Lerry Teodoro — self-taught Filipino full-stack web developer. Creator of KumpuniGo! and T&J Motorshop System. Built with Next.js, TypeScript, and Tailwind CSS."
        />

        {/*
          Disable pinch-to-zoom and double-tap zoom on mobile devices.
          • maximum-scale=1  — prevents the browser from zooming above 1×
          • user-scalable=no — blocks the pinch gesture entirely on iOS/Android
          Both are needed for cross-browser coverage (Chrome honours
          user-scalable; Safari respects maximum-scale).
        */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <meta name="author" content="John Lerry V. Teodoro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
