import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { TextReveal, SectionReveal } from '@/src/components/Animations';
import { CASES } from '@/src/components/TheNCAWay';
import { PrimaryButton } from '@/src/components/Layout';
import { useTranslation } from 'react-i18next';

const RESTAURANT_PROJECTS = [
  {
    title: "Solblixt",
    category: "PAID ADS",
    description: "5 stängda affärer och 70+ leads på första veckan. En kampanj som gick från noll till att leverera konkreta affärer direkt.",
    tags: ["Ads", "Leads", "B2C"],
    image: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FTest%2F2024-05-21.png?alt=media&token=4ec687d5-1fae-4ac4-9091-a6bb1662d3f6",
    stats: [
      { value: "70+", label: "Leads vecka 1" },
      { value: "5", label: "Stängda affärer" }
    ]
  },
  {
    title: "Shah's Halal Food",
    category: "GROWTH CAMPAIGN",
    description: "Skalade en kampanj från 1 500 kr till 15 000 kr i budget när vi såg att den konverterade. Resultatet motiverade varje krona.",
    tags: ["Growth", "ROI", "Scaling"],
    image: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FTest%2FDSC00781.png?alt=media&token=b2a4a967-03fb-41b0-be4d-e19d1f6d192c",
    stats: [
      { value: "10x", label: "Budget skalad" },
      { value: "Bevisad", label: "ROI" }
    ]
  }
];

const SHORT_VIDEOS = [
  { 
    title: "Kulturkrock", 
    video: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2FPappas%2FVideo%205-%20Kulturkrock%20(story%20%2B%20la%CC%88skande)-_1.mp4?alt=media&token=2fdfaf39-e29c-4b8b-b566-43a39618c04b",
    poster: undefined
  },
  { 
    title: "Video 1", 
    video: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2Fvid%201%20v2%209.16.mp4?alt=media&token=f8c8f423-9122-4b05-9a22-1255abbc57a8",
    poster: undefined
  },
  { 
    title: "Shahs", 
    video: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2FShahs%2F1%20DK_2.mp4?alt=media&token=778e28ef-7843-4157-a9be-e968db9e0d90",
    poster: undefined
  },
  { 
    title: "Superman Kampanj", 
    video: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2FKampanj%20%231%20-%20Superman_1.mp4?alt=media&token=e8dd73a7-8dbd-4427-aad2-384088f8ea01",
    poster: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2FDJI_0127.jpg?alt=media&token=ed633b74-026f-462b-93f0-5c49f57de1a5"
  },
  { 
    title: "V1-2", 
    video: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2FV1-2%20(1).mp4?alt=media&token=c7098661-17b7-4709-a983-7d49ba706dea",
    poster: undefined
  },
  { 
    title: "Shahs 5", 
    video: "https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20MEDIA%2FVIdeos%2FShahs%2FShahs%205_1.mp4?alt=media&token=8874744e-044b-49f6-a669-535a3d12a8ef",
    poster: undefined
  }
];

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal delay={0.1}>
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors mb-12">
            <ArrowLeft weight="duotone" className="w-4 h-4" />
            {t('nav.portfolio')}? {/* Need "Back" there but wait, what should the text be? Let's just hardcode "Back" it wasn't specified */}
             Back
          </Link>
        </SectionReveal>

        <div className="max-w-2xl mb-24">
          <SectionReveal delay={0.15}>
            <span className="text-muted-foreground text-sm font-sans font-medium uppercase tracking-widest">{t('portfolio.tagline')}</span>
          </SectionReveal>
          <div className="mt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] text-foreground">
              <TextReveal text={t('portfolio.title1')} splitType="words" delay={0.06} tag="span" />
              <span className="font-medium text-gradient-primary"> {t('portfolio.title2')}</span>
            </h1>
          </div>
        </div>

        {/* Restaurant Projects */}
        <div className="flex flex-col gap-24 lg:gap-32 mb-32">
          {RESTAURANT_PROJECTS.map((project, idx) => (
            <div key={project.title} className={cn("flex flex-col lg:flex-row gap-12 lg:gap-24 items-center", idx % 2 !== 0 && "lg:flex-row-reverse")}>
              <div className="relative w-full lg:w-3/5 rounded-md overflow-hidden border border-foreground/10 group shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <span className="text-muted-foreground text-xs font-sans font-medium uppercase tracking-widest">{project.category}</span>
                <h3 className="text-foreground text-3xl md:text-4xl font-sans font-normal leading-tight">{project.title}</h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">{project.description}</p>
                <div className="flex gap-8">
                  {project.stats.map(stat => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="text-foreground text-2xl font-sans font-semibold">{stat.value}</span>
                      <span className="text-muted-foreground font-sans text-xs">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-sans text-foreground/60 px-3 py-1 rounded-md border border-white/10 bg-white/[0.04]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Short Videos */}
        <div className="mb-32">
          <div className="mb-12">
            <span className="text-muted-foreground text-xs font-sans font-medium uppercase tracking-widest block mb-3">{t('portfolio.shortVideosTitle1')}</span>
            <h2 className="text-foreground text-3xl md:text-4xl font-sans font-medium leading-tight">
              <span className="text-gradient-primary">{t('portfolio.shortVideosTitle2')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {SHORT_VIDEOS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-md bg-black overflow-hidden aspect-[9/16] flex items-center justify-center p-0 border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <video 
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white/80 group-hover:text-white transition-colors text-lg font-medium shadow-black drop-shadow-md">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <div className="mb-12">
            <span className="text-muted-foreground text-xs font-sans font-medium uppercase tracking-widest block mb-3">Featured Projects</span>
            <h2 className="text-foreground text-3xl md:text-4xl font-sans font-medium leading-tight">
              A closer look at <span className="text-gradient-primary">what ships.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </div>
    </div>
  );
};
