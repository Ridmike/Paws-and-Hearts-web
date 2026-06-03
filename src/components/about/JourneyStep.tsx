import { ClipboardList, Handshake, Home, Search } from 'lucide-react';
import type { JourneyStep as JourneyStepType } from '@/data/about';

interface JourneyStepProps {
  step: JourneyStepType;
}

const iconMap = {
  search: Search,
  clipboard: ClipboardList,
  handshake: Handshake,
  home: Home,
};

const JourneyStep = ({ step }: JourneyStepProps) => {
  const Icon = iconMap[step.icon];

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-white shadow-sm">
        <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#0F172A]">{step.title}</h3>
      <p className="max-w-[220px] text-sm leading-relaxed text-zinc-500">{step.description}</p>
    </div>
  );
};

export default JourneyStep;
