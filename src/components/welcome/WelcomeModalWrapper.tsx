'use client';

import { useState, useEffect } from 'react';
import { WelcomeModal } from './WelcomeModal';

const STORAGE_KEY = 'om_welcome_seen';

export function WelcomeModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceShow = params.get('welcome') === '1';

    if (forceShow || !localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  return <WelcomeModal isOpen={isOpen} onClose={handleClose} />;
}
