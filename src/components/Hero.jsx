import { ArrowDown, Clock, HeartHandshake, Sparkles, Wheat } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Wheat, label: 'Ingredientes selecionados' },
  { icon: Clock, label: 'Fornadas diárias' },
  { icon: HeartHandshake, label: 'Feito com carinho' },
];

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Decorative soft blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-purple-500 shadow-sm ring-1 ring-purple-100 backdrop-blur">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Feito à mão, todos os dias
        </span>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-cocoa sm:text-6xl md:text-7xl">
          Docinhos que parecem{' '}
          <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            nuvem
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocoa-light sm:text-xl">
          Brigadeiros, bem-casados e bolos artesanais preparados em pequenas fornadas, com ingredientes
          selecionados e muito carinho — para adoçar os seus momentos mais especiais.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={scrollToMenu}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 px-8 py-4 font-display text-lg font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
          >
            Ver o cardápio
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" strokeWidth={2.5} aria-hidden="true" />
          </button>
          <a
            href="#monte-sua-caixa"
            className="rounded-full px-6 py-4 font-semibold text-cocoa-light transition hover:bg-white/60 hover:text-cocoa"
          >
            Monte sua Caixa
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-cocoa-light">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-purple-400 ring-1 ring-purple-100">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
