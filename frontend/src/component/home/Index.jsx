import React from 'react';

// Importing all the section components from the home folder
import HeroSection from './HeroSection';

import ServicesSection from './ServicesSection';
import CTASection from './CTASection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialSection from './TestimonialSection';
import FeaturedProductsSection from './FeaturedProductsSection';
import PortfolioSection from './PortfolioSection';
import FAQSection from './FAQSection';
import PartnersSection from './PartnersSection';
import TeamSection from './TeamSection';
import BlogSection from './BlogSection';

const Index = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

     

      {/* 3. Services/Features Section */}
      <ServicesSection />

      {/* 4. Call to Action (CTA) Section */}
      <CTASection />

      {/* 5. How It Works Section */}
      <HowItWorksSection />

      {/* 6. Testimonial Section */}
      <TestimonialSection />

      {/* 7. Featured Products/Services Section */}
      

      {/* 8. Portfolio/Gallery Section */}
      

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Partners/Clients Section */}
      

      {/* 11. Team Section */}
      

      {/* 12. Blog/News Section */}
      <BlogSection />
    </div>
  );
};

export default Index;
