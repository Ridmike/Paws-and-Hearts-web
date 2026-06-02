import { Button } from "@/components/common";
import { PetCard } from "@/components/pets";
import { PawPrint } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-16">
      {/* Button Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-[#0F172A]">Button Components</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">View All Pets</Button>
          <Button variant="secondary">Adopt Now</Button>
          <Button variant="outline">Meet Cooper</Button>
          <Button variant="ghost">How it Works</Button>
          <Button variant="primary" icon={PawPrint}>Apply for Adoption</Button>
        </div>
      </section>

      {/* Card Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-[#0F172A]">Pet Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PetCard 
            name="Cooper"
            breed="Golden Retriever"
            age="2 Years"
            imageUrl="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop"
            status="Available"
            tags={["Energetic", "Kid Friendly"]}
          />
          <PetCard 
            name="Buster"
            breed="Beagle"
            age="4 Years"
            imageUrl="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop"
            status="Playful"
            isFavorite={true}
          />
        </div>
      </section>
    </div>
  );
}