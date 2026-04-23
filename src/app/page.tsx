import { HeroSection } from '@/components/home/hero-section';
import { StatsStrip } from '@/components/home/stats-strip';
import { ServicesSection } from '@/components/home/services-section';
import { WhyUsSection } from '@/components/home/why-us-section';
import { ProcessStepper } from '@/components/home/process-stepper';
import { FeaturedPortfolio } from '@/components/home/featured-portfolio';
import { OurWork } from '@/components/our-work';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <WhyUsSection />
      <ProcessStepper />
      <FeaturedPortfolio />
      <OurWork />
      <TestimonialsSection />
    </div>
  );
}
