import { useEffect, useRef, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function CartButton({ onClick }) {
  const { count } = useCart();
  const [bump, setBump] = useState(false);
  const prevCount = useRef(count);

  // Briefly animate the badge whenever the count goes up.
  useEffect(() => {
    if (count > prevCount.current) {
      setBump(true);
      const t = setTimeout(() => setBump(false), 350);
      prevCount.current = count;
      return () => clearTimeout(t);
    }
    prevCount.current = count;
  }, [count]);

  const label = count === 1 ? '1 item' : `${count} itens`;

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-cocoa shadow-soft ring-1 ring-purple-100 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      aria-label={`Abrir carrinho, ${label}`}
    >
      <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      {count > 0 && (
        <span
          className={`absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-400 px-1.5 text-[11px] font-bold leading-none text-white ring-2 ring-white ${bump ? 'animate-pop' : ''}`}
          aria-hidden="true"
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}
