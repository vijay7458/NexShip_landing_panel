import React from "react";

/* Generic line-style icons — inline SVG, currentColor based, no external assets */

export const BoxIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 8L12 3 3 8l9 5 9-5z" />
    <path d="M3 8v8l9 5 9-5V8" />
    <path d="M12 13v8" />
  </svg>
);

export const BoltIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...props}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

export const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" />
  </svg>
);

export const RocketIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const CartIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...props}>
    <path d="M12 21s-6.7-4.35-9.3-8.1C1.1 10.6 1.6 7.4 4.2 5.7c2.2-1.4 4.9-.8 6.3 1 .5.6 1 1.3 1.5 1.9.5-.6 1-1.3 1.5-1.9 1.4-1.8 4.1-2.4 6.3-1 2.6 1.7 3.1 4.9 1.5 7.2C18.7 16.65 12 21 12 21z" />
  </svg>
);

export const TruckIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="1" y="6" width="14" height="11" rx="1" />
    <path d="M15 9h4l3 3v5h-7z" />
    <circle cx="6" cy="19" r="1.6" />
    <circle cx="17.5" cy="19" r="1.6" />
  </svg>
);

export const BriefcaseIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M2 13h20" />
  </svg>
);

export const ChatIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const BagIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const LizardIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 15c1.5-3 4-5 7-5 2 0 3 1 4.5 1s2-1 3.5-1c2 0 3.5 1.5 3.5 3.5S20 17 18 17c-1.5 0-2-.5-3-1" />
    <path d="M10 10V6M14 10l2-3" />
    <circle cx="6.5" cy="13.5" r=".6" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowBoxIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 8L12 3 3 8l9 5 9-5z" />
    <path d="M3 8v8l9 5 9-5V8" />
    <path d="M9 12.5c1.5 1.5 4.5 1.5 6 0" />
  </svg>
);