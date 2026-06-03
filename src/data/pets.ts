export type PetTagColor = 'green' | 'blue' | 'orange' | 'gray';

export interface PetTag {
  label: string;
  color: PetTagColor;
}

export interface PetProfile {
  slug: string;
  name: string;
  age: string;
  breed: string;
  gender: 'Male' | 'Female';
  imageUrl: string;
  gallery?: string[];
  description: string[];
  location: string;
  tags: PetTag[];
  isFavorite?: boolean;
}

export const allPets: PetProfile[] = [
  {
    slug: 'cooper',
    name: 'Cooper',
    age: '2 Years',
    breed: 'Golden Retriever',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1000&auto=format&fit=crop',
    ],
    description: [
      "Cooper is a bundle of sunshine and golden fur. He's a gentle soul who loves fetch in the afternoon and cozy naps by your feet.",
      "He is well-behaved, knows basic commands, and does great with children and other friendly dogs.",
      'Cooper thrives on companionship and would make a wonderful addition to an active family.',
    ],
    location: 'Green Valley Shelter',
    tags: [
      { label: 'Vaccinated', color: 'green' },
      { label: 'Neutered', color: 'green' },
      { label: 'Microchipped', color: 'green' },
    ],
  },
  {
    slug: 'luna',
    name: 'Luna',
    age: '4 Years',
    breed: 'Domestic Shorthair',
    gender: 'Female',
    imageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Luna is affectionate, calm, and loves sunny windowsills.',
      'She is litter-trained, playful in the evenings, and enjoys soft blankets.',
    ],
    location: 'Paws & Hearts Rescue',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'oliver',
    name: 'Oliver',
    age: '1 Year',
    breed: 'Terrier Mix',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Oliver is energetic, smart, and always ready for an outdoor walk.',
      'He does best with active adopters who can give him regular playtime.',
    ],
    location: 'Happy Tails Home',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'duke',
    name: 'Duke',
    age: '8 Years',
    breed: 'Yellow Lab',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Duke is a senior sweetheart with a calm and loving personality.',
      'He enjoys short walks, gentle play, and lots of affection.',
    ],
    location: 'Hope Animal Center',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'milo',
    name: 'Milo',
    age: '4 Months',
    breed: 'Tabby Kitten',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Milo is a curious kitten who loves toys, climbing posts, and cuddles.',
      'He is social and adapts quickly to new environments.',
    ],
    location: 'Whiskers Rescue',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'bella',
    name: 'Bella',
    age: '3 Years',
    breed: 'Border Collie',
    gender: 'Female',
    imageUrl:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Bella is highly intelligent and loves learning tricks.',
      'She would thrive in a home that can provide both exercise and mental stimulation.',
    ],
    location: 'New Hope Kennel',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'buster-pip',
    name: 'Buster & Pip',
    age: '3 Months',
    breed: 'Beagle Mix',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Buster and Pip are bonded pups full of charm and playful energy.',
      'They are happiest when exploring together and napping side by side.',
    ],
    location: 'Sunrise Pet Shelter',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'cleo',
    name: 'Cleo',
    age: '5 Years',
    breed: 'Siamese',
    gender: 'Female',
    imageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Cleo is vocal, graceful, and loves human attention.',
      'She prefers a quiet home where she can be the center of affection.',
    ],
    location: 'Cat Haven',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'shalow',
    name: 'Shalow',
    age: '8 Years',
    breed: 'Yellow Lab',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Shalow is gentle and mellow, perfect for families wanting a calm companion.',
    ],
    location: 'Green Meadow Shelter',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'miko',
    name: 'Miko',
    age: '4 Months',
    breed: 'Tabby Kitten',
    gender: 'Female',
    imageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Miko is playful and curious, always exploring every corner.',
    ],
    location: 'Whiskers Rescue',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'ana',
    name: 'Ana',
    age: '3 Years',
    breed: 'Border Collie',
    gender: 'Female',
    imageUrl:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Ana is attentive, obedient, and loves spending time outdoors.',
    ],
    location: 'Hillside Rescue Farm',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'buster',
    name: 'Buster',
    age: '3 Months',
    breed: 'Beagle Mix',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Buster is a cheerful puppy who loves meeting new people.',
    ],
    location: 'Happy Trails Shelter',
    tags: [{ label: 'Available', color: 'green' }],
  },
  {
    slug: 'soro',
    name: 'Soro',
    age: '5 Years',
    breed: 'Siamese',
    gender: 'Male',
    imageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: [
      'Soro is gentle and affectionate with a calm personality.',
    ],
    location: 'Cat Haven',
    tags: [{ label: 'Available', color: 'green' }],
  },
];

export const getPetBySlug = (slug: string) =>
  allPets.find((pet) => pet.slug === slug);
