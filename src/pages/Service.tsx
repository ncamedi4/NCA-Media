import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Stack, Megaphone, Camera, Globe, TrendUp, Users, Medal, CheckCircle, Sparkle, ChartBar, Target, Lightning, Layout, DeviceMobile, MagnifyingGlass, Play, PenNib } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentCard } from '@/src/components/ContentCard';

const SERVICES_DATA = {
  'digital-strategy': {
    title: 'Digital Strategy',
    desc: "A tailored roadmap for your company's digital growth and long-term success.",
    icon: <Stack weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "We help you define clear goals and create a comprehensive digital strategy that aligns with your business objectives. Our approach ensures that every digital touchpoint works together to maximize your ROI and build a sustainable online presence.",
    extendedContent: "In today's fast-paced digital landscape, a scattergun approach no longer works. We dive deep into your industry, analyze your competitors, and identify the most lucrative opportunities for your brand. By aligning your marketing efforts with your core business objectives, we create a scalable framework for sustainable growth.",
    benefits: ["Market Analysis", "Competitor Research", "Goal Setting", "Actionable Roadmaps"],
    process: [
      { title: "1. Discovery", desc: "We analyze your current digital footprint and business goals." },
      { title: "2. Planning", desc: "Developing a customized roadmap and selecting the right channels." },
      { title: "3. Execution", desc: "Implementing the strategy across all chosen digital platforms." },
      { title: "4. Optimization", desc: "Continuous monitoring and refining for maximum ROI." }
    ],
    images: [
      "https://picsum.photos/seed/strategy1/800/600",
      "https://picsum.photos/seed/strategy2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  'social-media-management': {
    title: 'Social Media Management',
    desc: "We manage your channels, create engagement, and build a loyal community.",
    icon: <Megaphone weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "Our team takes over the day-to-day management of your social media profiles. We create compelling content, engage with your audience, and build a strong community around your brand, freeing you up to focus on running your business.",
    extendedContent: "Social media is more than just posting pictures; it's about building relationships. We craft a unique voice for your brand, ensuring every post, story, and comment reflects your core values. From viral TikToks to professional LinkedIn articles, we tailor our approach to each platform.",
    benefits: ["Content Creation", "Community Management", "Growth Strategies", "Performance Reporting"],
    process: [
      { title: "1. Audit", desc: "Reviewing your current social presence and audience demographics." },
      { title: "2. Content Calendar", desc: "Planning a month's worth of engaging, brand-aligned content." },
      { title: "3. Community Management", desc: "Actively engaging with followers, responding to comments and DMs." },
      { title: "4. Reporting", desc: "Monthly deep-dives into engagement rates, reach, and follower growth." }
    ],
    images: [
      "https://picsum.photos/seed/social1/800/600",
      "https://picsum.photos/seed/social2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  'photo-video-production': {
    title: 'Photo & Video Production',
    desc: "High-quality content that captures your company's atmosphere and offerings in a way that sells.",
    icon: <Camera weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "Visual storytelling is key to standing out online. We produce high-quality photos and videos that showcase your brand's unique personality, products, and services, driving higher engagement and conversion rates.",
    extendedContent: "Whether you need a cinematic brand film, snappy social media reels, or crisp product photography, our in-house production team handles it all. We manage the entire process from storyboarding to final color grading, ensuring the end result is nothing short of spectacular.",
    benefits: ["Commercial Photography", "Brand Videos", "Social Media Content", "Editing & Post-Production"],
    process: [
      { title: "1. Pre-production", desc: "Storyboarding, location scouting, and scriptwriting." },
      { title: "2. Production", desc: "On-set shooting with professional cinema cameras and lighting." },
      { title: "3. Post-production", desc: "Editing, color grading, sound design, and visual effects." },
      { title: "4. Delivery", desc: "Providing optimized files for web, social, and broadcast." }
    ],
    images: [
      "https://picsum.photos/seed/production1/800/600",
      "https://picsum.photos/seed/production2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  'websites': {
    title: 'Websites',
    desc: "Modern, fast, and conversion-optimized websites that make it easy for customers to act.",
    icon: <Globe weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "Your website is your digital storefront. We build fast, responsive, and visually stunning websites designed to convert visitors into loyal customers. Our focus is on user experience, performance, and clear calls to action.",
    extendedContent: "A beautiful website is useless if it doesn't convert. We combine cutting-edge design with behavioral psychology to create digital experiences that guide users seamlessly toward making a purchase or inquiry. Built on modern tech stacks, our sites are lightning-fast and SEO-ready.",
    benefits: ["Custom Design", "Mobile Optimization", "SEO Friendly", "High Performance"],
    process: [
      { title: "1. Wireframing", desc: "Mapping out the user journey and site architecture." },
      { title: "2. UI/UX Design", desc: "Creating high-fidelity mockups that align with your brand." },
      { title: "3. Development", desc: "Writing clean, scalable code for lightning-fast performance." },
      { title: "4. Launch & QA", desc: "Rigorous testing across devices before going live." }
    ],
    images: [
      "https://picsum.photos/seed/website1/800/600",
      "https://picsum.photos/seed/website2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  'google-meta-ads': {
    title: 'Google & META Ads',
    desc: "Targeted advertising that puts your business in front of the right customers.",
    icon: <TrendUp weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "Maximize your reach and drive targeted traffic with data-driven advertising campaigns on Google and Meta platforms. We optimize your ad spend to ensure you get the best possible return on investment.",
    extendedContent: "Stop wasting money on ads that don't convert. Our performance marketing team uses advanced targeting, A/B testing, and continuous optimization to lower your customer acquisition cost (CAC) and scale your revenue predictably.",
    benefits: ["Search Ads", "Social Media Ads", "Retargeting Campaigns", "A/B Testing"],
    process: [
      { title: "1. Audience Research", desc: "Identifying your ideal customer profile and search intent." },
      { title: "2. Ad Creation", desc: "Designing eye-catching creatives and writing compelling copy." },
      { title: "3. Campaign Setup", desc: "Configuring tracking pixels, conversion goals, and budgets." },
      { title: "4. Scaling", desc: "Analyzing data to kill losing ads and scale the winners." }
    ],
    images: [
      "https://picsum.photos/seed/ads1/800/600",
      "https://picsum.photos/seed/ads2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  'influencer-marketing': {
    title: 'Influencer Marketing',
    desc: "We connect your brand with the right profiles to reach a broader target audience.",
    icon: <Users weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "Leverage the power of trusted voices in your industry. We identify and collaborate with influencers who align with your brand values to create authentic campaigns that resonate with their followers and drive brand awareness.",
    extendedContent: "Consumers trust people more than they trust brands. We manage end-to-end influencer campaigns, from micro-influencers with highly engaged niche audiences to macro-influencers who can put your brand on the map overnight.",
    benefits: ["Influencer Identification", "Campaign Management", "Content Collaboration", "ROI Tracking"],
    process: [
      { title: "1. Scouting", desc: "Finding influencers whose audience matches your target market." },
      { title: "2. Outreach & Negotiation", desc: "Handling contracts, deliverables, and compensation." },
      { title: "3. Campaign Management", desc: "Ensuring content is on-brand and posted on schedule." },
      { title: "4. Analysis", desc: "Tracking promo codes, affiliate links, and overall ROI." }
    ],
    images: [
      "https://picsum.photos/seed/influencer1/800/600",
      "https://picsum.photos/seed/influencer2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  'brand-awareness': {
    title: 'Brand Awareness',
    desc: "We strengthen your brand and make your company the obvious choice in your industry.",
    icon: <Medal weight="duotone" className="w-12 h-12 text-[#1b54ff]" />,
    content: "Building a strong brand takes time and consistency. We help you establish a recognizable and trusted brand identity that sets you apart from the competition and keeps you top-of-mind for your target audience.",
    extendedContent: "Your brand is what people say about you when you're not in the room. We help shape that conversation through strategic PR, consistent visual identity, and memorable campaigns that leave a lasting impression on your market.",
    benefits: ["Brand Identity", "Positioning Strategy", "PR & Outreach", "Consistent Messaging"],
    process: [
      { title: "1. Brand Audit", desc: "Evaluating your current market position and brand perception." },
      { title: "2. Identity Creation", desc: "Developing a cohesive visual and verbal brand language." },
      { title: "3. Multi-channel Campaign", desc: "Launching awareness campaigns across PR, social, and ads." },
      { title: "4. Measurement", desc: "Tracking brand lift, share of voice, and sentiment analysis." }
    ],
    images: [
      "https://picsum.photos/seed/brand1/800/600",
      "https://picsum.photos/seed/brand2/800/600"
    ],
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
  }
};

const ServiceHeader = ({ badge, title1, title2, desc }: { badge: string, title1: string, title2: string, desc: string }) => (
  <div className="flex flex-col items-center text-center mb-20">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 mb-8">
      <Sparkle weight="duotone" className="w-4 h-4 text-[#1b54ff]" />
      <span className="text-[#1b54ff] text-sm font-semibold uppercase tracking-wider">{badge}</span>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
      <span className="block">{title1}</span>
      <span className="font-medium text-gradient-primary">{title2}</span>
    </h1>
    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
      {desc}
    </p>
  </div>
);

const CTA = ({ title = "Ready to get started?", desc = "Let's discuss how we can help you achieve your business goals." }) => (
  <div className="mt-24 text-center bg-[#1b54ff]/5 rounded-3xl p-8 md:p-12 border border-[#1b54ff]/10">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">{desc}</p>
    <Link to="/analysis" className="block w-full sm:w-auto">
      <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all inline-flex items-center justify-center gap-2">
        Get a free analysis <ArrowRight weight="duotone" className="w-5 h-5" />
      </button>
    </Link>
  </div>
);

const InteractiveProcessTimeline = ({ steps, title = "The Process" }: { steps: { title: string, desc: string }[], title?: string }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{title}</h2>
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
                    {isPast ? <CheckCircle weight="duotone" className="w-5 h-5" /> : <span className="font-bold">{idx + 1}</span>}
                  </div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-[#1b54ff]' : isPast ? 'text-foreground' : 'text-foreground/60 group-hover:text-foreground'}`}>
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
                <h3 className="text-sm font-bold text-[#1b54ff] tracking-wider uppercase mb-3">Phase {activeStep + 1}</h3>
                <h4 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{steps[activeStep].title.replace(/^\d+\.\s*/, '')}</h4>
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

const DigitalStrategyPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="STRATEGI" title1="Data-Driven" title2="Digital Strategy" desc={service.desc} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">About this service</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            {service.content}
          </p>
          <ul className="space-y-4 mb-8">
            {service.benefits.map((b: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-lg"><CheckCircle weight="duotone" className="w-5 h-5 text-[#1b54ff]" /> {b}</li>
            ))}
          </ul>
        </div>
        <div className="bg-foreground/5 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
           <ChartBar weight="duotone" className="w-48 h-48 text-[#1b54ff]/20 absolute -bottom-10 -right-10" />
           <Target weight="duotone" className="w-32 h-32 text-[#1b54ff]/40 absolute top-10 left-10" />
           <div className="relative z-10 bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-xl">
             <h3 className="text-2xl font-bold mb-4">The Roadmap</h3>
             <p className="text-foreground/70">We don't guess. We analyze, plan, and execute with precision.</p>
           </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Common Challenges We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContentCard 
            icon={<Target weight="duotone" className="w-6 h-6" />} 
            title="Lack of Clear Direction" 
            desc="Many businesses guess their way forward. We replace guesswork with a data-backed roadmap that aligns with your exact business goals." 
          />
          <ContentCard 
            icon={<TrendUp weight="duotone" className="w-6 h-6" />} 
            title="Low Return on Investment" 
            desc="Are your marketing efforts costing more than they make? We identify where your budget is bleeding and reallocate it to high-performing channels." 
          />
          <ContentCard 
            icon={<Stack weight="duotone" className="w-6 h-6" />} 
            title="Fragmented Marketing" 
            desc="Inconsistent messaging confuses customers. We unify your strategy across all platforms for a cohesive and powerful brand presence." 
          />
        </div>
      </div>

      <InteractiveProcessTimeline steps={service.process} title="The Strategy Process" />
      <CTA title="Ready for a clear direction?" />
    </div>
  </div>
);

const SocialMediaPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="SOCIALA MEDIER" title1="Social Media" title2="Management" desc={service.desc} />

      <div className="mb-24">
        <h2 className="text-2xl font-bold mb-8 text-center text-foreground/50 uppercase tracking-widest">Platforms We Master</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Instagram', 'TikTok', 'LinkedIn', 'Facebook', 'Pinterest', 'YouTube'].map((platform) => (
            <div key={platform} className="px-4 py-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] font-semibold text-base md:text-lg flex flex-col items-center justify-center gap-3 hover:border-[#1b54ff]/50 transition-colors cursor-default text-center">
              <div className="w-3 h-3 rounded-full bg-[#1b54ff]" />
              <span className="truncate w-full">{platform}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        <ContentCard icon={<PenNib weight="duotone" className="w-6 h-6" />} title="Content Creation" desc="Engaging, on-brand content tailored for each specific platform's algorithm and audience." />
        <ContentCard icon={<Users weight="duotone" className="w-6 h-6" />} title="Community Management" desc="Active engagement with your followers, responding to comments, and building relationships." />
        <ContentCard icon={<TrendUp weight="duotone" className="w-6 h-6" />} title="Growth Strategy" desc="Data-driven tactics to increase reach, followers, and ultimately, conversions." />
      </div>

      <div className="rounded-3xl overflow-hidden aspect-video bg-foreground/5 relative group shadow-2xl mb-24">
        <video src={service.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
      </div>

      <InteractiveProcessTimeline steps={service.process} title="How We Manage Your Socials" />

      <CTA title="Let's grow your community" />
    </div>
  </div>
);

const PhotoVideoPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="PRODUKTION" title1="Visuals that" title2="Sell" desc={service.desc} />

      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Recent Productions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/5] rounded-xl overflow-hidden bg-foreground/5 relative group">
              <img src={`https://picsum.photos/seed/prod${i}/600/800`} alt={`Production ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <Play weight="duotone" className="w-12 h-12 text-white/80" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-4xl font-bold mb-6">Full-Service Production</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            {service.extendedContent}
          </p>
          <ul className="space-y-4">
            {service.benefits.map((b: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-lg font-medium"><Camera weight="duotone" className="w-5 h-5 text-[#1b54ff]" /> {b}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <img src="https://picsum.photos/seed/bts1/400/400" className="rounded-2xl w-full aspect-square object-cover" loading="lazy" />
           <img src="https://picsum.photos/seed/bts2/400/400" className="rounded-2xl w-full aspect-square object-cover mt-8" loading="lazy" />
        </div>
      </div>

      <InteractiveProcessTimeline steps={service.process} title="Our Production Process" />

      <CTA title="Need high-quality content?" />
    </div>
  </div>
);

const WebsitesPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="WEBBUTVECKLING" title1="Websites that" title2="Convert" desc={service.desc} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">About this service</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            {service.content}
          </p>
          <ul className="space-y-4 mb-8">
            {service.benefits.map((b: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-lg"><CheckCircle weight="duotone" className="w-5 h-5 text-[#1b54ff]" /> {b}</li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1b54ff]/20 to-transparent rounded-3xl blur-3xl" />
          <div className="bg-foreground/5 border border-foreground/10 rounded-t-3xl rounded-b-md overflow-hidden shadow-2xl relative z-10">
            <div className="bg-foreground/10 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <img src="https://picsum.photos/seed/webmockup/800/600" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Framer Motion', 'TypeScript', 'Shopify', 'WordPress'].map((tech) => (
            <div key={tech} className="px-6 py-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] font-medium text-base md:text-lg text-center hover:bg-foreground/5 transition-colors flex items-center justify-center">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <ContentCard icon={<Lightning weight="duotone" className="w-6 h-6" />} title="Lightning Fast" desc="Optimized for speed to reduce bounce rates and improve SEO rankings." />
        <ContentCard icon={<DeviceMobile weight="duotone" className="w-6 h-6" />} title="Mobile First" desc="Flawless responsive design that looks and works perfectly on any device." />
        <ContentCard icon={<MagnifyingGlass weight="duotone" className="w-6 h-6" />} title="SEO Optimized" desc="Built with best practices to ensure your site ranks well on Google." />
      </div>

      <InteractiveProcessTimeline steps={service.process} title="Our Web Development Process" />

      <CTA title="Ready for a digital upgrade?" />
    </div>
  </div>
);

const AdsPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="ANNONSERING" title1="Google &" title2="META Ads" desc={service.desc} />

      <div className="mb-24 bg-[#1b54ff]/5 rounded-3xl p-12 border border-[#1b54ff]/10">
        <h2 className="text-3xl font-bold mb-12 text-center">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-6xl font-bold text-[#1b54ff] mb-2">+150%</div>
            <div className="text-xl font-medium text-foreground/80">Average ROAS Increase</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-[#1b54ff] mb-2">-40%</div>
            <div className="text-xl font-medium text-foreground/80">Cost Per Acquisition</div>
          </div>
          <div>
            <div className="text-6xl font-bold text-[#1b54ff] mb-2">10k+</div>
            <div className="text-xl font-medium text-foreground/80">Leads Generated</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ContentCard icon={<MagnifyingGlass weight="duotone" className="w-6 h-6" />} title="Search Intent" desc="Targeting high-intent keywords." />
            <ContentCard icon={<Layout weight="duotone" className="w-6 h-6" />} title="A/B Testing" desc="Continuous optimization." />
            <ContentCard icon={<Target weight="duotone" className="w-6 h-6" />} title="Retargeting" desc="Re-engaging past visitors." />
            <ContentCard icon={<ChartBar weight="duotone" className="w-6 h-6" />} title="Scaling" desc="Maximizing profitable campaigns." />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold mb-6">Stop wasting ad spend.</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            {service.extendedContent}
          </p>
          <ul className="space-y-4">
            {service.benefits.map((b: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-lg"><CheckCircle weight="duotone" className="w-5 h-5 text-[#1b54ff]" /> {b}</li>
            ))}
          </ul>
        </div>
      </div>

      <InteractiveProcessTimeline steps={service.process} title="How We Scale Your Ads" />

      <CTA title="Want better ROI on your ads?" />
    </div>
  </div>
);

const InfluencerPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="INFLUENCERS" title1="Influencer" title2="Marketing" desc={service.desc} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`rounded-3xl overflow-hidden bg-foreground/5 aspect-[3/4] ${i % 2 === 0 ? 'mt-8' : ''}`}>
            <img src={`https://picsum.photos/seed/inf${i}/400/600`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Network Reach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10">
            <div className="text-5xl font-bold text-[#1b54ff] mb-4">500+</div>
            <div className="text-lg text-foreground/70">Vetted Influencers</div>
          </div>
          <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10">
            <div className="text-5xl font-bold text-[#1b54ff] mb-4">50M+</div>
            <div className="text-lg text-foreground/70">Combined Reach</div>
          </div>
          <div className="p-10 rounded-3xl bg-foreground/[0.02] border border-foreground/10">
            <div className="text-5xl font-bold text-[#1b54ff] mb-4">12+</div>
            <div className="text-lg text-foreground/70">Niche Industries</div>
          </div>
        </div>
      </div>

      <InteractiveProcessTimeline steps={service.process} title="End-to-End Management" />

      <CTA title="Ready to reach millions?" />
    </div>
  </div>
);

const BrandAwarenessPage = ({ service }: { service: any }) => (
  <div className="min-h-screen pt-32 pb-24 bg-background">
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <ServiceHeader badge="VARUMÄRKE" title1="Brand" title2="Awareness" desc={service.desc} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-foreground/5 rounded-3xl p-10">
          <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
          <p className="text-foreground/70 text-lg leading-relaxed">
            In a crowded market, simply existing isn't enough. If your target audience doesn't know who you are, what you stand for, and why they should care, you're losing market share to louder competitors.
          </p>
        </div>
        <div className="bg-[#1b54ff]/5 border border-[#1b54ff]/20 rounded-3xl p-10">
          <h3 className="text-2xl font-bold mb-4 text-[#1b54ff]">The Solution</h3>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {service.extendedContent}
          </p>
        </div>
      </div>

      <InteractiveProcessTimeline steps={service.process} title="Our Brand Framework" />

      <div className="bg-[#1b54ff] text-white rounded-3xl p-16 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to become the market leader?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Brand awareness isn't just about being seen; it's about being remembered. Let's build a brand that your customers can't ignore.
        </p>
        <Link to="/analysis">
          <button className="inline-flex items-center gap-2 text-[#1b54ff] bg-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl">
            <Sparkle weight="duotone" className="w-5 h-5" />
            Start Your Brand Journey
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export const Service = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES_DATA[slug as keyof typeof SERVICES_DATA] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#1b54ff] hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  switch (slug) {
    case 'digital-strategy':
      return <DigitalStrategyPage service={service} />;
    case 'social-media-management':
      return <SocialMediaPage service={service} />;
    case 'photo-video-production':
      return <PhotoVideoPage service={service} />;
    case 'websites':
      return <WebsitesPage service={service} />;
    case 'google-meta-ads':
      return <AdsPage service={service} />;
    case 'influencer-marketing':
      return <InfluencerPage service={service} />;
    case 'brand-awareness':
      return <BrandAwarenessPage service={service} />;
    default:
      return <div>Service layout not found</div>;
  }
};
