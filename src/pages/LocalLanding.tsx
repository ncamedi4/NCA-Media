import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SEO from '@/src/components/SEO';
import { PricingCards } from '@/src/components/PricingCards';

export const LocalLanding = () => {
  const { city } = useParams<{ city: string }>();
  // Capitalize city format
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() : 'Skåne';
  // Adjust Malmo -> Malmö
  const cityName = formattedCity === 'Malmo' ? 'Malmö' : formattedCity;

  const title = `Videoproduktion & Digital Marknadsföring i ${cityName} | NCA Media`;
  const description = `Skånes ledande tillväxtpartner för företag. Vi bygger marknadsföring, videoproduktion och sociala medier som driver affärer i ${cityName}. Boka gratis samtal.`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-32 pb-24">
      <SEO 
        title={title} 
        description={description} 
        url={`https://ncamedia.se/${city}`}
        canonical={`https://ncamedia.se/${city}`} 
      />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#1b54ff] text-sm font-semibold uppercase tracking-wider mb-4 block">Tillväxtpartner {cityName}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-normal leading-[1.1] tracking-tight mb-6">
              Skånes ledande <span className="text-gradient-primary">tillväxtpartner</span> för restauranger och företag.
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
              Letar du efter en digital byrå i {cityName} som förstår att det enda som räknas är sista raden? 
              Vi är NCA Media. Vi kombinerar spjutspetsig videoproduktion med konverteringsoptimerad Meta-annonsering. 
              Målet? Att driva riktiga affärer till din verksamhet i {cityName}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#1b54ff] text-white font-medium rounded-md hover:bg-[#1b54ff]/90 transition-colors flex items-center justify-center gap-2">
                Boka gratis strategisamtal <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/portfolio" className="px-8 py-4 bg-foreground/5 text-foreground font-medium rounded-md hover:bg-foreground/10 transition-colors flex items-center justify-center">
                Se våra case
              </Link>
            </div>
          </div>
          <div className="bg-[#030A26] rounded-2xl p-10 text-white relative shadow-xl overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#1b54ff] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
             
             <h3 className="text-2xl font-light mb-6 border-b border-white/10 pb-6 relative z-10">Varför välja NCA Media i {cityName}?</h3>
             <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#10B981]/20 p-1 rounded-full"><Check className="w-4 h-4 text-[#10B981]" /></div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Mätbara Resultat</h4>
                    <p className="text-white/60 text-sm">Vi mäter vår framgång i bokningar, leads och omsättning för din verksamhet — inte i "antal videos".</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#10B981]/20 p-1 rounded-full"><Check className="w-4 h-4 text-[#10B981]" /></div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Allt under ett tak</h4>
                    <p className="text-white/60 text-sm">Strategi, kamera, drönare, klippning och annonsering. Ett slutet ekosystem av content som konverterar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#10B981]/20 p-1 rounded-full"><Check className="w-4 h-4 text-[#10B981]" /></div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Lokalt förankrade</h4>
                    <p className="text-white/60 text-sm">Vi vet marknaden i Skåne och vet vad som krävs för att bli det självklara valet i {cityName}.</p>
                  </div>
                </li>
             </ul>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-[#09102b] py-24 mb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-light tracking-tight mb-4">Bevisad tillväxt</h2>
            <p className="text-white/60 text-lg">Alltid konkreta siffror. Alltid namngivna kunder.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <span className="text-white/70 text-sm font-medium mb-2 block">Solblixt</span>
              <div className="text-4xl md:text-5xl lg:text-6xl text-[#1b54ff] font-light mb-6">70+ leads<br/>vecka 1</div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                5 stängda affärer under den första veckan. Fullständigt content- och annonsupplägg från dag ett. Från noll till full pipeline på 7 dagar.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <span className="text-white/70 text-sm font-medium mb-2 block">Shahs Halal Food</span>
              <div className="text-4xl md:text-5xl lg:text-6xl text-[#1b54ff] font-light mb-6">10× annons-<br/>budget skalad</div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Identifierade det vinnande kreativa på vecka två. Skalade budgeten 10× med bibehållen ROAS. Annonserna rullar fortfarande.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section imported here */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-4xl font-sans font-normal text-foreground tracking-tight mb-4">
          Transparent prissättning.
        </h2>
        <p className="text-lg text-foreground/70">
          Inga dolda avgifter. Välj paketet som matchar er ambition.
        </p>
      </div>
      <div className="px-6 lg:px-12">
        <PricingCards />
      </div>

    </div>
  );
}
