/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, CookieBanner } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { Portfolio } from '@/src/pages/Portfolio';
import { Contact } from '@/src/pages/Contact';
import { Analysis } from '@/src/pages/Analysis';
import { Service } from '@/src/pages/Service';
import { Pricing } from '@/src/pages/Pricing';
import { LocalLanding } from '@/src/pages/LocalLanding';
import { CaseSolblixt } from '@/src/pages/cases/CaseSolblixt';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/priser" element={<Pricing />} />
              <Route path="/:city(malmo|helsingborg|lund)" element={<LocalLanding />} />
              <Route path="/case/solblixt" element={<CaseSolblixt />} />
              
              {/* Nya Tjänstesidor */}
              <Route path="/videoproduktion" element={<Service slug="videoproduktion" />} />
              <Route path="/social-media" element={<Service slug="social-media" />} />
              <Route path="/meta-annonsering" element={<Service slug="meta-annonsering" />} />
              <Route path="/innehallsstrategi" element={<Service slug="innehallsstrategi" />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}
