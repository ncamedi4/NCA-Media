import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Sparkle, ArrowRight, Robot, Stack, Calendar, FileText, Gauge, Megaphone, Target, PuzzlePiece, CaretLeft, CaretRight, Camera, Globe, MagnifyingGlass, Users, TrendUp, Medal, Quotes, Star, CheckCircle, EnvelopeSimple, Phone, LinkedinLogo, Plus, Minus } from '@phosphor-icons/react';
import { cn } from '@/src/lib/utils';
import { PrimaryButton, SecondaryButton } from '@/src/components/Layout';
import { HLSVideo, TextReveal, SectionReveal } from '@/src/components/Animations';
import { TheNCAWay } from '@/src/components/TheNCAWay';
import { WhyChooseUs } from '@/src/components/WhyChooseUs';
import { ContentCard } from '@/src/components/ContentCard';
import { TestimonialsColumn } from '@/src/components/ui/testimonial-v2';
import { InfiniteSlider } from '@/src/components/ui/infinite-slider';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMeta } from '@/src/hooks/useMeta';

const HERO_BG_IMAGE = "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/Namnlo%CC%88s%20design%20(4).png?alt=media&token=928c1711-165a-43a7-8e87-0b956ce76d5a";
const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FLogos%2FNCA_LOGO_PRIMARY.png?alt=media&token=d6eb8a9d-8878-4c0f-8fe4-814cb7b6e290";

const SERVICES_VIDEO_1 = "https://stream.mux.com/Jwr2RhmsNrd6GEspBNgm02vJsRZAGlaoQIh4AucGdASw.m3u8";
const SERVICES_VIDEO_2 = "https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8";
const CONNECTIONS_VIDEO = "https://stream.mux.com/blULaJm2RMbAmsrwxLrBdgEx9yI1do2yM89vHTkdA6I.m3u8";
const CONNECTIONS_WEBM = "https://qsstudios.net/assets/connections-circular-DYUI_OuS.webm";
const FEATURES_BANNER = "https://qsstudios.net/assets/features-banner-2-IV6LfqEy.png";

const LOGOS = [
  { name: "Restaurant 1", src: "https://qsstudios.net/assets/forbes-B01EtZP0.png" },
  { name: "Restaurant 2", src: "https://qsstudios.net/assets/nytimes-CsdLnk2v.png" },
  { name: "Restaurant 3", src: "https://qsstudios.net/assets/crunchbase-BccLIQ3j.png" },
  { name: "Restaurant 4", src: "https://qsstudios.net/assets/mashup-31SruaVh.png" },
  { name: "Restaurant 5", src: "https://qsstudios.net/assets/lovable-Di06-U94.png" },
];

const CREATORS = [
  { name: "Local Bistro", image: "https://picsum.photos/seed/restaurant1/600/800", subtitle: "Stockholm, Sweden" },
  { name: "Gourmet Grill", image: "https://picsum.photos/seed/restaurant2/600/800", subtitle: "Multi-location Brand" },
  { name: "The Pasta House", image: "https://picsum.photos/seed/restaurant3/600/800", subtitle: "Growth Partner" },
  { name: "Urban Eats", image: "https://picsum.photos/seed/restaurant4/600/800", subtitle: "Digital Transformation" },
  { name: "Fine Dining Co", image: "https://picsum.photos/seed/restaurant5/600/800", subtitle: "Premium Partner" },
];

const SERVICES = [
  { 
    title: "Digital Strategy", 
    description: "A tailored roadmap for your company's digital growth and long-term success.", 
    video: SERVICES_VIDEO_1 
  },
  { 
    title: "Social Media Management", 
    description: "We manage your channels, create engagement, and build a loyal community around your business.", 
    video: SERVICES_VIDEO_2 
  },
  { 
    title: "Photo & Video Production", 
    description: "High-quality content that captures your company's atmosphere and offerings in a way that sells.", 
    video: SERVICES_VIDEO_1 
  },
  { 
    title: "Websites", 
    description: "Modern, fast, and conversion-optimized websites that make it easy for customers to act.", 
    video: SERVICES_VIDEO_2 
  },
  { 
    title: "Google & META Ads", 
    description: "Targeted advertising that puts your business in front of the right customers in your area.", 
    video: SERVICES_VIDEO_1 
  },
  { 
    title: "Influencer Marketing", 
    description: "We connect your brand with the right profiles to reach a broader and relevant target audience.", 
    video: SERVICES_VIDEO_2 
  },
  { 
    title: "Brand Awareness", 
    description: "We strengthen your brand and make your company the obvious choice for local customers.", 
    video: SERVICES_VIDEO_1 
  },
];

const TEAM = [
  { 
    id: 1, 
    name: "Andreas Carlsen", 
    designation: "CEO & Advisor", 
    image: "https://picsum.photos/seed/andreas/600/800",
    email: "andreas@ncamedia.no",
    phone: "+47 123 45 678",
    linkedin: "#"
  },
  { 
    id: 2, 
    name: "Trym Bekke", 
    designation: "Digital Advisor & Marketer", 
    image: "https://picsum.photos/seed/trym/600/800",
    email: "trym@ncamedia.no",
    phone: "+47 123 45 678",
    linkedin: "#"
  },
  { 
    id: 3, 
    name: "Shimal Abdal", 
    designation: "Content Creator", 
    image: "https://picsum.photos/seed/shimal/600/800",
    email: "shimal@ncamedia.no",
    phone: "+47 123 45 678",
    linkedin: "#"
  },
  { 
    id: 4, 
    name: "Haval Abdal", 
    designation: "Content Creator", 
    image: "https://picsum.photos/seed/haval/600/800",
    email: "haval@ncamedia.no",
    phone: "+47 123 45 678",
    linkedin: "#"
  },
  { 
    id: 5, 
    name: "Benjamin Frydenlund", 
    designation: "Digital Marketer", 
    image: "https://picsum.photos/seed/benjamin/600/800",
    email: "benjamin@ncamedia.no",
    phone: "+47 123 45 678",
    linkedin: "#"
  },
];

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#09102b] flex flex-col items-center justify-center pt-32 pb-48">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FV2%2Fvidep%2FMalmo%20(Malmo%CC%88)%20Sweden%20%F0%9F%87%B8%F0%9F%87%AA%20%204K%20Drone%20Footage%20-%20MTI%20Aerials%20(1080p%2C%20h264)_2.mp4?alt=media&token=7fd7b2c5-8c38-4f79-b10e-8e1183632e24" type="video/mp4" />
        </video>
        {/* Gradient fade and blur at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[70vh] bg-gradient-to-t from-[#030A26]/90 via-[#030A26]/50 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-4 sm:px-8 mt-16">
        <SectionReveal delay={0}>
          <h1 className="text-5xl md:text-6xl lg:text-[77px] font-sans font-normal leading-[1.1] text-white tracking-tight mb-6">
            {t('hero.unleashing')}<br />
            {t('hero.creating')}
          </h1>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mb-10">
            {t('hero.description')}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-md bg-white" />
                {t('hero.ourServices')}
              </button>
            </a>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-md text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Se våra case <ArrowRight weight="duotone" className="w-5 h-5 -rotate-45" />
              </button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

const PartnershipsCloud = () => {
  const { t } = useTranslation();
  const logos = [
    <div key="1" className="text-2xl lg:text-3xl font-sans font-bold text-foreground">Oscar Osberg</div>,
    <div key="2" className="text-2xl lg:text-3xl font-sans font-medium text-foreground">Ioannis Kesidis</div>,
    <div key="3" className="text-2xl lg:text-3xl font-sans font-light tracking-wide text-foreground">Björn Selvadurai</div>,
    <div key="4" className="text-2xl lg:text-3xl font-sans font-bold text-foreground">Jamie Mabon</div>,
    <div key="5" className="text-2xl lg:text-3xl font-sans font-medium tracking-tight text-foreground">Patrik Olsson</div>,
    <div key="6" className="text-2xl lg:text-3xl font-sans font-medium text-foreground">Johnny G</div>,
    <div key="7" className="text-2xl lg:text-3xl font-sans font-bold text-foreground">Ismail Rammo</div>,
  ];

  return (
    <section className="w-full py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-medium leading-tight text-center mb-16">
          <span className="text-foreground/60">{t('partnerships.trusted')}</span><br/>
          <span className="text-foreground font-bold">{t('partnerships.used')}</span>
        </h2>
        
        <div className="w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <InfiniteSlider gap={80} duration={30} durationOnHover={60}>
            {logos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                {logo}
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

const ClientLogos = () => {
  // Duplicate logos for seamless infinite scroll
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="w-full py-24 bg-[#f3f4f6] overflow-hidden border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="relative w-full flex overflow-hidden">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f3f4f6] to-transparent z-10 pointer-events-none" />
          
          {/* Marquee Track */}
          <div className="flex animate-marquee-logos whitespace-nowrap items-center">
            {marqueeLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 flex items-center justify-center px-8 lg:px-16 opacity-50 hover:opacity-100 transition-opacity duration-300" 
              >
                <img src={logo.src} alt={logo.name} className="max-h-8 lg:max-h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f3f4f6] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const CreatorsMarquee = () => {
  const { t } = useTranslation();
  const tripledCreators = [...CREATORS, ...CREATORS, ...CREATORS];
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="flex flex-col items-center gap-12">
        <p className="text-base md:text-lg lg:text-xl font-light text-center text-foreground/25 px-4 tracking-[0.15em] uppercase">
          {t('creators.title1')} <span className="bg-gradient-to-r from-foreground/50 to-purple-200/50 bg-clip-text text-transparent">{t('creators.title2')}</span>
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div 
            className="flex gap-6"
            animate={{ x: "-33.333%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {tripledCreators.map((creator, idx) => (
              <div key={idx} className="flex-shrink-0 w-[140px] md:w-[180px] lg:w-[220px]">
                <div className="group relative rounded-md overflow-hidden border border-border bg-secondary/30 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={creator.image} alt={creator.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 backdrop-blur-md bg-foreground/5">
                    <p className="text-foreground font-medium text-xs md:text-base tracking-wide uppercase text-center leading-none truncate">{creator.name}</p>
                    {creator.subtitle && <p className="text-foreground text-sm md:text-lg text-center mt-1 leading-none truncate">{creator.subtitle}</p>}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSlider = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - visibleCount);

  return (
    <section id="services" className="w-full px-6 lg:px-12 py-32 scroll-mt-20 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#1b54ff]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-6">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
              <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              <TextReveal text="Companies use NCA Media" tag="span" className="block" />
              <span className="font-medium text-gradient-primary">to drive real growth</span>
            </h2>
            <SectionReveal inView>
              <p className="text-foreground/60 text-lg font-normal leading-relaxed max-w-xl">
                We help companies turn attention into actual customers. From local gems to large brands, we build the systems that scale.
              </p>
            </SectionReveal>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIndex(prev => Math.max(0, prev - 1))}
                disabled={index === 0}
                className="w-12 h-12 rounded-md border border-foreground/10 flex items-center justify-center text-foreground transition-all hover:bg-foreground/5 hover:border-foreground/20 disabled:opacity-20 disabled:cursor-not-allowed group"
              >
                <CaretLeft weight="duotone" className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button 
                onClick={() => setIndex(prev => Math.min(maxIndex, prev + 1))}
                disabled={index === maxIndex}
                className="w-12 h-12 rounded-md bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/20 disabled:opacity-20 disabled:cursor-not-allowed group"
              >
                <CaretRight weight="duotone" className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-1 py-4">
            <motion.div 
              className="flex gap-8"
              animate={{ x: `-${index * (100 / (visibleCount === 1 ? 1 : 2))}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {SERVICES.map((service, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 group" 
                  style={{ width: visibleCount === 1 ? "100%" : "calc(50% - 16px)" }}
                >
                  <div className="relative rounded-md overflow-hidden w-full h-[500px] border border-foreground/5 transition-all duration-500 group-hover:border-[#1b54ff]/30 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                    <HLSVideo src={service.video} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                    
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10">
                      <div className="mb-4 w-12 h-12 rounded-2xl bg-[#1b54ff]/10 border border-[#1b54ff]/20 flex items-center justify-center text-[#1b54ff] backdrop-blur-md">
                        {idx === 0 && <FileText weight="duotone" className="w-6 h-6" />}
                        {idx === 1 && <Target weight="duotone" className="w-6 h-6" />}
                        {idx === 2 && <Megaphone weight="duotone" className="w-6 h-6" />}
                        {idx === 3 && <Gauge weight="duotone" className="w-6 h-6" />}
                      </div>
                      <h3 className="text-foreground text-3xl font-bold mb-3">{service.title}</h3>
                      <p className="text-foreground/70 text-lg font-normal leading-relaxed">{service.description}</p>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mt-8"
                      >
                        <button className="px-6 py-3 bg-[#FCE7D2] text-black font-medium rounded-xl hover:bg-[#fbd8b4] transition-colors">
                          Learn more
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};



const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-md border border-foreground/5 bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] p-8 transition-all duration-500 hover:shadow-[0_12px_40px_-12px_rgba(27,84,255,0.08)] hover:-translate-y-1 hover:border-[#1b54ff]/30",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(27,84,255,0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

const ServicesGrid = () => {
  const { t } = useTranslation();
  const services = [
    { 
      title: t('services.items.strategy.title'), 
      desc: t('services.items.strategy.desc'),
      icon: <Stack weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-2 lg:col-span-2"
    },
    { 
      title: t('services.items.social.title'), 
      desc: t('services.items.social.desc'),
      icon: <Megaphone weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    { 
      title: t('services.items.photo.title'), 
      desc: t('services.items.photo.desc'),
      icon: <Camera weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    { 
      title: t('services.items.web.title'), 
      desc: t('services.items.web.desc'),
      icon: <Globe weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    { 
      title: t('services.items.ads.title'), 
      desc: t('services.items.ads.desc'),
      icon: <TrendUp weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    { 
      title: t('services.items.influencer.title'), 
      desc: t('services.items.influencer.desc'),
      icon: <Users weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    { 
      title: t('services.items.brand.title'), 
      desc: t('services.items.brand.desc'),
      icon: <Medal weight="duotone" className="w-6 h-6" />,
      className: "md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="features" className="w-full px-6 lg:px-12 py-32 scroll-mt-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-6">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
              <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('services.tagline')}</span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              <TextReveal text={t('services.title1')} tag="span" className="block" />
              <span className="font-medium text-gradient-primary">{t('services.title2')}</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-foreground/60 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              {t('services.desc')}
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={service.className}
            >
              <ContentCard 
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                linkText="Read more"
              />
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="md:col-span-2 lg:col-span-3"
          >
            <div className="border border-foreground/10 bg-foreground/[0.02] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-md">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="text-foreground text-3xl lg:text-4xl font-bold mb-4">{t('cta.title1')} {t('cta.title2')}</h3>
                <p className="text-foreground/70 text-lg">
                  {t('cta.desc')}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full lg:w-auto">
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto block">
                  <PrimaryButton variant="solid" showArrow className="w-full lg:w-auto">
                    {t('cta.btn', 'Boka strategisamtal')}
                  </PrimaryButton>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoFeatures = () => {
  const { t } = useTranslation();
  const items = [
    { icon: <PuzzlePiece weight="duotone" className="w-6 h-6" />, title: t('bento.items.bookings.title'), desc: t('bento.items.bookings.desc'), size: "large" },
    { icon: <Gauge weight="duotone" className="w-6 h-6" />, title: t('bento.items.orders.title'), desc: t('bento.items.orders.desc'), size: "small" },
    { icon: <Megaphone weight="duotone" className="w-6 h-6" />, title: t('bento.items.returning.title'), desc: t('bento.items.returning.desc'), size: "small" },
    { icon: <Robot weight="duotone" className="w-6 h-6" />, title: t('bento.items.local.title'), desc: t('bento.items.local.desc'), size: "medium" }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="px-6 lg:px-12 mb-24">
        <div className="flex flex-col gap-6 mb-24 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 w-fit mx-auto">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
              <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('bento.tagline')}</span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground">
              <TextReveal text={t('bento.title1')} tag="span" className="block" />
              <span className="font-medium text-gradient-primary">{t('bento.title2')}</span>
            </h2>
          </SectionReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {/* Large Card */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-background border border-foreground/5 p-8 lg:p-12 flex flex-col justify-between group rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5">
            <div>
              <h3 className="text-foreground text-3xl font-bold mb-4">{items[0].title}</h3>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-md">{items[0].desc}</p>
            </div>
          </div>

          {/* Medium Card */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 bg-background border border-foreground/5 p-8 flex items-center gap-8 group rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5">
            <div>
              <h3 className="text-foreground text-xl font-bold mb-2">{items[3].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{items[3].desc}</p>
            </div>
          </div>

          {/* Small Cards */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-background border border-foreground/5 p-8 flex flex-col justify-between group rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5">
            <div>
              <h3 className="text-foreground text-xl font-bold mb-2">{items[1].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{items[1].desc}</p>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-background border border-foreground/5 p-8 flex flex-col justify-between group rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5">
            <div>
              <h3 className="text-foreground text-xl font-bold mb-2">{items[2].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{items[2].desc}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center w-full">
          <Link to="/portfolio" className="w-full sm:w-auto">
            <PrimaryButton showArrow className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4">Explore Our Portfolio</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Principles = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const principles = [
    {
      title: t('principles.items.learning.title'),
      desc: t('principles.items.learning.desc')
    },
    {
      title: t('principles.items.strategy.title'),
      desc: t('principles.items.strategy.desc')
    },
    {
      title: t('principles.items.humanity.title'),
      desc: t('principles.items.humanity.desc')
    },
    {
      title: t('principles.items.noMediocrity.title'),
      desc: t('principles.items.noMediocrity.desc')
    }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left Column: Heading */}
        <div className="md:w-1/3 flex flex-col items-start">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 w-fit">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
              <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">
                {t('principles.tagline')}
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground">
              <TextReveal text={t('principles.title1')} tag="span" className="block" />
              <span className="font-medium text-gradient-primary">{t('principles.title2')}</span>
            </h2>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="md:w-2/3 flex flex-col">
          {principles.map((principle, idx) => (
            <div key={idx} className="flex flex-col border-b border-foreground/10 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="py-8 flex items-center justify-start text-left group transition-all"
              >
                <span className="text-xl md:text-2xl font-light text-foreground/40 mr-4 transition-colors group-hover:text-foreground/70">
                  0{idx + 1} /
                </span>
                <span className="text-xl md:text-2xl font-normal text-foreground transition-colors">
                  {principle.title}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed pb-8 max-w-xl pl-[3.5rem] md:pl-[4.5rem]">
                      {principle.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const { t } = useTranslation();
  return (
    <section id="team" className="w-full py-32 bg-[#09102b] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 rounded-md overflow-hidden">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FV2%2FIMG_0882.png?alt=media&token=de329a8a-44a0-4a5f-a2c5-b4ec98808bfc" 
              alt="Founder" 
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
          </div>
          
          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white/50 text-sm tracking-[0.15em] uppercase font-medium">
                | {t('team.tagline')}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-normal leading-[1.4] mb-8 text-white/90">
              {t('team.quote')}
            </h2>
            
            <div className="flex flex-col gap-6 text-white/50 text-sm md:text-base leading-relaxed mb-12">
              <p>
                {t('team.desc1')}
              </p>
            </div>
            
            <div>
              <p className="text-white font-medium text-lg mb-1">{t('team.name')}</p>
              <p className="text-white/50 text-sm">{t('team.role')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      text: "Duktig och kan sin grej, enkel person att jobba med.",
      name: "Max",
      role: "GarmsMarket",
      image: "https://ui-avatars.com/api/?name=Max&background=1b54ff&color=fff",
    },
    {
      text: "Bra service, Snabb, nogrann och alltid tillgänglig, jättenöjd med deras service!",
      name: "david Morante",
      role: "Entrepreneur",
      image: "https://ui-avatars.com/api/?name=david+Morante&background=1b54ff&color=fff",
    },
    {
      text: "Duktig, snabbleverans, inga konstigheter\nVäldigt snabb leverans på videorna vi ville ha, de var enkla att ha och göra med. Rekommenderar.",
      name: "Jamie Mabon",
      role: "Mabon Media",
      image: "https://ui-avatars.com/api/?name=Jamie+Mabon&background=1b54ff&color=fff",
    },
    {
      text: "NCA Media måste jag säga gav oss en väldigt professionell lösning på våra utmaningar för att nå ut i sociala medier. Det som stack ut var just lyhördhet och pricksäkerhet de erbjöd som gjorde att vi kunde få ut max utav samarbetet. Stort tack Anton, uppskattas för alltid!\n/Team Strongheart",
      name: "Ismail Rammo",
      role: "Team Strongheart",
      image: "https://ui-avatars.com/api/?name=Ismail+Rammo&background=1b54ff&color=fff",
    },
    {
      text: "Här jobbat med flera content kreatörer, video redigerare mm. NCA Media är utan tvekan de mest seriösa, kreativa, problemlösare jag jobbat med. De tänker utanför \"boxen\" samtidigt som de vägleder och är innovative i sitt arbete. Rekommenderar NCA Media  mycket starkt",
      name: "Jeremy Tecle",
      role: "Entrepreneur",
      image: "https://ui-avatars.com/api/?name=Jeremy+Tecle&background=1b54ff&color=fff",
    }
  ];

  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 5);

  return (
    <section id="testimonials" className="w-full px-6 lg:px-12 py-32 scroll-mt-20 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1b54ff]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#1b54ff]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-6">
            <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
            <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('testimonials.tagline')}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-foreground">
            <TextReveal text={t('testimonials.title1')} tag="span" className="block" />
            <span className="font-medium text-gradient-primary">{t('testimonials.title2')}</span>
          </h2>
        </div>

        {/* Google Reviews Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 p-6 rounded-md bg-foreground/[0.02] border border-foreground/5 backdrop-blur-sm">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-xl font-medium text-foreground">Google</span>
            </div>
            <div className="h-8 w-px bg-foreground/10 hidden md:block" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">{t('testimonials.excellent')}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star weight="fill" key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <span className="font-bold text-foreground">5.0</span>
                <span>|</span>
                <span>8 {t('testimonials.reviews')}</span>
              </div>
            </div>
          </div>
          
          <a 
            href="https://g.page/r/CXRVGrAQ_O4bEAE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-md border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors text-sm font-medium text-foreground flex items-center gap-2"
          >
            Write a review
          </a>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#09102b] text-white overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
          alt="Team" 
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09102b]/80 to-[#09102b]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/30 bg-[#1b54ff]/10 w-fit">
              <Sparkle weight="duotone" className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">{t('cta.tagline')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium leading-tight text-white">
              <span className="block">{t('cta.title1')}</span>
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1b54ff]">{t('cta.title2')}</span>
            </h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start md:items-end text-left md:text-right w-full">
          <p className="text-white/80 text-lg max-w-md mb-8">
            {t('cta.desc')}
          </p>
          <Link to="/analysis" className="w-full md:w-auto">
            <button className="w-full md:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-md bg-white" />
              {t('cta.btn')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQContact = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const FAQS = [
    { question: t('faq.items.q1.q'), answer: t('faq.items.q1.a') },
    { question: t('faq.items.q2.q'), answer: t('faq.items.q2.a') },
    { question: t('faq.items.q3.q'), answer: t('faq.items.q3.a') },
    { question: t('faq.items.q4.q'), answer: t('faq.items.q4.a') }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('faq.contact.successAlert'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full py-24 lg:py-32 bg-background relative overflow-hidden border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* FAQ Section */}
          <div>
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 w-fit mb-6">
                <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
                <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('faq.tagline')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-8">
                {t('faq.title1')} <span className="text-gradient-primary">{t('faq.title2')}</span>
              </h2>
            </SectionReveal>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => (
                <SectionReveal key={idx} delay={0.1 * idx}>
                  <div 
                    className={cn(
                      "border border-foreground/10 rounded-md overflow-hidden transition-colors duration-300",
                      openFaq === idx ? "bg-foreground/[0.02]" : "bg-transparent hover:bg-foreground/[0.01]"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                      <div className={cn(
                        "w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors duration-300",
                        openFaq === idx ? "bg-[#1b54ff] text-white" : "bg-foreground/5 text-foreground"
                      )}>
                        {openFaq === idx ? <Minus weight="duotone" className="w-4 h-4" /> : <Plus weight="duotone" className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 pb-6 text-foreground/70 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <SectionReveal delay={0.2}>
              <div className="bg-foreground/[0.02] border border-foreground/10 rounded-md p-8 lg:p-10 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{t('faq.contact.title')}</h3>
                  <p className="text-foreground/70">{t('faq.contact.desc')}</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="q_name" className="text-sm font-medium text-foreground">{t('faq.contact.nameLabel')}</label>
                    <input
                      id="q_name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-background border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#1b54ff] focus:ring-1 focus:ring-[#1b54ff] transition-all"
                      placeholder={t('faq.contact.namePlaceholder')}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="q_email" className="text-sm font-medium text-foreground">{t('faq.contact.emailLabel')}</label>
                    <input
                      id="q_email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-background border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#1b54ff] focus:ring-1 focus:ring-[#1b54ff] transition-all"
                      placeholder={t('faq.contact.emailPlaceholder')}
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-grow">
                    <label htmlFor="q_message" className="text-sm font-medium text-foreground">{t('faq.contact.msgLabel')}</label>
                    <textarea
                      id="q_message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 min-h-[120px] rounded-md bg-background border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#1b54ff] focus:ring-1 focus:ring-[#1b54ff] transition-all resize-y flex-grow"
                      placeholder={t('faq.contact.msgPlaceholder')}
                    />
                  </div>

                  <PrimaryButton type="submit" variant="solid" className="w-full mt-2">
                    {t('faq.contact.btn')}
                    <ArrowRight weight="duotone" className="w-4 h-4 ml-2" />
                  </PrimaryButton>
                </form>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  useMeta({
    title: 'NCA Media – Videoproduktion & Digital Marknadsföring i Malmö',
    description: 'Vi är inte en contentbyrå. Vi är er tillväxtpartner. Videoproduktion, social media och Meta-annonsering i Malmö. Boka gratis strategisamtal.',
    canonical: 'https://www.ncamedia.se/',
  });
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <WhyChooseUs />
      <PartnershipsCloud />
      <TheNCAWay />
      <ServicesGrid />
      <BentoFeatures />
      <Team />
      <Testimonials />
      <PartnershipsCloud />
      <FAQContact />
      <CTA />
    </div>
  );
};
