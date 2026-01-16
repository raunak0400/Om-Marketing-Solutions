'use client';

import Link from 'next/link';

// Replace with a valid phone number, including the country code, but no '+' or '00'.
const WHATSAPP_NUMBER = '12345678900';
const WHATSAPP_MESSAGE = "Hello! I'm interested in your services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="currentColor"
  >
    <path d="M16.2,2.5c-7.5,0-13.7,6.1-13.7,13.7c0,2.5,0.7,4.8,1.9,6.8l-2,7.3l7.5-1.9c2,1.2,4.3,1.9,6.8,1.9h0c7.5,0,13.7-6.1,13.7-13.7S23.7,2.5,16.2,2.5z M16.2,27.7c-2.3,0-4.5-0.7-6.4-1.9l-0.5-0.3l-4.7,1.2l1.2-4.6l-0.3-0.5c-1.3-2.1-2-4.5-2-7.1 c0-6.4,5.2-11.6,11.6-11.6s11.6,5.2,11.6,11.6S22.6,27.7,16.2,27.7z M23.3,18.8c-0.3-0.1-1.6-0.8-1.9-0.9c-0.3-0.1-0.5-0.1-0.7,0.1 c-0.2,0.2-0.7,0.9-0.8,1.1c-0.2,0.2-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.4-2.3-1.4c-0.8-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6 c0.1-0.1,0.3-0.3,0.4-0.5c0.1-0.1,0.2-0.3,0.3-0.5c0.1-0.2,0-0.3-0.1-0.5c-0.1-0.1-0.6-1.5-0.8-2.1c-0.2-0.5-0.4-0.5-0.6-0.5 c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0.1-0.8,0.4c-0.3,0.3-1,1-1,2.5c0,1.5,1,2.9,1.2,3.1c0.2,0.2,2,3.1,4.9,4.3c0.7,0.3,1.3,0.5,1.7,0.6 c0.7,0.2,1.4,0.2,1.9-0.1c0.6-0.3,1.6-0.8,1.9-1.5c0.2-0.7,0.2-1.3,0.1-1.5C23.8,19,23.6,18.9,23.3,18.8z" />
  </svg>
);

export function WhatsAppFAB() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
