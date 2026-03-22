import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <main className="flex-1 pb-8">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
