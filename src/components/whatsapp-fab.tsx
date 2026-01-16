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
    <path d="m16 2a13.91 13.91 0 0 0 -13.91 13.91q0 4.38 2.08 8.11l-2.08 7.93 8.2-2.05a13.91 13.91 0 0 0 5.71 1.41h.01a13.91 13.91 0 0 0 13.91-13.91q0-7.69-6.22-13.91t-13.91-6.22zm0 25.37a11.45 11.45 0 0 1 -6-1.74l-.43-.25-4.47 1.11 1.13-4.36-.28-.46a11.45 11.45 0 0 1 -1.88-6.17 11.45 11.45 0 0 1 22.9 0q0 6.33-5.06 11.39a11.33 11.33 0 0 1 -6.33 5.06zm6.6-9.44a1.2 1.2 0 0 0 -.83-.83q-.26-.13-1.63-.8l-.24-.12a15.42 15.42 0 0 0 -.53-.25q-.27-.13-.4-.13a.72.72 0 0 0 -.6.3l-.24.28q-.27.3-.53.6a1 1 0 0 0 -.07.63 10.51 10.51 0 0 0 .53 1.3q.26.4.56.81a11.32 11.32 0 0 0 2.21 2.76q1.55 1.42 3.48 2.22a5.41 5.41 0 0 0 1.81.4q.53 0 1-.13a3.3 3.3 0 0 0 2.15-1.42 2.72 2.72 0 0 0 .34-1.42q0-.53-.21-.86t-.52-.43zm-1.87 2.45a.69.69 0 0 1 -.27.13.43.43 0 0 1 -.33 0 4.41 4.41 0 0 1 -2.93-1.74 9.8 9.8 0 0 1 -1.81-3.13.52.52 0 0 1 .27-.6q.13-.13.27-.2a1.32 1.32 0 0 1 .33-.07.63.63 0 0 1 .2.07l.2.06a8.49 8.49 0 0 1 .46.27q.2.13.27.27a.4.4 0 0 1 .06.27q0 .13 0 .27-.07.13-.13.27a1.44 1.44 0 0 1 -.27.27q-.2.13-.34.23a4 4 0 0 0 -.2.13q-.14 0-.27-.07t-.2-.2q-.13-.13-.2-.27t-.13-.27q-.07-.13-.07-.2t0-.2a2.3 2.3 0 0 1 .2-.33l.2-.21a1.69 1.69 0 0 1 1-.66.86.86 0 0 1 .47-.07q.26 0 .46.07a1.31 1.31 0 0 1 .4.2q.13.13.2.2a1.18 1.18 0 0 1 .2.53q.06.26.06.53a1.4 1.4 0 0 1 -.06.53q-.07.27-.2.4a1.18 1.18 0 0 1 -.4.4q-.26.2-.53.33z" />
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
