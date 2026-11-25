import { Cloud } from 'lucide-react';

export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`group flex items-center gap-2.5 ${className}`} aria-label="Doce Nuvem — início">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 via-purple-300 to-pink-300 text-white shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
        <Cloud className="h-5 w-5" fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="font-display text-2xl font-semibold tracking-tight">
        Doce{' '}
        <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Nuvem</span>
      </span>
    </a>
  );
}
