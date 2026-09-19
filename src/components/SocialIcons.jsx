// lucide-react no longer ships brand/logo marks, so the few social icons
// the footer needs are drawn here as lightweight inline SVGs that match
// lucide's stroke style (24x24, round caps, currentColor).

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v3.5H8V21h3.5v-7.5h3l.5-3.5h-3.5V7.5c0-.83.67-1.5 1.5-1.5H15V3Z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
