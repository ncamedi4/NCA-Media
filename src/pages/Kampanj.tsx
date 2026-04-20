import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';
import { useMeta } from '@/src/hooks/useMeta';

const NAV_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0O2ONrthdIcPUexyhm_obXwKib8FLv5lrUnsCV9wLxpuXqFDulYyMfgyNtajNyYF-6jHAcCyeJ';

const ProofCard = ({ num, label, client, color }: { num: string; label: string; client: string; color: string }) => (
  <div className={`flex-1 min-w-[140px] bg-white/5 border-l-2 ${color} p-5`}>
    <div className={`text-3xl font-light ${color.replace('border-l-2 border-', 'text-').replace('border-', 'text-')}`}
      style={{ color: color.includes('blue') ? '#1B54FF' : color.includes('red') ? '#EF4444' : '#10B981' }}>
      {num}
    </div>
    <div className="text-xs text-white/60 mt-1 leading-snug">{label}</div>
    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-2">{client}</div>
  </div>
);

export const Kampanj = () => {
  useMeta({
    title: 'NCA Media – Boka gratis strategisamtal',
    description: 'Content som driver leads och affärer — inte bara räckvidd. 70+ leads vecka 1. 10× skalad annonsbudget. Boka gratis strategisamtal.',
    canonical: 'https://www.ncamedia.se/kampanj',
  });

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: '#09102B', color: '#fff', minHeight: '100vh', WebkitFontSmoothing: 'antialiased' }}>

      {/* Topbar — no nav, single CTA */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'rgba(3,10,38,0.96)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(27,84,255,0.2)', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <span style={{ fontSize: '13pt', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase' }}>NCA Media</span>
        <a href={NAV_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#EF4444', color: '#fff', fontSize: '9pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', padding: '10px 24px', textDecoration: 'none' }}>
          Boka gratis samtal
        </a>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', background: '#030A26', display: 'flex', alignItems: 'center', padding: '120px 80px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' }}>
          <div style={{ flex: '1.2', minWidth: 280 }}>
            <div style={{ display: 'inline-block', background: 'rgba(27,84,255,0.15)', border: '1px solid rgba(27,84,255,0.4)', color: '#5b80ff', fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', padding: '6px 14px', marginBottom: 28 }}>
              Tillväxtpartner · Malmö, Skåne &amp; Danmark
            </div>
            <h1 style={{ fontSize: 'clamp(32pt, 5vw, 52pt)', fontWeight: 200, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: 28 }}>
              <span style={{ display: 'block' }}>Content som driver</span>
              <span style={{ display: 'block', color: '#1B54FF' }}>leads och affärer.</span>
              <span style={{ display: 'block' }}>Inte bara räckvidd.</span>
            </h1>
            <p style={{ fontSize: '14pt', fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 480, marginBottom: 40, lineHeight: 1.6 }}>
              Vi är inte en contentbyrå. Vi är din tillväxtpartner. Vi producerar content, kör Meta-annonser och optimerar tills <strong style={{ color: '#fff', fontWeight: 500 }}>leads, affärer och omsättning</strong> går upp.
            </p>
            <a href={NAV_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#EF4444', color: '#fff', fontSize: '10.5pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>
              Boka gratis strategisamtal
            </a>
            <p style={{ fontSize: '8.5pt', color: 'rgba(255,255,255,0.28)', marginTop: 16, letterSpacing: '0.04em' }}>Kostnadsfritt · Inga förpliktelser · Svar inom 24h</p>
          </div>
          <div style={{ flex: '0.8', display: 'flex', flexDirection: 'column', gap: 2, minWidth: 220 }}>
            {[
              { num: '70+', label: 'kvalificerade leads på 7 dagar', client: 'Solblixt', border: '2px solid #1B54FF', numColor: '#1B54FF' },
              { num: '10×', label: 'annonsbudget skalad på vinnande content', client: 'Shahs Halal Food', border: '2px solid #EF4444', numColor: '#EF4444' },
              { num: '2–3v', label: 'till första mätbara resultaten', client: 'Genomsnitt, aktiva kunder', border: '2px solid #10B981', numColor: '#10B981' },
            ].map(c => (
              <div key={c.client} style={{ background: 'rgba(255,255,255,0.05)', borderLeft: c.border, padding: '22px 24px' }}>
                <div style={{ fontSize: '32pt', fontWeight: 200, color: c.numColor, lineHeight: 1 }}>{c.num}</div>
                <div style={{ fontSize: '9pt', color: 'rgba(255,255,255,0.6)', marginTop: 4, lineHeight: 1.45 }}>{c.label}</div>
                <div style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>{c.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client strip */}
      <div style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 80px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.3)' }}>Aktiva partners</span>
        {['Blacksmith Burgers', 'Pappas Cevapi', 'Mando Steak House', 'Burger Mansion', 'Shahs Halal Food', 'Solblixt'].map(n => (
          <span key={n} style={{ fontSize: '10pt', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{n}</span>
        ))}
      </div>

      {/* Problem */}
      <div style={{ background: '#030A26', borderTop: '1px solid rgba(27,84,255,0.15)', borderBottom: '1px solid rgba(27,84,255,0.15)', padding: '80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#1B54FF', marginBottom: 16, display: 'block' }}>Det vi löser</span>
          <h2 style={{ fontSize: 'clamp(24pt, 3vw, 34pt)', fontWeight: 200, lineHeight: 1.1, marginBottom: 16 }}>Er verksamhet är <em style={{ fontStyle: 'normal', color: '#1B54FF' }}>seriös.</em><br />Er digitala närvaro hänger inte med.</h2>
          <p style={{ fontSize: '12pt', fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 560, lineHeight: 1.6, marginBottom: 48 }}>De flesta ambitiösa företag saknar inte kvalitet — de saknar ett system som omvandlar det till synlighet, leads och affärer.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2 }}>
            {[
              { icon: '⏱', h: 'Ni hinner inte', p: 'Ni driver en riktig verksamhet. Det finns inte tid att filma, redigera, posta och optimera annonser parallellt.' },
              { icon: '📉', h: 'Content som inte konverterar', p: 'Ni kanske publicerar — men det driver inga leads. Räckvidd och likes är inte omsättning.' },
              { icon: '💸', h: 'Annonser utan system', p: 'Budget går in i Meta men ingenting mätbart kommer ut. Ni vet inte vad som faktiskt fungerar.' },
            ].map(item => (
              <div key={item.h} style={{ background: 'rgba(239,68,68,0.07)', borderTop: '2px solid rgba(239,68,68,0.35)', padding: '28px 24px' }}>
                <div style={{ fontSize: '22pt', marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{ fontSize: '13pt', fontWeight: 400, marginBottom: 8 }}>{item.h}</h4>
                <p style={{ fontSize: '10pt', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution */}
      <div style={{ padding: '80px', maxWidth: 1100, margin: '0 auto' }}>
        <span style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#1B54FF', marginBottom: 16, display: 'block' }}>The NCA Way</span>
        <h2 style={{ fontSize: 'clamp(24pt, 3vw, 34pt)', fontWeight: 200, lineHeight: 1.1, marginBottom: 16 }}>Strategi. Produktion.<br /><em style={{ fontStyle: 'normal', color: '#1B54FF' }}>Resultat.</em></h2>
        <p style={{ fontSize: '12pt', fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 560, lineHeight: 1.6, marginBottom: 48 }}>Vi tar hand om hela kedjan — från idé till konvertering. Ni fokuserar på er verksamhet.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
          {[
            { n: '01 — Strategi', h: 'Vi planerar för konverteringar', p: 'Innehållsstrategi, scripts och hooks byggda för att driva leads och affärer.' },
            { n: '02 — Produktion', h: 'Vi filmar och producerar', p: 'Kamera, ljud, redigering — vi levererar allt utan att ni behöver vara inblandade.' },
            { n: '03 — Distribution', h: 'Vi hanterar era kanaler', p: 'Publicering, captions och community management på rätt plattformar.' },
            { n: '04 — Annonsering', h: 'Vi skalar det som fungerar', p: 'Meta-annonser byggda på content vi producerat. Vi skalar aggressivt vid konvertering.' },
            { n: '05 — Tracking', h: 'Vi trackar allt', p: 'CRM, Google Analytics, UTM-länkar. Ni ser exakt hur många leads vi genererat.' },
            { n: '06 — Optimering', h: 'Vi stannar tills resultaten är där', p: 'Vi är inte en byrå som levererar och försvinner. Vi optimerar löpande.' },
          ].map(s => (
            <div key={s.n} style={{ background: 'rgba(27,84,255,0.07)', borderTop: '2px solid rgba(27,84,255,0.35)', padding: '28px 24px' }}>
              <div style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#1B54FF', marginBottom: 10 }}>{s.n}</div>
              <h4 style={{ fontSize: '13pt', fontWeight: 400, marginBottom: 8 }}>{s.h}</h4>
              <p style={{ fontSize: '10pt', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div style={{ background: '#030A26', borderTop: '1px solid rgba(27,84,255,0.15)', borderBottom: '1px solid rgba(27,84,255,0.15)', padding: '80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#1B54FF', marginBottom: 16, display: 'block' }}>Bevisade resultat</span>
          <h2 style={{ fontSize: 'clamp(24pt, 3vw, 34pt)', fontWeight: 200, lineHeight: 1.1, marginBottom: 16 }}>Siffror vi <em style={{ fontStyle: 'normal', color: '#1B54FF' }}>kan backa upp.</em></h2>
          <p style={{ fontSize: '12pt', fontWeight: 300, color: 'rgba(255,255,255,0.55)', maxWidth: 560, lineHeight: 1.6, marginBottom: 48 }}>Vi mäter aldrig i views eller följare. Bara i leads, stängda affärer och skalad omsättning — oavsett bransch.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {[
              { client: 'Solblixt', result: '70+ leads\nvecka 1', desc: '5 stängda affärer under den första veckan. Fullständigt content- och annonsupplägg från dag ett.' },
              { client: 'Shahs Halal Food', result: '10× annons-\nbudget skalad', desc: 'Identifierade det vinnande kreativa på vecka två. Skalade budgeten 10× med bibehållen ROAS.' },
            ].map(r => (
              <div key={r.client} style={{ background: 'rgba(27,84,255,0.1)', borderTop: '2px solid #1B54FF', padding: '36px 32px' }}>
                <div style={{ fontSize: '11pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>{r.client}</div>
                <div style={{ fontSize: '32pt', fontWeight: 200, color: '#1B54FF', lineHeight: 1.0, marginBottom: 10, whiteSpace: 'pre-line' }}>{r.result}</div>
                <div style={{ fontSize: '10.5pt', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '80px', maxWidth: 1100, margin: '0 auto' }}>
        <span style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#1B54FF', marginBottom: 16, display: 'block' }}>Vanliga frågor</span>
        <h2 style={{ fontSize: 'clamp(24pt, 3vw, 34pt)', fontWeight: 200, lineHeight: 1.1, marginBottom: 40 }}>Allt ni undrar <em style={{ fontStyle: 'normal', color: '#1B54FF' }}>innan ni bokar.</em></h2>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {[
            { q: 'Hur lång bindningstid har ni?', a: '3 månaders startavtal för att ge strategin tid att leverera. Därefter månadsvis. Om vi inte levererar — avslutar ni.' },
            { q: 'Hur fort ser vi resultat?', a: 'De flesta kunder ser mätbar aktivitet inom 2–3 veckor. Solblixt fick 70+ leads vecka 1. Vi sätter upp CRM och spårning direkt.' },
            { q: 'Betalar vi annonsbudgeten separat?', a: 'Ja. Vår hantering ingår i paketet. Ni betalar annonsbudgeten direkt till Meta/TikTok. Full transparens.' },
            { q: 'Vilka typer av företag jobbar ni med?', a: 'Alla typer av ambitiösa verksamheter i Skåne och Danmark — restauranger, kliniker, servicebolag, e-handel. Det som avgör är att ni vill ha mätbar tillväxt.' },
            { q: 'Vad kostar strategisamtalet?', a: 'Ingenting. Vi går igenom er situation och vilket upplägg som passar bäst — utan förpliktelser.' },
          ].map(faq => (
            <div key={faq.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '24px 0' }}>
              <div style={{ fontSize: '13pt', fontWeight: 400, marginBottom: 10 }}>{faq.q}</div>
              <div style={{ fontSize: '10.5pt', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: 680 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ background: '#030A26', padding: '100px 80px', textAlign: 'center', borderTop: '1px solid rgba(27,84,255,0.2)' }}>
        <span style={{ fontSize: '8pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#1B54FF', marginBottom: 20, display: 'block' }}>Nästa steg</span>
        <h2 style={{ fontSize: 'clamp(28pt, 4vw, 42pt)', fontWeight: 200, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>Redo att driva<br /><em style={{ fontStyle: 'normal', color: '#1B54FF' }}>riktiga affärer?</em></h2>
        <p style={{ fontSize: '13pt', fontWeight: 300, color: 'rgba(255,255,255,0.55)', marginBottom: 40, lineHeight: 1.6, maxWidth: 560, margin: '0 auto 40px' }}>
          Boka ett gratis 30-minuterssamtal med Anton. Vi går igenom er situation och vilket upplägg som ger mest tillväxt — utan sälj-pitch.
        </p>
        <a href={NAV_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#EF4444', color: '#fff', fontSize: '11.5pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
          Boka gratis strategisamtal
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 20, flexWrap: 'wrap' }}>
          {['Kostnadsfritt', 'Inga förpliktelser', 'Svar inom 24 timmar'].map(g => (
            <span key={g} style={{ fontSize: '9pt', color: 'rgba(255,255,255,0.35)' }}>✓ {g}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#020817', padding: '28px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontSize: '8pt', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.06em' }}>
          © 2025 NCA Media · Lund, Sverige · www.ncamedia.se<br />Grundare: Anton Norrman
        </div>
        <div style={{ fontSize: '8pt', fontWeight: 300, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>NCA Media</div>
      </footer>

    </div>
  );
};
