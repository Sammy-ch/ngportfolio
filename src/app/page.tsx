import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
export default function Home() {
  return (
    <main className="min-h-screen p-24 wrapper">
      <HeaderComponent />
      <HeroComponent/>
    </main>
  );
}
