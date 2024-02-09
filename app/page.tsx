import Image from "next/image";
import {About, Hero} from "@/components";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
