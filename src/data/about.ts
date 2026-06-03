export interface JourneyStep {
  title: string;
  description: string;
  icon: 'search' | 'clipboard' | 'handshake' | 'home';
}

export interface AboutStat {
  value: string;
  label: string;
  color: 'green' | 'white' | 'blue';
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const journeySteps: JourneyStep[] = [
  {
    title: 'Browse',
    description: 'Explore our gallery of lovable pets ready for a home.',
    icon: 'search',
  },
  {
    title: 'Apply',
    description: 'Fill out a simple form to share your home environment.',
    icon: 'clipboard',
  },
  {
    title: 'Meet',
    description: 'A scheduled visit to see if the chemistry is just right.',
    icon: 'handshake',
  },
  {
    title: 'Welcome Home',
    description: 'Finalize the paperwork and start your life together.',
    icon: 'home',
  },
];

export const aboutStats: AboutStat[] = [
  { value: '4,200+', label: 'PETS SAVED', color: 'green' },
  { value: '850+', label: 'VOLUNTEERS', color: 'white' },
  { value: '12', label: 'YEARS OF SERVICE', color: 'blue' },
  { value: '98%', label: 'SUCCESS RATE', color: 'green' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Executive Director',
    bio: 'Sarah has led over 1,000 successful rescue operations with 15 years of nonprofit experience.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr. Marcus Thorne',
    role: 'Head Veterinarian',
    bio: 'Expert in emergency animal care and nutrition, ensuring every pet leaves healthier than they arrived.',
    imageUrl:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b1d2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Behaviorist',
    bio: 'Elena specializes in rehabilitation for shy and anxious pets, using positive reinforcement techniques.',
    imageUrl:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'Volunteer Coordinator',
    bio: 'David manages our incredible network of 850+ volunteers with precision and a huge smile.',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
];

export const aboutHeroImage =
  'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop';
