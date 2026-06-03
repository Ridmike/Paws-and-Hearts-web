import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin, PawPrint } from 'lucide-react';
import { notFound } from 'next/navigation';
import { allPets, getPetBySlug } from '@/data/pets';

interface PetDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const tagColors = {
  green: 'bg-[#DCFCE7] text-[#15803D]',
  blue: 'bg-[#DBEAFE] text-[#1D4ED8]',
  orange: 'bg-[#FFEDD5] text-[#C2410C]',
  gray: 'bg-zinc-100 text-zinc-600',
};

export async function generateStaticParams() {
  return allPets.map((pet) => ({ slug: pet.slug }));
}

export default async function PetDetailsPage({ params }: PetDetailsPageProps) {
  const { slug } = await params;
  const pet = getPetBySlug(slug);

  if (!pet) {
    notFound();
  }

  const gallery = pet.gallery?.length ? pet.gallery : [pet.imageUrl, pet.imageUrl, pet.imageUrl];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="mb-6">
          <Link href="/pets" className="text-sm font-medium text-[#92400E] hover:underline">
            ← Back to pets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-white border border-zinc-200">
              <Image src={gallery[0]} alt={pet.name} fill className="object-cover" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#92400E]">
                Available for Adoption
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {gallery.slice(0, 3).map((image, index) => (
                <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200 bg-white">
                  <Image src={image} alt={`${pet.name} ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-[#0F172A]">{pet.name}</h1>
                  <p className="mt-1 text-lg font-medium text-[#92400E]">{pet.breed}</p>
                </div>
                <button
                  type="button"
                  aria-label="Add to favorites"
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 hover:bg-zinc-50"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-zinc-100 p-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Age</p>
                  <p className="text-xl font-bold text-[#C2410C]">{pet.age}</p>
                </div>
                <div className="rounded-xl bg-zinc-100 p-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Gender</p>
                  <p className="text-xl font-bold text-[#C2410C]">{pet.gender}</p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {pet.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tagColors[tag.color]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-bold text-[#0F172A]">About {pet.name}</h2>
                {pet.description.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-zinc-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#F97316] px-5 py-3 text-base font-semibold text-white hover:bg-[#EA580C]"
              >
                Apply for Adoption <PawPrint className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-[#EEF2FF] p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">Located at</p>
              <div className="flex items-center gap-2 text-[#0F172A]">
                <MapPin className="h-4 w-4 text-[#FB923C]" />
                <p className="font-bold">{pet.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
