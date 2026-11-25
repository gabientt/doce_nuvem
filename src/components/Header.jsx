import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import CartButton from './CartButton.jsx';

const NAV_LINKS = [
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#monte-sua-caixa', label: 'Monte sua Caixa' },
];

export default function Header({ onCartClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 font-semibold text-cocoa-light transition hover:bg-purple-100/70 hover:text-cocoa"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CartButton onClick={onCartClick} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cocoa transition hover:bg-purple-100/70 md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal (móvel)" className="border-t border-white/60 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-semibold text-cocoa-light transition hover:bg-purple-100/70 hover:text-cocoa"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
