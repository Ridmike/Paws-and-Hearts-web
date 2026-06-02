import { Hero, Stats, Residents, Mission, Testimonials } from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <Residents />
      <Mission />
      <Testimonials />
    </div>
  );
}