import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ServicesComponent from "./components/ServicesComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import CTAComponent from "./components/CTAComponent";
import FooterComponent from "./components/FooterComponent";
import NavBarComponent from "./components/NavBarComponent";
export default function Home() {
  return (
    <main className="min-h-screen wrapper">
      <NavBarComponent/>
      <HeaderComponent />
      <HeroComponent />
      <ProjectsComponent />
      <ServicesComponent />
      <TestimonialsComponent />
      <CTAComponent />
      <FooterComponent/>
    </main>
  );
}
