import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Layers, Megaphone, Camera, Globe, TrendingUp, Users, Medal, CheckCircle, Sparkle, ChartBar, Target, Layout, Search, Play, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentCard } from '@/src/components/ContentCard';
import SEO from '@/src/components/SEO';

const SERVICES_DATA = {
  'innehallsstrategi': {
    title1: 'Data-Diven',
    title2: 'Innehållsstrategi',
    badge: 'STRATEGI',
    desc: 'En skräddarsydd plan för din digitala tillväxt – vi tar bort gissningarna.',
    content: 'Vi hjälper er att sätta tydliga mål och skapar en strategi som lirar perfekt med er vision. Vi säkerställer att varje inlägg, varje video och varje annons samverkar för att maximera er ROI och bygga ett ostoppbart varumärke.',
    extendedContent: 'I dagens digitala landskap fungerar inte vilda chansningar. Vi analyserar er bransch, era konkurrenter och era möjligheter för att skapa en träffsäker roadmap framåt.',
    benefits: ['Marknadsanalys & Konkurrentkoll', 'Konkreta KPI:er och Mål', 'Kanalstrategi', 'Kampanjplanering'],
    process: [
      { title: '1. Discovery', desc: 'Vi synar er nuvarande digitala närvaro och sätter upp målbilder.' },
      { title: '2. Planering', desc: 'Format, kanaler, frekvens – vi bygger en detaljerad roadmap.' },
      { title: '3. Genomförande', desc: 'Vi börjar producera och implementera strategin.' },
      { title: '4. Optimering', desc: 'Kontinuerlig mätning. Vi förstärker det som funkar.' }
    ],
    video: '',
    seoTitle: 'Innehållsstrategi | Bygg en lönsam digital plan | NCA Media',
    seoDesc: 'Slipp gissa. Vi utvecklar en komplett innehålls- och tillväxtstrategi för er marknadsföring som driver verkliga resultat.',
    type: 'strategy'
  },
  'social-media': {
    title1: 'Social Media',
    title2: 'Management',
    badge: 'SOCIALA MEDIER',
    desc: 'Vi hanterar dina kanaler, bygger community och skapar organiskt engagemang.',
    content: 'Vi tar över spakarna för era sociala medier. Från idé och content planering till publicering och community management – vi sköter driften så ni kan fokusera på er kärnverksamhet.',
    extendedContent: 'Det handlar inte bara om att posta snygga bilder. Det handlar om att bygga ett community. Vi anpassar tonalitet och format unikt för Instagram, TikTok och LinkedIn för att få maximal effekt.',
    benefits: ['Löpande publicering', 'Community Management', 'Rapportering & Analys', 'Tillväxtstrategier'],
    process: [
      { title: '1. Uppstart', desc: 'Vi fastställer tonalitet, grafisk profil och rutiner.' },
      { title: '2. Content Calendar', desc: 'En rullande schema med planerade inlägg.' },
      { title: '3. Interaktion', desc: 'Vi svarar, gillar och engagerar oss med er målgrupp.' },
      { title: '4. Uppföljning', desc: 'Månatlig rapportering på räckvidd och konvertering.' }
    ],
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    seoTitle: 'Social Media Management | Driv engagemang & försäljning | NCA Media',
    seoDesc: 'Låt oss ta över dina sociala medier. NCA Media hanterar löpande scheman, interaktion och strategi på plattformar som Instagram, TikTok & LinkedIn.',
    type: 'social'
  },
  'videoproduktion': {
    title1: 'Visuellt som',
    title2: 'säljer',
    badge: 'PRODUKTION',
    desc: 'High-end foto och videoproduktion designat specifikt för Meta & TikTok.',
    content: 'Visuellt berättande är det som får tummen att stanna. Vårt in-house team producerar filmer, drönarbilder och skarpa foton som förmedlar er känsla och konverterar.',
    extendedContent: 'Oavsett om det är en rörande brand-video, dynamiska reels eller glödheta matbilder så sköter vi allt från storyboarding till klippning och färgkorrigering.',
    benefits: ['Kommersiell video', 'Reels / TikTok-fokuserat', 'Produktfoto & Drönare', 'Professionell redigering'],
    process: [
      { title: '1. Pre-production', desc: 'Kreativ brief, storyboarding, script och planering.' },
      { title: '2. Produktion', desc: 'Inspelningsdagar med professionell kamera, ljud och ljus.' },
      { title: '3. Post-production', desc: 'Klippning, färgkorrigering, ljuddesign och textning.' },
      { title: '4. Leverans', desc: 'Färdigt material anpassat för varje enskild plattform.' }
    ],
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    seoTitle: 'Videoproduktion i Skåne | Reklamfilm & Reels | NCA Media',
    seoDesc: 'Slående videoproduktion och kommersiellt foto för sociala medier. Vi skapar högkvalitativt content som stannar flödet och säljer din produkt.',
    type: 'production'
  },
  'meta-annonsering': {
    title1: 'Meta & Google',
    title2: 'Annonsering',
    badge: 'ANNONSERING',
    desc: 'Datadriven annonsering på Facebook, Instagram och Google.',
    content: 'Maxa er räckvidd och generera leads via resultatinriktad betald annonsering. Vi A/B-testar ständigt för att sänka ert CPA och höja er ROAS.',
    extendedContent: 'Sluta chansa med ad-spend. Vi implementerar skarpa pixlar, målgruppsanpassar och kör retargeting-kampanjer som jagar in den sista procenten konverteringar.',
    benefits: ['Performance Marketing', 'A/B-testing av Creatives', 'Retargeting-kampanjer', 'Budgetoptimering'],
    process: [
      { title: '1. Målgruppsanalys', desc: 'Vem säljer vi till och var finns de?' },
      { title: '2. Kampanjuppsättning', desc: 'Pixlar, events och teknisk setup.' },
      { title: '3. Annonsskapande', desc: 'Framtagning av copy och ad-creatives.' },
      { title: '4. Skalning', desc: 'Vi stänger ner det som blöder och skalar de vinnande annonserna.' }
    ],
    video: '',
    seoTitle: 'Meta & Google Annonsering | Performance Marketing | NCA Media',
    seoDesc: 'Lönsam och datadriven Meta-annonsering (Facebook/Instagram). Vi maximerar er ad-spend med skarp tracking och A/B testning för brutal tillväxt.',
    type: 'ads'
  }
};

const ServiceHeader = ({ badge, title1, title2, desc }: { badge: string, title1: string, title2: string, desc: string }) => (
  <div className="flex flex-col items-center text-center mb-20">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-8">
      <Sparkle className="w-4 h-4 text-[#1b54ff]" />
      <span className="text-[#1b54ff] text-sm font-semibold uppercase tracking-wider">{badge}</span>
    </div>
    <h1 className="text-5xl md:text-7xl font-sans font-normal tracking-tight mb-6">
      <span className="block">{title1}</span>
      <span className="font-light text-gradient-primary">{title2}</span>
    </h1>
    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
      {desc}
    </p>
  </div>
);

const CTA = ({ title = "Redo att skala upp?", desc = "Låt oss seöver er situation i ett kostnadsfritt strategisamtal." }) => (
  <div className="mt-24 text-center bg-[#1b54ff]/5 rounded-3xl p-8 md:p-12 border border-[#1b54ff]/10">
    <h2 className="text-3xl font-light tracking-tight mb-6">{title}</h2>
    <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">{desc}</p>
    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all">
      Boka strategisamtal <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);

const InteractiveProcessTimeline = ({ steps, title = "Processen" }: { steps: { title: string, desc: string }[], title?: string }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mb-24">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16 text-center">{title}</h2>
      <div className="flex flex-col md:flex-row gap-12 items-stretch max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-foreground/10" />
          <div 
            className="absolute left-[19px] top-4 w-0.5 bg-[#1b54ff] transition-all duration-500" 
            style={{ height: `calc(${(activeStep / (Math.max(1, steps.length - 1))) * 100}% - 1rem)` }} 
          />
          <div className="space-y-8 relative">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              const titleWithoutNumber = step.title.replace(/^\d+\.\s*/, '');
              return (
                <div
                  key={idx}
                  className="flex items-center gap-6 cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 ${isActive ? 'bg-[#1b54ff] text-white scale-110 shadow-lg shadow-[#1b54ff]/30' : isPast ? 'bg-[#1b54ff] text-white' : 'bg-background border-2 border-foreground/20 text-foreground/50 group-hover:border-[#1b54ff]/50'}`}>
                    {isPast ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold">{idx + 1}</span>}
                  </div>
                  <h3 className={`text-xl font-medium transition-colors duration-300 ${isActive ? 'text-[#1b54ff]' : isPast ? 'text-foreground' : 'text-foreground/60 group-hover:text-foreground'}`}>
                    {titleWithoutNumber}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-10 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1b54ff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <h3 className="text-sm font-semibold text-[#1b54ff] tracking-wider uppercase mb-3">Fas {activeStep + 1}</h3>
                <h4 className="text-3xl md:text-4xl font-light mb-6 text-foreground">{steps[activeStep].title.replace(/^\d+\.\s*/, '')}</h4>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

const GenericServiceLayout = ({ service, id }: { service: any, id: string }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background px-6 lg:px-8">
      <SEO title={service.seoTitle} description={service.seoDesc} url={`https://ncamedia.se/${id}`} canonical={`https://ncamedia.se/${id}`} />
      
      <div className="max-w-6xl mx-auto">
        <ServiceHeader badge={service.badge} title1={service.title1} title2={service.title2} desc={service.desc} />
        
        {/* About Service Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-6">Om tjänsten</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {service.content}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {service.extendedContent}
            </p>
            <ul className="space-y-4 mb-8">
              {service.benefits.map((b: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-lg"><CheckCircle className="w-5 h-5 text-[#1b54ff]" /> {b}</li>
              ))}
            </ul>
          </div>
          
          {/* Dynamic Graphic Based on Type */}
          <div className="bg-foreground/5 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
            {service.type === 'strategy' && (
              <>
                <ChartBar className="w-48 h-48 text-[#1b54ff]/20 absolute -bottom-10 -right-10" />
                <Target className="w-32 h-32 text-[#1b54ff]/40 absolute top-10 left-10" />
                <div className="relative z-10 bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Roadmap</h3>
                  <p className="text-foreground/70">Inget gissande. Bara rådata och utförande.</p>
                </div>
              </>
            )}
            {service.type === 'social' && (
              <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                 <div className="bg-[#1b54ff]/10 rounded-2xl flex items-center justify-center"><PenTool className="w-12 h-12 text-[#1b54ff]/40" /></div>
                 <div className="bg-[#1b54ff]/10 rounded-2xl flex items-center justify-center mt-8"><Users className="w-12 h-12 text-[#1b54ff]/40" /></div>
                 <div className="bg-[#1b54ff]/10 rounded-2xl flex items-center justify-center -mt-8"><Megaphone className="w-12 h-12 text-[#1b54ff]/40" /></div>
                 <div className="bg-[#1b54ff]/10 rounded-2xl flex items-center justify-center"><TrendingUp className="w-12 h-12 text-[#1b54ff]/40" /></div>
              </div>
            )}
            {service.type === 'production' && (
              <>
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/ncaprod/800/800')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                 <div className="relative z-10 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white">
                   <h3 className="text-xl font-medium mb-2 flex items-center gap-2"><Camera className="w-5 h-5"/> Spjutspets</h3>
                   <p className="text-white/70 text-sm">Utrustning och kompetens.</p>
                 </div>
              </>
            )}
            {service.type === 'ads' && (
              <>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#1b54ff]/20 to-transparent" />
                 <div className="relative z-10 w-full max-w-sm space-y-4">
                    <div className="bg-background rounded-xl p-4 shadow-lg border border-foreground/10 flex items-center justify-between">
                       <span className="text-sm font-medium">ROAS</span>
                       <span className="text-[#10B981] font-bold text-lg">+ 340%</span>
                    </div>
                    <div className="bg-background rounded-xl p-4 shadow-lg border border-foreground/10 flex items-center justify-between translate-x-4">
                       <span className="text-sm font-medium">CPA</span>
                       <span className="text-[#1b54ff] font-bold text-lg">- 42%</span>
                    </div>
                 </div>
              </>
            )}
          </div>
        </div>

        <InteractiveProcessTimeline steps={service.process} />
        <CTA />
      </div>
    </div>
  );
};

export const Service = ({ slug: explicitSlug }: { slug?: string }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || paramSlug;
  
  const service = activeSlug ? SERVICES_DATA[activeSlug as keyof typeof SERVICES_DATA] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Tjänsten hittades inte</h1>
          <Link to="/" className="text-[#1b54ff] hover:underline">Återvänd till startsidan</Link>
        </div>
      </div>
    );
  }

  return <GenericServiceLayout service={service} id={activeSlug as string} />;
};
