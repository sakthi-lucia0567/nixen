"use client";
import AnnouncementBanner from "@/components/ui/announcement-banner";
import BlogSection from "@/components/ui/blog-section";
import PortfolioSection from "@/components/ui/carousal-section";
import { CompanySection } from "@/components/ui/company-section";
import ContactSection from "@/components/ui/contact-section";
import CallToAction from "@/components/ui/cta-section";
import { FAQSection } from "@/components/ui/faq-section";
import { FeatureListSection } from "@/components/ui/feature-list";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero";
import DigitalMarketingSection from "@/components/ui/marketing-section";
import Navbar from "@/components/ui/navmenu";
import Timeline from "@/components/ui/timeline";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <CompanySection />
      <FeatureListSection />
      <DigitalMarketingSection />
      <Timeline />
      <CallToAction />
      <PortfolioSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
