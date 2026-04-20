/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, CookieBanner } from '@/src/components/Layout';
import { Home } from '@/src/pages/Home';
import { Portfolio } from '@/src/pages/Portfolio';
import { Contact } from '@/src/pages/Contact';
import { Analysis } from '@/src/pages/Analysis';
import { Service } from '@/src/pages/Service';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/services/:slug" element={<Service />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}
