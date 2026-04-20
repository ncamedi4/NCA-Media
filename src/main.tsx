import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

if (typeof window !== 'undefined') {
  if (!window.IntersectionObserver) {
    (window as any).IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
  if (!window.ResizeObserver) {
    (window as any).ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
  if (!window.matchMedia) {
    (window as any).matchMedia = () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    });
  }
  if (!window.scrollTo) {
    (window as any).scrollTo = () => {};
  }
  if (!window.requestAnimationFrame) {
    (window as any).requestAnimationFrame = (cb: any) => setTimeout(cb, 0);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

