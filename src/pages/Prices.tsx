import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { PrimaryButton } from '@/src/components/Layout';
import { SectionReveal, TextReveal } from '@/src/components/Animations';
import { useMeta } from '@/src/hooks/useMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
};

const packages = [
  {
    name: 'Script Partner',
    price: '7 500',
    tagline: 'Du filmar. Vi bygger det som gör att videos presterar.',
    featured: false,
    items: [
      'Innehållsstrategi kopplad till dina mål',
      'Scripts och hooks per video',
      'Shotlist och on-screen text',
      'Caption copy i rätt tonalitet',
      'Feedbackrunda ingår',
    ],
  },
  {
    name: 'Content Partner',
    price: '15 500',
    tagline: 'Vi producerar allt. Ni fokuserar på verksamheten.',
    featured: true,
    items: [
      '7 kameravideos + 5 telefonvideos / mån',
      '15 bilder per månad',
      'Social media management',
      'Strategi kopplad till säsong & lokala triggers',
      'Bonus: Referensprogram — 2 000 kr per kund du skickar',
      'Bonus: Filmning & fotografering på plats',
      'Bonus: 10 extra modell-videos / mån',
    ],
  },
  {
    name: 'Master Partner',
    price: '30 000',
    tagline: 'Maxad output. Kampanjdrivet vid launches och events.',
    featured: false,
    items: [
      '10 kameravideos + 10 telefonvideos / mån',
      'Bilder ingår',
      'Social media management i högre takt',
      'Kampanjdrivet: launches, öppningar, nya satsningar',
      'Veckoplanering & live-flöde',
      'Bonus: Referensprogram — 2 000 kr per kund',
      'Bonus: 15 extra modell-videos / mån',
    ],
  },
];

const addons = [
  { name: 'Ads Manager (Meta)', price: '3 000 kr/mån', desc: 'Vi kör era Meta-kampanjer. Annonsbudget betalas separat till Meta.' },
  { name: 'Drönare', price: '2 000 kr', desc: 'Per shoot.' },
  { name: 'Enkel shoot', price: '4 000 kr', desc: 'Halvdag inkl. redigering.' },
  { name: 'Halvdag', price: '8 000 kr', desc: 'Professionell shoot, halvdag.' },
  { name: 'Heldag', price: '14 000 kr', desc: 'Full produktion, heldag.' },
  { name: 'Redigering', price: '1 000 kr/h', desc: 'Tillägg utanför ingående paket.' },
];

export const Prices = () => {
  useMeta({
    title: 'Priser – NCA Media | Social Media & Videoproduktion Malmö',
    description: 'Script Partner 7 500 kr/mån, Content Partner 15 500 kr/mån, Master Partner 30 000 kr/mån. Transparent prissättning från NCA Media i Malmö.',
    canonical: 'https://www.ncamedia.se/priser',
  });

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-16 max-w-5xl mx-auto">
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Priser</p>
          <TextReveal>
            <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-6">
              Transparent prissättning.<br />
              <span className="text-primary">Inga dolda avgifter.</span>
            </h1>
          </TextReveal>
          <p className="text-lg font-light text-muted-foreground max-w-xl leading-relaxed">
            Välj paketet som matchar er ambition. Alla priser exklusive moms.
            Annonsbudget till Meta/TikTok tillkommer och betalas direkt till plattformen.
          </p>
        </SectionReveal>
      </section>

      {/* Packages */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={cn(
                'flex flex-col p-8 bg-background',
                pkg.featured && 'bg-primary/5 ring-1 ring-primary/30'
              )}
            >
              {pkg.featured && (
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Populärast</span>
              )}
              <h2 className="text-2xl font-light text-foreground mb-1">{pkg.name}</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{pkg.tagline}</p>
              <div className="mb-1">
                <span className={cn('text-4xl font-light', pkg.featured ? 'text-primary' : 'text-foreground')}>
                  {pkg.price} kr
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-8">per månad, exkl. moms</p>

              <div className="w-6 h-px bg-primary/40 mb-6" />

              <ul className="flex flex-col gap-3 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={cn(
                  'mt-8 block text-center text-sm font-bold uppercase tracking-wider py-3 transition-opacity',
                  pkg.featured
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'border border-border text-muted-foreground hover:text-foreground hover:bg-white/5'
                )}
              >
                Välj paket
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Offer schema for Google */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "NCA Media Partnerpaket",
          "itemListElement": packages.map((pkg, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Offer",
              "name": pkg.name,
              "description": pkg.tagline,
              "price": pkg.price.replace(' ', ''),
              "priceCurrency": "SEK",
              "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "MON" },
              "seller": { "@type": "Organization", "name": "NCA Media" }
            }
          }))
        })}} />
      </section>

      {/* Add-ons */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto pb-24">
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Tillägg & Löspris</p>
          <h2 className="text-3xl font-light mb-12">Behöver ni mer?</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="p-6 bg-background"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{addon.price}</p>
              <h3 className="text-base font-medium text-foreground mb-1">{addon.name}</h3>
              <p className="text-sm text-muted-foreground">{addon.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto pb-24">
        <SectionReveal>
          <div className="border border-border p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-light mb-2">Osäker på vilket paket?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Boka ett gratis 30-minuterssamtal med Anton. Vi går igenom er situation och rekommenderar
                rätt paket — utan sälj-pitch.
              </p>
            </div>
            <Link to="/contact">
              <PrimaryButton className="flex items-center gap-2">
                Boka gratis samtal <ArrowRight size={16} />
              </PrimaryButton>
            </Link>
          </div>
        </SectionReveal>
      </section>

    </div>
  );
};
