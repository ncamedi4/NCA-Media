import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkle, ArrowRight, EnvelopeSimple, Phone, InstagramLogo, TwitterLogo, FacebookLogo, FileText, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { PrimaryButton } from '@/src/components/Layout';
import { TextReveal, SectionReveal } from '@/src/components/Animations';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Namn är obligatoriskt';
    if (!formData.mobile.trim()) newErrors.mobile = 'Telefonnummer är obligatoriskt';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Ogiltig e-postadress';
    if (!formData.message.trim()) newErrors.message = 'Meddelande är obligatoriskt';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ fullName: '', mobile: '', email: '', message: '' });
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-background pt-32 pb-20">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] rounded-md bg-[#1b54ff]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-md bg-[#1b54ff]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Analysis Plan Banner */}
          <SectionReveal delay={0}>
            <div className="mb-16 p-8 rounded-md border border-[#1b54ff]/20 bg-gradient-to-br from-[#1b54ff]/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#1b54ff]/20 bg-[#1b54ff]/5 w-fit mb-4">
                  <Sparkle weight="duotone" className="w-3.5 h-3.5 text-[#1b54ff]" />
                  <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider">Nyhet</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Få en Skräddarsydd Analysplan</h2>
                <p className="text-foreground/70">Fyll i vårt formulär så tar vi fram en strategi anpassad för just din verksamhet. Helt kostnadsfritt.</p>
              </div>
              <Link to="/analysis" className="shrink-0 w-full md:w-auto">
                <PrimaryButton showArrow variant="solid" className="w-full md:w-auto justify-center">
                  <FileText weight="duotone" className="w-4 h-4 mr-2" />
                  Till formuläret
                </PrimaryButton>
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-sm mb-6">
              <Sparkle weight="duotone" className="w-3 h-3 text-white/80" />
              <span className="text-white/80 text-sm font-medium">{t('contact.tagline')}</span>
            </div>
          </SectionReveal>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            <TextReveal text={t('contact.title1')} splitType="words" delay={0.2} />
          </h1>

          <SectionReveal delay={0.3}>
            <p className="text-muted-foreground text-base mb-10">
              Redo att ta din verksamhet till nästa nivå? Skicka ett meddelande så tar vi en kaffe och pratar om det.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.5}>
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-md border border-white/10 bg-white/[0.02] backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm text-foreground">Fullständigt namn</label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="För- och efternamn"
                    className={cn(
                      "w-full px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 transition-all",
                      errors.fullName ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                    )}
                  />
                  {errors.fullName && <p className="text-[#EF4444] text-xs">{errors.fullName}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="mobile" className="text-sm text-foreground">Telefonnummer</label>
                  <input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      setFormData({ ...formData, mobile: e.target.value });
                      if (errors.mobile) setErrors({ ...errors, mobile: '' });
                    }}
                    placeholder="Ditt telefonnummer"
                    className={cn(
                      "w-full px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 transition-all",
                      errors.mobile ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                    )}
                  />
                  {errors.mobile && <p className="text-[#EF4444] text-xs">{errors.mobile}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="email" className="text-sm text-foreground">E-postadress</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="Din e-postadress"
                  className={cn(
                    "w-full px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 transition-all",
                    errors.email ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                  )}
                />
                {errors.email && <p className="text-[#EF4444] text-xs">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="message" className="text-sm text-foreground">Meddelande</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Skriv ditt meddelande här..."
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 min-h-[120px] rounded-md bg-background border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 transition-all resize-y",
                    errors.message ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]" : "border-foreground/20 focus:border-[#1b54ff] focus:ring-[#1b54ff]"
                  )}
                />
                {errors.message && <p className="text-[#EF4444] text-xs">{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="relative w-full md:w-auto px-8 py-4 rounded-md bg-[#1b54ff] text-white font-medium hover:bg-[#1b54ff]/90 transition-all disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className={cn("flex items-center justify-center transition-opacity", (isSubmitting || isSuccess) ? "opacity-0" : "opacity-100")}>
                  {t('contact.send')}
                  <ArrowRight weight="duotone" className="ml-2 h-4 w-4" />
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                )}
                {isSuccess && (
                  <span className="absolute inset-0 flex items-center justify-center bg-[#10B981] text-white gap-2">
                    <CheckCircle weight="duotone" className="w-5 h-5" />
                    <span>{t('contact.success')}</span>
                  </span>
                )}
              </button>
            </form>
          </SectionReveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <EnvelopeSimple weight="duotone" className="w-5 h-5 text-foreground" />
                <p className="text-base text-foreground font-medium">{t('contact.emailUs')}</p>
              </div>
              <p className="text-sm text-muted-foreground pl-8">info@ncamedia.se</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Phone weight="duotone" className="w-5 h-5 text-foreground" />
                <p className="text-base text-foreground font-medium">{t('contact.callUs')}</p>
              </div>
              <p className="text-sm text-muted-foreground pl-8">+46 70 000 00 00</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Sparkle weight="duotone" className="w-5 h-5 text-foreground" />
                <p className="text-base text-foreground font-medium">{t('contact.socials')}</p>
              </div>
              <div className="flex items-center gap-4 pl-8">
                <a href="#" className="text-foreground hover:text-white/80 transition-colors"><FacebookLogo weight="duotone" className="w-4 h-4" /></a>
                <a href="#" className="text-foreground hover:text-white/80 transition-colors"><InstagramLogo weight="duotone" className="w-4 h-4" /></a>
                <a href="#" className="text-foreground hover:text-white/80 transition-colors"><TwitterLogo weight="duotone" className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
