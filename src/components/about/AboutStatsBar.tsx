import { aboutStats } from '@/data/about';
import type { AboutStat } from '@/data/about';

const valueColors: Record<AboutStat['color'], string> = {
  green: 'text-[#22C55E]',
  white: 'text-white',
  blue: 'text-[#38BDF8]',
};

const AboutStatsBar = () => {
  return (
    <section className="bg-[#0F172A] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-3xl font-bold md:text-4xl ${valueColors[stat.color]}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-bold tracking-widest text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsBar;
