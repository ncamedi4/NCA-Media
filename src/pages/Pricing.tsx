import React from 'react';
import SEO from '@/src/components/SEO';
import { PricingCards } from '@/src/components/PricingCards';

export const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-32 pb-24">
      <SEO 
        title="Priser & Paket – Videoproduktion & Digital Marknadsföring | NCA Media" 
        description="Fasta och transparenta priser för videoproduktion och digital marknadsföring i Skåne. Välj mellan Script Partner, Content Partner och Master Partner. Inga dolda avgifter."
        url="https://ncamedia.se/priser"
        canonical="https://ncamedia.se/priser"
      />
      
      <div className="container mx-auto px-6 lg:px-12">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-sans font-normal text-foreground tracking-tight mb-6">
              Transparent prissättning.<br/>
              <span className="text-gradient-primary">Inga dolda avgifter.</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Välj paketet som matchar er ambition. Alla priser presenteras exklusive moms. Vi tror på att vara öppna med vad saker kostar.
            </p>
         </div>

         <PricingCards />
      </div>
    </div>
  );
};
