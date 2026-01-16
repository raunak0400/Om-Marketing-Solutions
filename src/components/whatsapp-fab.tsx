'use client';

import Link from 'next/link';

// Replace with a valid phone number, including the country code, but no '+' or '00'.
const WHATSAPP_NUMBER = '919825247312';
const WHATSAPP_MESSAGE = "Hello! I'm interested in your digital solutions for my business.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="currentColor"
  >
    <path d="M19.05 4.94C17.22 3.12 14.71 2 12 2 6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.25 4.94L2 22l5.06-1.25c1.51.79 3.17 1.25 4.94 1.25 5.52 0 10-4.48 10-10 0-2.71-1.12-5.22-2.95-7.06zM12 20.25c-1.63 0-3.18-.48-4.5-1.33L4.92 20l1.37-2.61c-.93-1.39-1.44-3-1.44-4.71 0-4.54 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25zM16.39 13.29c-.14-.07-1.22-.6-1.41-.67s-.33-.1-.47.1-.53.67-.65.81-.24.16-.45.05c-.21-.1-.88-.32-1.67-.99-.62-.51-1.03-1.15-1.2-1.34c-.17-.19-.01-.3 0-.4s.22-.25.32-.34c.1-.09.16-.17.24-.29s.04-.2-.02-.34c-.06-.14-.59-1.41-.81-1.93-.21-.5-.43-.43-.59-.43h-.48c-.16 0-.41.06-.62.28-.21.22-.81.79-.81 1.93s.83 2.24.94 2.4c.11.16 1.63 2.48 3.96 3.48.56.24 1 .38 1.34.48.5.16 1.03.14 1.42.08.43-.05 1.22-.5 1.39-.98s.17-.91.12-1c-.05-.08-.16-.13-.32-.2z" />
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
