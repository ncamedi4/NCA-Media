import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkle, Target, DeviceMobile, Camera, Video } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { SectionReveal } from './Animations';
import { PrimaryButton } from './Layout';
import { useTranslation } from 'react-i18next';

export const CASES = [
  {
    title: "Solblixt",
    tags: ["PAID ADS"],
    description: "5 stängda affärer och 70+ leads på första veckan. En kampanj som gick från noll till att leverera konkreta affärer direkt.",
    image: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FTest%2F2024-05-21.png?alt=media&token=4ec687d5-1fae-4ac4-9091-a6bb1662d3f6",
    link: "#"
  },
  {
    title: "Sandin Dentalklinik",
    tags: ["Content Creation", "Social Media"],
    description: "Startup to over 1.4 million views and multiple consultations in four months",
    image: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FV2%2FIMG_5149.png?alt=media&token=cc013516-ce61-4523-86ea-3e9fe54816b7",
    link: "#"
  },
  {
    title: "Shah's Halal Food",
    tags: ["GROWTH CAMPAIGN"],
    description: "Skalade en kampanj från 1 500 kr till 15 000 kr i budget när vi såg att den konverterade. Resultatet motiverade varje krona.",
    image: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FTest%2FDSC00781.png?alt=media&token=b2a4a967-03fb-41b0-be4d-e19d1f6d192c",
    link: "#"
  },
  {
    title: "Solvikens förskola",
    tags: ["Content Creation"],
    description: "Video production from events that builds brand and presence",
    image: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FTest%2F3S1A4554-1024x683.jpg?alt=media&token=a0886d97-44c0-4d82-afde-2a99ce71ae23",
    link: "#"
  }
];

export const TheNCAWay = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full bg-background py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-6">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
              <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('ncaWay.tagline')}</span>
            </div>
          </SectionReveal>
          
          <SectionReveal delay={0.1}>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              <span className="block">{t('ncaWay.title1')}</span>
              <span className="font-medium text-gradient-primary">{t('ncaWay.title2')}</span>
            </h2>
          </SectionReveal>
          
          <SectionReveal delay={0.2}>
            <p 
              className="text-foreground/60 text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t('ncaWay.desc') }} 
            />
          </SectionReveal>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <SectionReveal delay={0.3}>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#1b54ff] text-4xl font-bold mb-4">01</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('ncaWay.items.strategy.title')}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t('ncaWay.items.strategy.desc')}
              </p>
            </div>
          </SectionReveal>
          
          <SectionReveal delay={0.4}>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#1b54ff] text-4xl font-bold mb-4">02</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('ncaWay.items.content.title')}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t('ncaWay.items.content.desc')}
              </p>
            </div>
          </SectionReveal>
          
          <SectionReveal delay={0.5}>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#1b54ff] text-4xl font-bold mb-4">03</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('ncaWay.items.growth.title')}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t('ncaWay.items.growth.desc')}
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CASES.map((item, idx) => (
            <SectionReveal key={idx} delay={0.2 + idx * 0.1}>
              <div className="relative h-full bg-background transition-all duration-300 flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 rounded-md overflow-hidden border border-foreground/5">
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col flex-grow p-8 pt-0">
                  <h3 className="text-foreground text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <PrimaryButton className="w-full sm:w-auto px-6 py-3 text-sm" showArrow>
                      Read more
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center w-full">
          <SectionReveal delay={0.6} className="w-full sm:w-auto">
            <Link to="/portfolio" className="w-full sm:w-auto block">
              <PrimaryButton variant="solid" showArrow className="w-full sm:w-auto justify-center">
                See more cases
              </PrimaryButton>
            </Link>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
};
