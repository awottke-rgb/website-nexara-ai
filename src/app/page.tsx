"use client";

import { useState, useEffect } from "react";
import DockNavbar from "@/components/nexara/DockNavbar";
import HeroSection from "@/components/nexara/HeroSection";
import ProblemSection from "@/components/nexara/ProblemSection";
import AboutSection from "@/components/nexara/AboutSection";
import ServicesSection from "@/components/nexara/ServicesSection";
import HowItWorksSection from "@/components/nexara/HowItWorksSection";
import ComparisonSection from "@/components/nexara/ComparisonSection";
import StatsSection from "@/components/nexara/StatsSection";
import CtaSection from "@/components/nexara/CtaSection";
import Footer from "@/components/nexara/Footer";
import LeadModal from "@/components/nexara/LeadModal";
import FadeInSection from "@/components/nexara/FadeInSection";
import { useExitIntent } from "@/hooks/useExitIntent";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("hero");

  const { hasTriggered } = useExitIntent(5000); // 5 seconds delay before active

  useEffect(() => {
    if (hasTriggered && !isModalOpen) {
      setModalSource("exit");
      setIsModalOpen(true);
    }
  }, [hasTriggered]);

  const openModal = (source: string) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  return (
    <>
      <DockNavbar onCtaClick={() => openModal("navbar")} />

      <main className="flex-1">
        <HeroSection onAnalyseClick={() => openModal("hero")} />

        <FadeInSection>
          <ProblemSection />
        </FadeInSection>

        <FadeInSection>
          <AboutSection />
        </FadeInSection>

        <FadeInSection>
          <ServicesSection />
        </FadeInSection>

        <FadeInSection>
          <ComparisonSection />
        </FadeInSection>

        <FadeInSection>
          <CtaSection onAnalyseClick={() => openModal("bottom_cta")} />
        </FadeInSection>
      </main>

      <Footer />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
      />
    </>
  );
}
