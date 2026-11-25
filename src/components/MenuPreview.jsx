import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { PRODUCTS } from '../data/products.js';
import ProductImage from './ProductImage.jsx';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export default function MenuPreview() {
  const { addItem } = useCart();

  return (
    <section id="cardapio" className="scroll-mt-20 px-4 py-20 sm:scroll-mt-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-purple-400">Nossas delícias</p>
        <h2 className="mt-2 text-center font-display text-4xl font-bold text-cocoa sm:text-5xl">Cardápio</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-cocoa-light">
          Tudo preparado em pequenas fornadas, no mesmo dia da entrega.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <li
              key={p.id}
              className="group flex flex-col rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-white backdrop-blur-sm transition hover:-translate-y-1"
            >
              <ProductImage photo={p.photo} alt={p.name} />

              <div className="flex flex-1 flex-col px-1 pt-4">
                <span className="self-start rounded-full bg-purple-100/80 px-2.5 py-0.5 text-xs font-semibold text-purple-500">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.name}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-cocoa-light">{p.description}</p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-display text-xl font-semibold">{brl.format(p.price)}</span>
                  <button
                    type="button"
                    onClick={() => addItem(p)}
                    aria-label={`Adicionar ${p.name} ao carrinho`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                    Adicionar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="monte-sua-caixa"
        className="mx-auto mt-24 max-w-3xl scroll-mt-20 rounded-3xl bg-white/60 p-10 text-center shadow-soft ring-1 ring-white backdrop-blur-sm sm:scroll-mt-24"
      >
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Monte sua Caixa</h2>
        <p className="mt-3 text-cocoa-light">Escolha seus doces favoritos e crie uma caixa só sua. Em breve!</p>
      </div>
    </section>
  );
}
