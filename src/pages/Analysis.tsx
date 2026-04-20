import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Buildings, ForkKnife, Sparkle } from '@phosphor-icons/react';
import { PrimaryButton } from '@/src/components/Layout';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';
import { useMeta } from '@/src/hooks/useMeta';

type FormType = 'universal' | 'restaurant' | null;

const UNIVERSAL_STEPS = [
  {
    title: "Om verksamheten",
    fields: [
      { id: "u_companyName", label: "Vad heter ditt företag?", type: "text", required: true },
      { id: "u_role", label: "Vad är din roll i företaget?", type: "text", required: true },
      { id: "u_offer", label: "Vad säljer ni och till vem? Beskriv er huvudprodukt eller tjänst och er typiska kund.", type: "textarea", required: true },
      { id: "u_activeTime", label: "Hur länge har ni varit aktiva?", type: "text", required: true },
      { id: "u_employees", label: "Hur många anställda har ni?", type: "text", required: true },
      { id: "u_geography", label: "Var befinner ni er geografiskt och vilket område vill ni nå?", type: "text", required: true },
      { id: "u_revenue", label: "Vad är er omsättning ungefär per år? (Används endast internt för att vi ska kunna ge rätt strategi.)", type: "text", required: false },
    ]
  },
  {
    title: "Mål och prioriteringar",
    fields: [
      { 
        id: "u_goal3m", 
        label: "Vad är ert viktigaste mål de närmaste 3 månaderna? Välj ett.", 
        type: "select", 
        options: [
          "Fler kunder och leads",
          "Fler bokningar eller beställningar",
          "Mer synlighet och varumärkeskännedom",
          "Lansering av ny produkt eller tjänst",
          "Expansion till ny marknad"
        ],
        required: true 
      },
      { id: "u_goal12m", label: "Vad är ert viktigaste mål de närmaste 12 månaderna?", type: "textarea", required: true },
      { id: "u_previousAttempts", label: "Vad har ni provat tidigare för att nå detta mål och vad hände?", type: "textarea", required: true },
      { id: "u_biggestChallenge", label: "Vad är den största utmaningen ni har just nu?", type: "textarea", required: true },
    ]
  },
  {
    title: "Målgrupp och ICP",
    fields: [
      { id: "u_icpDesc", label: "Beskriv er idealiska kund. Vem är de, hur gamla är de, vad jobbar de med, vad bryr de sig om?", type: "textarea", required: true },
      { id: "u_customerSource", label: "Var hittar era kunder er idag? Hur hörde de talas om er?", type: "textarea", required: true },
      { id: "u_whyChooseYou", label: "Vad är det vanligaste skälet till att en potentiell kund väljer er framför en konkurrent?", type: "textarea", required: true },
      { id: "u_whyNotChooseYou", label: "Vad är det vanligaste skälet till att de väljer att INTE köpa av er?", type: "textarea", required: true },
      { id: "u_existingList", label: "Har ni en befintlig kundlista eller community vi kan aktivera?", type: "text", required: true },
    ]
  },
  {
    title: "Digital närvaro",
    fields: [
      { id: "u_socialPlatforms", label: "Vilka sociala plattformar är ni aktiva på idag?", type: "text", required: true },
      { id: "u_bestAccount", label: "Vilket är ert bäst presterande konto och varför tror ni det?", type: "textarea", required: true },
      { id: "u_website", label: "Har ni en hemsida? Länk?", type: "text", required: true },
      { id: "u_bookingFunction", label: "Finns det en tydlig boknings-, köp- eller kontaktfunktion på hemsidan?", type: "text", required: true },
      { id: "u_ads", label: "Betalar ni för annonser idag? Om ja, var och ungefär hur mycket per månad?", type: "textarea", required: true },
      { id: "u_crm", label: "Har ni ett CRM eller system för att följa upp kunder?", type: "text", required: true },
    ]
  },
  {
    title: "Varumärke och kreativt",
    fields: [
      { id: "u_brandFeeling", label: "Hur vill ni att folk ska känna när de ser er online? Beskriv känslan i tre ord.", type: "text", required: true },
      { id: "u_inspirations", label: "Finns det varumärken, konton eller kampanjer ni tycker är skarpa och som ni inspirerats av?", type: "textarea", required: true },
      { id: "u_brandAssets", label: "Har ni logotyp, färger och grafisk profil? Kan ni dela dessa med oss?", type: "text", required: true },
      { id: "u_existingMaterial", label: "Har ni befintligt bild- eller videomaterial vi kan använda?", type: "text", required: true },
      { id: "u_filmingOk", label: "Är det okej att vi filmar personal, ägare och arbetsplatsen?", type: "text", required: true },
    ]
  },
  {
    title: "Praktiskt",
    fields: [
      { id: "u_contactPerson", label: "Vem är vår primära kontaktperson och hur når vi er bäst?", type: "textarea", required: true },
      { id: "u_specificEvents", label: "Finns det specifika datum, kampanjer eller events vi ska planera innehåll kring?", type: "textarea", required: true },
      { id: "u_doNotCommunicate", label: "Finns det saker vi absolut INTE ska kommunicera, visa eller koppla er till?", type: "textarea", required: true },
      { id: "u_otherInfo", label: "Är det något annat vi behöver veta innan vi startar?", type: "textarea", required: false },
    ]
  }
];

const RESTAURANT_STEPS = [
  {
    title: "Restaurangen",
    fields: [
      { id: "r_name", label: "Vad heter restaurangen?", type: "text", required: true },
      { id: "r_address", label: "Adress och stad?", type: "text", required: true },
      { id: "r_food", label: "Vad serverar ni? Beskriv köket och era tre bästa rätter.", type: "textarea", required: true },
      { id: "r_avgBill", label: "Vad kostar en genomsnittlig notan per person?", type: "text", required: true },
      { id: "r_seats", label: "Hur många platser har ni inne och ute?", type: "text", required: true },
      { id: "r_hours", label: "Vilka dagar och tider är ni öppna?", type: "textarea", required: true },
      { id: "r_services", label: "Erbjuder ni takeaway, leverans, catering eller events?", type: "text", required: true },
      { id: "r_deliverySystems", label: "Använder ni Foodora, Uber Eats, eget system eller annat?", type: "text", required: true },
    ]
  },
  {
    title: "Ägaren och teamet",
    fields: [
      { id: "r_ownerName", label: "Vad heter ägaren?", type: "text", required: true },
      { id: "r_background", label: "Vad är bakgrunden bakom restaurangen? Familjeföretag, kedja, kockdrivet?", type: "textarea", required: true },
      { id: "r_activeTime", label: "Hur länge har ni drivit stället?", type: "text", required: true },
      { id: "r_ownerActive", label: "Är ägaren aktiv i det dagliga?", type: "text", required: true },
      { id: "r_teamSize", label: "Hur många i teamet är ni ungefär?", type: "text", required: true },
    ]
  },
  {
    title: "Mål och fokus",
    fields: [
      { 
        id: "r_goal3m", 
        label: "Vad vill ni primärt öka de närmaste 3 månaderna? Välj ett eller två.", 
        type: "select", 
        options: [
          "Walk ins",
          "Bokningar",
          "Takeaway och leverans",
          "Catering",
          "Events",
          "Varumärkeskännedom lokalt"
        ],
        required: true 
      },
      { id: "r_focusProducts", label: "Finns det specifika produkter, rätter eller tjänster ni vill lyfta extra?", type: "textarea", required: true },
      { id: "r_weakPeriods", label: "Finns det svaga perioder, dagar eller tider ni vill fylla?", type: "textarea", required: true },
      { id: "r_targetAudience", label: "Vill ni nå privatpersoner, företag eller båda?", type: "text", required: true },
    ]
  },
  {
    title: "Digital närvaro",
    fields: [
      { id: "r_instagram", label: "Instagram. Finns det? Länk och ungefärligt följarantal?", type: "text", required: true },
      { id: "r_tiktok", label: "TikTok. Finns det? Länk och ungefärligt följarantal?", type: "text", required: true },
      { id: "r_facebook", label: "Facebook. Aktiv eller inaktiv?", type: "text", required: true },
      { id: "r_googleBusiness", label: "Google Business. Finns det och vad är ert betyg?", type: "text", required: true },
      { id: "r_website", label: "Hemsida. Finns det och fungerar det bra idag?", type: "text", required: true },
      { id: "r_bookingLink", label: "Finns det en boknings- eller beställningslänk tydligt synlig på era sociala kanaler?", type: "text", required: true },
      { id: "r_ads", label: "Betalar ni för annonser idag? Var och hur mycket?", type: "textarea", required: true },
    ]
  },
  {
    title: "Målgrupp",
    fields: [
      { id: "r_typicalGuest", label: "Vem är er typiska gäst? Ålder, livsstil, varför väljer de er?", type: "textarea", required: true },
      { id: "r_customerLocation", label: "Var bor eller jobbar era kunder? Är det lokala stammisar, turister eller pendlare?", type: "textarea", required: true },
      { id: "r_whyChooseYou", label: "Vad är det vanligaste skälet till att folk väljer er framför andra ställen i området?", type: "textarea", required: true },
      { id: "r_reviews", label: "Vad säger era kunder om er i recensioner och kommentarer? Kopiera gärna ett par favoriter.", type: "textarea", required: true },
    ]
  },
  {
    title: "Visuellt och kreativt",
    fields: [
      { id: "r_foodLook", label: "Hur ser maten ut? Vacker, rustik, hemlagad, urban, fine dining?", type: "text", required: true },
      { id: "r_venueLook", label: "Hur ser lokalen ut? Modern, mysig, minimalistisk, industriell?", type: "text", required: true },
      { id: "r_uniqueVisuals", label: "Finns det unika visuella element som öppet kök, speciell inredning, utsikt eller logga?", type: "textarea", required: true },
      { id: "r_existingMaterial", label: "Har ni befintligt bild- eller videomaterial vi kan använda?", type: "text", required: true },
      { id: "r_filmingOk", label: "Är det okej att vi filmar personal, kök och gäster?", type: "text", required: true },
    ]
  },
  {
    title: "Praktiskt",
    fields: [
      { id: "r_contactPerson", label: "Vem är vår primära kontaktperson?", type: "text", required: true },
      { id: "r_contactMethod", label: "Hur når vi er bäst? Telefon, WhatsApp, mail?", type: "text", required: true },
      { id: "r_specificEvents", label: "Finns det specifika kampanjer, lanseringar eller säsonger vi ska planera kring?", type: "textarea", required: true },
      { id: "r_doNotCommunicate", label: "Finns det saker vi absolut inte ska kommunicera eller visa?", type: "textarea", required: true },
      { id: "r_otherInfo", label: "Är det något annat vi behöver veta innan vi startar?", type: "textarea", required: false },
    ]
  }
];

export const Analysis = () => {
  useMeta({
    title: 'Skräddarsydd Analysplan – NCA Media Malmö',
    description: 'Fyll i formuläret och få en skräddarsydd digital strategi för din verksamhet. Kostnadsfritt från NCA Media i Malmö.',
    canonical: 'https://www.ncamedia.se/analysis',
  });
  const { t } = useTranslation();
  const [formType, setFormType] = useState<FormType>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = formType === 'restaurant' ? RESTAURANT_STEPS : UNIVERSAL_STEPS;

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateStep = () => {
    const currentFields = steps[currentStep].fields;
    const newErrors: Record<string, string> = {};
    let isValid = true;

    currentFields.forEach(field => {
      if (field.required && !formData[field.id]?.trim()) {
        newErrors[field.id] = t('analysis.required');
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setFormType(null);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-md flex items-center justify-center mx-auto mb-8">
            <CheckCircle weight="duotone" className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('analysis.success.title')}
          </h1>
          <p className="text-foreground/70 text-lg mb-12 leading-relaxed">
            {t('analysis.success.desc')}
          </p>
          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all"
          >
            {t('analysis.success.btn')}
            <ArrowRight weight="duotone" className="w-5 h-5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 w-fit mx-auto mb-6">
            <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
            <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">{t('analysis.tagline')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
            <span className="block">{t('analysis.title1')}</span>
            <span className="font-medium text-gradient-primary">{t('analysis.title2')}</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t('analysis.desc')}
          </p>
        </div>

        {!formType ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <button
              onClick={() => setFormType('universal')}
              className="flex flex-col items-center text-center p-10 rounded-md border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-[#1b54ff]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-md bg-[#1b54ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Buildings weight="duotone" className="w-8 h-8 text-[#1b54ff]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t('analysis.b2b.title')}</h3>
              <p className="text-foreground/60">{t('analysis.b2b.desc')}</p>
            </button>

            <button
              onClick={() => setFormType('restaurant')}
              className="flex flex-col items-center text-center p-10 rounded-md border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-[#1b54ff]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-md bg-[#1b54ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ForkKnife weight="duotone" className="w-8 h-8 text-[#1b54ff]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{t('analysis.restaurant.title')}</h3>
              <p className="text-foreground/60">{t('analysis.restaurant.desc')}</p>
            </button>
          </motion.div>
        ) : (
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-md p-6 md:p-10">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between text-sm text-foreground/60 mb-3">
                <span>{t('analysis.step')} {currentStep + 1} {t('analysis.of')} {steps.length}</span>
                <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% {t('analysis.completed')}</span>
              </div>
              <div className="w-full h-2 bg-foreground/10 rounded-md overflow-hidden">
                <motion.div 
                  className="h-full bg-[#1b54ff]"
                  initial={{ width: `${(currentStep / steps.length) * 100}%` }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {steps[currentStep].title}
                </h2>

                <div className="space-y-8">
                  {steps[currentStep].fields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-3">
                      <label htmlFor={field.id} className="text-foreground font-medium">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.id}
                          value={formData[field.id] || ''}
                          onChange={(e) => {
                            handleInputChange(field.id, e.target.value);
                            if (errors[field.id]) setErrors(prev => ({ ...prev, [field.id]: '' }));
                          }}
                          className={cn(
                            "w-full min-h-[120px] px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 transition-all resize-y",
                            errors[field.id] ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                          )}
                          placeholder={t('analysis.placeholder')}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={field.id}
                          value={formData[field.id] || ''}
                          onChange={(e) => {
                            handleInputChange(field.id, e.target.value);
                            if (errors[field.id]) setErrors(prev => ({ ...prev, [field.id]: '' }));
                          }}
                          className={cn(
                            "w-full px-4 py-3 rounded-md bg-background border text-foreground focus:outline-none focus:ring-1 transition-all appearance-none",
                            errors[field.id] ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                          )}
                        >
                          <option value="" disabled>{t('analysis.selectOption')}</option>
                          {field.options?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id] || ''}
                          onChange={(e) => {
                            handleInputChange(field.id, e.target.value);
                            if (errors[field.id]) setErrors(prev => ({ ...prev, [field.id]: '' }));
                          }}
                          className={cn(
                            "w-full px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 transition-all",
                            errors[field.id] ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                          )}
                          placeholder={t('analysis.placeholder')}
                        />
                      )}
                      {errors[field.id] && <p className="text-[#EF4444] text-xs">{errors[field.id]}</p>}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-foreground/10">
                  <button
                    onClick={handlePrev}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium px-4 py-3 sm:py-2 order-2 sm:order-1"
                  >
                    <ArrowLeft weight="duotone" className="w-4 h-4" />
                    {t('analysis.back')}
                  </button>
                  
                  <button 
                    onClick={handleNext} 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto relative px-8 py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden order-1 sm:order-2"
                  >
                    <span className={cn("flex items-center justify-center transition-opacity", isSubmitting ? "opacity-0" : "opacity-100")}>
                      {currentStep === steps.length - 1 ? t('analysis.submit') : t('analysis.next')}
                      {currentStep < steps.length - 1 && <ArrowRight weight="duotone" className="ml-2 h-4 w-4" />}
                    </span>
                    {isSubmitting && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </span>
                    )}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};
