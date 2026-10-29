export function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 2C29.9 2 38 10.1 38 20s-8.1 18-18 18c-6.4 0-12-3.3-15.2-8.3C3 27 2 24.6 2 22 2 11 10 2 20 2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M25.5 12.5c-7.5-.5-12 3.6-12 9 0 3 1.9 5 4.4 5 5 0 8.2-5 7.6-14Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M13 28c2.5-4.5 5.8-8 10-10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="5" y="9" width="38" height="34" rx="5" stroke="currentColor" strokeWidth="3" />
      <path d="M5 20h38M15 4v10M33 4v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}