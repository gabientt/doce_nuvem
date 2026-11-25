import { useState } from 'react';
import { CakeSlice } from 'lucide-react';
import { unsplashUrl } from '../data/products.js';

/**
 * Product photo with a loading shimmer and a styled fallback,
 * so a failed request never shows the browser's broken-image icon.
 */
export default function ProductImage({ photo, alt }) {
  const [status, setStatus] = useState('loading'); // loading | loaded | error

  if (status === 'error' || !photo) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-48 w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-sky-100 via-purple-100 to-pink-100 text-purple-400"
      >
        <CakeSlice className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider">Foto indisponível</span>
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-purple-100 to-pink-100">
      {status === 'loading' && <div className="absolute inset-0 animate-pulse bg-white/40" aria-hidden="true" />}
      <img
        src={unsplashUrl(photo, 800)}
        srcSet={`${unsplashUrl(photo, 400)} 400w, ${unsplashUrl(photo, 800)} 800w, ${unsplashUrl(photo, 1200)} 1200w`}
        sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        alt={alt}
        width="800"
        height="533"
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-48 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
