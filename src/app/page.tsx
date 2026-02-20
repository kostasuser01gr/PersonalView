import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Certification from "@/components/Certification";
import VideoPlayer from "@/components/VideoPlayer";
import IntroScript from "@/components/IntroScript";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Certification />
        <VideoPlayer />
        <IntroScript />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
