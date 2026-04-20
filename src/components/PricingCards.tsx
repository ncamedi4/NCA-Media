import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      {/* Script Partner */}
      <div className="border border-border bg-card rounded-2xl p-8 flex flex-col shadow-sm text-left">
        <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider mb-2">Kom igång</span>
        <h2 className="text-2xl font-light mb-4 text-foreground">Script Partner</h2>
        <div className="text-4xl font-normal mb-1 text-foreground">7 500 kr</div>
        <div className="text-sm text-foreground/50 mb-8 border-b border-border pb-8">per månad · exkl. moms</div>
        <ul className="space-y-4 mb-8 flex-1 text-sm text-foreground/80">
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Du filmar. Vi bygger strategin och det som gör att videos presterar.</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Innehållsstrategi</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Scripts och hooks</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Shotlist och on-screen text</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Caption copy i rätt tonalitet</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Feedbackrunda</span></li>
        </ul>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium rounded-md text-center transition-colors">Boka Strategisamtal</a>
      </div>

      {/* Content Partner */}
      <div className="border-2 border-[#1b54ff] bg-[#030A26] text-white rounded-2xl p-8 flex flex-col relative scale-[1.02] shadow-2xl text-left">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#10B981] text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">Populärast</div>
        <span className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Standard</span>
        <h2 className="text-2xl font-light mb-4">Content Partner</h2>
        <div className="text-4xl font-normal text-[#1b54ff] mb-1">15 500 kr</div>
        <div className="text-sm text-white/50 mb-8 border-b border-white/10 pb-8">per månad · exkl. moms</div>
        <ul className="space-y-4 mb-8 flex-1 text-sm text-white/80">
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#10B981] shrink-0" /> <span>Vi producerar allt — ni fokuserar på er verksamhet.</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#10B981] shrink-0" /> <span>7 kameravideos + 5 telefonvideos</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#10B981] shrink-0" /> <span>15 bilder per månad</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#10B981] shrink-0" /> <span>Social media management</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#10B981] shrink-0" /> <span>Strategi kopplad till säsong och lokala triggers</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#10B981] shrink-0" /> <span>Bonus: Referensprogram (2000 kr/kund)</span></li>
        </ul>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#1b54ff] hover:bg-[#1b54ff]/90 text-white font-medium rounded-md text-center transition-colors">Boka Content Partner</a>
      </div>

      {/* Master Partner */}
      <div className="border border-border bg-card rounded-2xl p-8 flex flex-col shadow-sm text-left">
        <span className="text-[#1b54ff] text-xs font-semibold uppercase tracking-wider mb-2">Maxad effekt</span>
        <h2 className="text-2xl font-light mb-4 text-foreground">Master Partner</h2>
        <div className="text-4xl font-normal mb-1 text-foreground">30 000 kr</div>
        <div className="text-sm text-foreground/50 mb-8 border-b border-border pb-8">per månad · exkl. moms</div>
        <ul className="space-y-4 mb-8 flex-1 text-sm text-foreground/80">
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Maxad output — en rullande contentmaskin.</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>10 kameravideos + 10 telefonvideos</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Bilder ingår</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Social media management i högt tempo</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Kampanjdrivet: launches, öppningar, franchise</span></li>
          <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#1b54ff] shrink-0" /> <span>Veckoplanering och live-flöde</span></li>
        </ul>
        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground font-medium rounded-md text-center transition-colors">Boka Master Partner</a>
      </div>
    </div>
  );
};
