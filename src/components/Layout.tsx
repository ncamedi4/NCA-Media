import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { List, X, Sparkle, ArrowRight, CaretDown, Globe, InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo, FacebookLogo } from '@phosphor-icons/react';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';

const LOGO_URL = 'https://firebasestorage.googleapis.com/v0/b/studio-7709662742-59a36.firebasestorage.app/o/NCA%20Media%20V2%2FLogos%2FNCA_LOGO_PRIMARY.png?alt=media&token=d6eb8a9d-8878-4c0f-8fe4-814cb7b6e290';

const SERVICES_LINKS = [
  { label: 'Videoproduktion', href: '/videoproduktion' },
  { label: 'Social Media Management', href: '/social-media' },
  { label: 'Meta & Google Ads', href: '/meta-annonsering' },
  { label: 'Innehållsstrategi', href: '/innehallsstrategi' },
];

const NAV_LINKS = [
  { label: 'About', sectionId: 'about' },
];

const OTHER_LINKS = [
  { label: 'Portfolio', href: '/portfolio' },
];

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    showArrow?: boolean;
    variant?: 'outline' | 'solid';
  }
>(({ className, children, icon, iconPosition = 'right', showArrow = false, variant = 'outline', ...props }, ref) => {
  const arrow = showArrow ? (
    <ArrowRight weight="duotone" className="h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
  ) : icon;

  const baseStyles = cn(
    "group relative inline-flex items-center justify-center gap-2",
    "px-6 py-3 sm:px-8 sm:py-4 rounded-md",
    "text-base font-medium normal-case tracking-[0.02em] leading-none",
    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30",
    "disabled:pointer-events-none disabled:opacity-50",
    "overflow-hidden cursor-pointer"
  );

  const variants = {
    outline: cn(
      "border border-foreground/10",
      "bg-gradient-to-b from-foreground/[0.07] to-foreground/[0.02]",
      "backdrop-blur-xl",
      "text-foreground",
      "shadow-[inset_0_1px_0_0_hsl(0_0%_100%/0.1),inset_0_-1px_0_0_hsl(0_0%_0%/0.2),0_2px_8px_-2px_hsl(0_0%_0%/0.3)]",
      "hover:border-foreground/25",
      "hover:bg-gradient-to-br hover:from-[#1b54ff40] hover:via-[#1b54ff20] hover:to-[#1b54ff10]",
      "hover:shadow-[inset_0_1px_0_0_#1b54ff60,inset_0_-1px_0_0_rgba(0,0,0,0.15),0_6px_28px_-6px_#1b54ff60,0_0_0_1px_#1b54ff20]",
      "hover:-translate-y-[2px] hover:scale-[1.02]",
      "active:translate-y-0 active:scale-[0.97] active:duration-100"
    ),
    solid: cn(
      "border border-foreground/25",
      "bg-[#1b54ff]/20",
      "backdrop-blur-2xl",
      "text-foreground",
      "shadow-[0_1px_2px_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(0,0,0,0.1)]",
      "hover:bg-gradient-to-br hover:from-[#1b54ff60] hover:via-[#1b54ff40] hover:to-[#1b54ff20]",
      "hover:border-[#1b54ff80]",
      "hover:shadow-[0_8px_36px_-6px_#1b54ff60,inset_0_1px_0_0_#1b54ff80,inset_0_-1px_0_0_rgba(0,0,0,0.08),0_0_52px_-12px_#1b54ff40]",
      "hover:-translate-y-[3px] hover:scale-[1.03]",
      "active:translate-y-0 active:scale-[0.97] active:duration-100",
      "active:bg-[#1b54ff]/30"
    )
  };

  return (
    <button ref={ref} className={cn(baseStyles, variants[variant], className)} {...props}>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-br from-[#1b54ff40] via-[#1b54ff20] to-[#1b54ff10] pointer-events-none" />
      <span className="absolute inset-0 -translate-x-[110%] group-hover:translate-x-[110%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-r from-transparent via-[#1b54ff40] to-transparent pointer-events-none skew-x-[-15deg] blur-[2px]" />
      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1b54ff80] to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
      <span className="absolute inset-x-4 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#1b54ff40] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <span className="relative z-10 flex items-center gap-2.5">
        {iconPosition === 'left' && arrow}
        {children}
        {iconPosition === 'right' && arrow}
      </span>
    </button>
  );
});

export const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  }
>(({ className, children, icon, iconPosition = 'right', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2",
        "px-6 py-3 sm:px-8 sm:py-4 rounded-md overflow-hidden",
        "bg-transparent",
        "border border-transparent",
        "text-foreground/80 text-base font-medium normal-case tracking-[0.02em] leading-none",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:text-foreground hover:bg-foreground/5",
        "active:scale-[0.97] active:duration-100",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20",
        "disabled:pointer-events-none disabled:opacity-50",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </span>
    </button>
  );
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';
  
  // When scrolled, we use a subtle light background (bg-background/90), so text should be dark.
  // When not scrolled, home page has a dark hero (white text), other pages have a white background (dark text).
  const headerTextColor = (!isScrolled && isHomePage) ? 'text-white' : 'text-foreground';
  const headerTextMuted = (!isScrolled && isHomePage) ? 'text-white/80' : 'text-foreground/60';
  const headerHoverBg = (!isScrolled && isHomePage) ? 'hover:bg-white/10' : 'hover:bg-foreground/[0.04]';
  const headerHoverText = (!isScrolled && isHomePage) ? 'hover:text-white' : 'hover:text-foreground';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 lg:px-6">
      <motion.nav
        initial={false}
        animate={{
          marginTop: isScrolled ? 12 : 0,
          borderRadius: isScrolled ? 6 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative flex items-center justify-between px-6 py-2 lg:px-8",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border border-foreground/10 shadow-sm"
            : "bg-transparent border border-transparent"
        )}
      >
        {isScrolled && (
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1b54ff]/20 to-transparent pointer-events-none"
          />
        )}

        <Link to="/" className="flex-shrink-0 group relative flex items-center h-10">
          <img
            src={LOGO_URL}
            alt="NCA Media"
            className={cn(
              "h-10 w-auto transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_0_12px_rgba(27,84,255,0.5)] group-hover:brightness-110 origin-left",
              (!isHomePage || isScrolled) && "invert"
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          <li className="relative group">
            <button
              className={cn("relative px-4 py-2 rounded-md text-lg font-light tracking-[0.04em] transition-all duration-300 flex items-center gap-1", headerTextMuted, headerHoverText, headerHoverBg)}
            >
              {t('nav.services')}
              <CaretDown weight="duotone" className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#1b54ff]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-background/95 backdrop-blur-md border border-foreground/10 rounded-xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] py-2 w-64 flex flex-col">
                {SERVICES_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.sectionId)}
                className={cn("relative px-4 py-2 rounded-md text-lg font-light tracking-[0.04em] transition-all duration-300 group", headerTextMuted, headerHoverText, headerHoverBg)}
              >
                {t(`nav.${link.label.toLowerCase()}`)}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#1b54ff]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </button>
            </li>
          ))}
          {OTHER_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={cn("relative px-4 py-2 rounded-md text-lg font-light tracking-[0.04em] transition-all duration-300 group", headerTextMuted, headerHoverText, headerHoverBg)}
              >
                {t(`nav.${link.label.toLowerCase()}`)}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#1b54ff]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className={cn("relative px-4 py-2 rounded-md text-lg font-light tracking-[0.04em] transition-all duration-300 group", headerTextMuted, headerHoverText, headerHoverBg)}
            >
              {t('nav.contact')}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#1b54ff]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={cn("flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors", headerTextMuted, headerHoverText, headerHoverBg)}
            >
              <Globe weight="duotone" className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{i18n.language.substring(0, 2)}</span>
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-32 bg-background/95 backdrop-blur-md border border-foreground/10 rounded-xl shadow-lg py-2 flex flex-col"
                >
                  <button onClick={() => changeLanguage('sv')} className="px-4 py-2 text-sm text-left text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors">Svenska</button>
                  <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-sm text-left text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors">English</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/analysis">
            <PrimaryButton showArrow className={cn("px-4 py-2 text-xl", (!isScrolled && isHomePage) ? "text-white border-white/20 hover:border-white/40 bg-white/5" : "")}>
              {t('nav.getQuote')}
            </PrimaryButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={cn("flex items-center justify-center w-10 h-10 rounded-md border backdrop-blur-md transition-all duration-300", (!isScrolled && isHomePage) ? "bg-white/10 border-white/20 hover:bg-white/20" : "bg-foreground/[0.04] border-foreground/[0.06] hover:bg-foreground/[0.08]")}
            >
              <span className={cn("text-xs font-medium uppercase", headerTextColor)}>{i18n.language.substring(0, 2)}</span>
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-32 bg-background/95 backdrop-blur-md border border-foreground/10 rounded-xl shadow-lg py-2 flex flex-col"
                >
                  <button onClick={() => changeLanguage('sv')} className="px-4 py-2 text-sm text-left text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors">Svenska</button>
                  <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-sm text-left text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors">English</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className={cn("flex items-center justify-center w-10 h-10 rounded-md border backdrop-blur-md transition-all duration-300", (!isScrolled && isHomePage) ? "bg-white/10 border-white/20 hover:bg-white/20" : "bg-foreground/[0.04] border-foreground/[0.06] hover:bg-foreground/[0.08]")}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X weight="duotone" className={cn("w-5 h-5", headerTextColor)} />
            ) : (
              <List weight="duotone" className={cn("w-5 h-5", headerTextColor)} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden mx-0 mt-2 rounded-md bg-foreground/[0.04] backdrop-blur-2xl border border-foreground/[0.08] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.06)]"
          >
            <span className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1b54ff]/20 to-transparent pointer-events-none" />
            <motion.ul
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col px-6 py-5 gap-1"
            >
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.05 }}
                className="flex flex-col gap-1"
              >
                <div className="px-4 py-2 text-sm font-semibold text-foreground/40 uppercase tracking-wider">
                  {t('nav.services')}
                </div>
                {SERVICES_LINKS.map((link, idx) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-4 py-2 pl-8 rounded-md text-foreground/60 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground hover:bg-foreground/[0.05]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.li>
              {NAV_LINKS.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 * idx }}
                >
                  <button
                    onClick={() => handleNavClick(link.sectionId)}
                    className="w-full text-left px-4 py-3 rounded-md text-foreground/60 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground hover:bg-foreground/[0.05]"
                  >
                    {t(`nav.${link.label.toLowerCase()}`)}
                  </button>
                </motion.li>
              ))}
              {OTHER_LINKS.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 * (NAV_LINKS.length + idx) }}
                >
                  <Link
                    to={link.href}
                    className="block px-4 py-3 rounded-md text-foreground/60 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground hover:bg-foreground/[0.05]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`nav.${link.label.toLowerCase()}`)}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.05 * (NAV_LINKS.length + OTHER_LINKS.length) }}
              >
                <Link
                  to="/contact"
                  className="block px-4 py-3 rounded-md text-foreground/60 text-sm font-medium tracking-wide transition-all duration-300 hover:text-foreground hover:bg-foreground/[0.05]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 * (NAV_LINKS.length + 2) }}
                className="pt-3"
              >
                <Link
                  to="/analysis"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full"
                >
                  <PrimaryButton showArrow className="w-full justify-center">
                    {t('nav.getQuote')}
                  </PrimaryButton>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#09102b] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10">
          <img
            src={LOGO_URL}
            alt="NCA Media"
            className="h-10 w-auto object-contain brightness-0 invert"
            loading="lazy"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium">
          <button onClick={() => handleNavClick('about')} className="hover:text-white/70 transition-colors">{t('nav.about')}</button>
          <button onClick={() => handleNavClick('services')} className="hover:text-white/70 transition-colors">{t('nav.services')}</button>
          <Link to="/portfolio" className="hover:text-white/70 transition-colors">{t('nav.portfolio')}</Link>
          <Link to="/privacy" className="hover:text-white/70 transition-colors">{t('footer.privacy')}</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-16 text-white/50">
          <a href="#" className="hover:text-white transition-colors">
            <TwitterLogo weight="fill" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <InstagramLogo weight="fill" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FacebookLogo weight="fill" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <LinkedinLogo weight="fill" className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} NCA Media AS</p>
          <p>Designed by NCA Media</p>
        </div>
      </div>
    </footer>
  );
};

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 max-w-4xl mx-auto md:mx-0 md:w-max">
      <div className="bg-[#111111] border border-white/10 rounded-xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-2xl">
        <p className="text-white/90 text-sm leading-relaxed text-center md:text-left">
          {t('cookie.message')}
        </p>
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center md:justify-end">
          <button 
            onClick={handleAccept}
            className="px-5 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            {t('cookie.accept')}
          </button>
          <button 
            onClick={handleDecline}
            className="px-5 py-2 bg-transparent text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/5 transition-colors"
          >
            {t('cookie.decline')}
          </button>
        </div>
      </div>
    </div>
  );
};
