import React from 'react';
import SEO from '@/src/components/SEO';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseSolblixt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-32 pb-24">
      <SEO 
        title="Case: Solblixt – 70+ leads vecka 1 | NCA Media" 
        description="Läs om hur vi hjälpte Solblixt skala sin verksamhet mätbart från dag ett med ett komplett content- och annonsupplägg."
        url="https://ncamedia.se/case/solblixt"
        canonical="https://ncamedia.se/case/solblixt" 
      />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Tillbaka till case
        </Link>
        <div className="mb-12">
            <span className="text-[#1b54ff] text-sm font-semibold uppercase tracking-wider mb-4 block">Case Study: Solblixt</span>
            <h1 className="text-5xl md:text-6xl lg:text-[77px] font-sans font-normal leading-[1.1] tracking-tight mb-8">
              70+ leads vecka 1
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Solblixt vände sig till oss på NCA Media för att öka sin digitala närvaro och framförallt – generera fler kvalitativa leads. Vårt uppdrag var att skapa ett konverterande system som levererade mätbara resultat direkt, utan långa startsträckor eller ihåliga löften.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#030A26] rounded-2xl p-8 text-white">
                <div className="text-3xl text-[#1b54ff] font-light mb-2">70+</div>
                <div className="text-sm text-white/70">Kvalificerade leads vecka 1</div>
            </div>
            <div className="bg-[#030A26] rounded-2xl p-8 text-white">
                <div className="text-3xl text-[#10B981] font-light mb-2">5</div>
                <div className="text-sm text-white/70">Stängda affärer första veckan</div>
            </div>
            <div className="bg-[#030A26] rounded-2xl p-8 text-white">
                <div className="text-3xl font-light mb-2">7 dagar</div>
                <div className="text-sm text-white/70">Till en full pipeline</div>
            </div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none text-foreground/80 space-y-6">
            <h2 className="text-3xl font-normal text-foreground">Utmaningen</h2>
            <p>
                Solblixt hade ett starkt erbjudande men saknade ett pålitligt och skalbart sätt att attrahera nya kunder. Traditionella marknadsföringsinsatser gav begränsad insikt och låg ROI. De behövde en partner som förstod både hur man skapar engagerande innehåll och hur man tekniskt driver detta innehåll som högpresterande annonsering.
            </p>
            
            <h2 className="text-3xl font-normal text-foreground mt-12">Detta gjorde vi</h2>
            <p>
                Istället för att bara agera produktionsbolag tog vi på NCA Media ett helhetsgrepp – från strategi till slutförande:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#1b54ff]">
                <li><strong>Konverterande Content:</strong> Vi producerade riktat foto- och videomaterial byggt kring tydliga "Offer Leads" och "Problem Solution Leads", designade specifikt för att fånga målgruppens uppmärksamhet i flödet.</li>
                <li><strong>Datadriven Annonsering:</strong> Vi etablerade Meta-kampanjer från start med full spårning uppsatt. Vi blandar inte ihop vår strategi med otydliga mätvärden; varje lead loggades i realtid i CRM.</li>
                <li><strong>Aggressiv Skalning:</strong> När vi fann det vinnande kreativa spåret, testade och isolerade vi detta omedelbart och tryckte gasen i botten.</li>
            </ul>

            <h2 className="text-3xl font-normal text-foreground mt-12">Resultatet</h2>
            <p>
                Redan den första veckan genererade systemet över 70 kvalificerade leads, vilket resulterade i 5 helt stängda och betalda affärer. Inom loppet av 7 dagar hade Solblixt gått från en oförutsägbar tillströmning av kunder till en helt full pipeline av starka potentiella köpare.
            </p>
        </div>

        <div className="mt-24 p-12 bg-foreground/5 rounded-2xl text-center">
            <h3 className="text-2xl font-light mb-4 text-foreground">Vill du ha samma resultat?</h3>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
                Boka ett gratis 30-minuterssamtal. Vi går igenom er unika marknadssituation och vilket upplägg som skulle skala er verksamhet snabbast.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#1b54ff] text-white font-medium rounded-md hover:bg-[#1b54ff]/90 transition-colors">
                Boka strategisamtal
            </a>
        </div>
      </div>
    </div>
  );
};
