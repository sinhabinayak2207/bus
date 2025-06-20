import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ServiceCategories from '@/components/home/ServiceCategories';
import FeatureHighlights from '@/components/home/FeatureHighlights';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceCategories />
      <FeatureHighlights />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
}
