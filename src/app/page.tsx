"use client";

import { useState } from "react";
import Navbar from "@/components/nexara/Navbar";
import DockNavbar from "@/components/nexara/DockNavbar";
import HeroSection from "@/components/nexara/HeroSection";
import ProblemSection from "@/components/nexara/ProblemSection";
import AboutSection from "@/components/nexara/AboutSection";
import WhySection from "@/components/nexara/WhySection";
import ServicesSection from "@/components/nexara/ServicesSection";
import OvernightSection from "@/components/nexara/OvernightSection";
import InteractiveShowcase from "@/components/nexara/InteractiveShowcase";
import HowItWorksSection from "@/components/nexara/HowItWorksSection";
import ComparisonSection from "@/components/nexara/ComparisonSection";
import Angebot from "@/components/nexara/Angebot";
import CtaSection from "@/components/nexara/CtaSection";
import Footer from "@/components/nexara/Footer";
import LeadModal from "@/components/nexara/LeadModal";
import FadeInSection from "@/components/nexara/FadeInSection";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("hero");
  const [prefillEmail, setPrefillEmail] = useState("");
  const [prefillWebsite, setPrefillWebsite] = useState("");

  const openModal = (source: string, email = "", website = "") => {
    setModalSource(source);
    setPrefillEmail(email);
    setPrefillWebsite(website);
    setIsModalOpen(true);
  };

  const scrollToKontakt = () => {
    const el = document.getElementById("kontakt");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onCtaClick={scrollToKontakt} />
      <DockNavbar onCtaClick={scrollToKontakt} />
      <main className="flex-1">
        <HeroSection onAnalyseClick={scrollToKontakt} />
        <FadeInSection>
          <ProblemSection />
        </FadeInSection>
        <FadeInSection>
          <ServicesSection />
        </FadeInSection>
        <FadeInSection>
          <OvernightSection />
        </FadeInSection>
        <FadeInSection>
          <InteractiveShowcase />
        </FadeInSection>
        <FadeInSection>
          <ComparisonSection />
        </FadeInSection>
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
        <FadeInSection>
          <WhySection />
        </FadeInSection>
        <FadeInSection>
          <HowItWorksSection />
        </FadeInSection>
        <FadeInSection>
          <Angebot />
        </FadeInSection>

        <FadeInSection>
          <CtaSection onAnalyseClick={(email, website) => openModal("bottom_cta", email, website)} />
        </FadeInSection>
      </main>
      <Footer />
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
        initialEmail={prefillEmail}
        initialWebsite={prefillWebsite}
      />
    </>
  );
}
