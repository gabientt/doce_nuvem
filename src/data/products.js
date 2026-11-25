// Photos: Unsplash (https://unsplash.com/license). `photo` is the Unsplash photo id.
export const PRODUCTS = [
  {
    id: 'bolo-chocolate-trufado',
    name: 'Bolo de Chocolate Trufado',
    description: 'Massa úmida de cacau, recheio de trufa e cobertura de ganache.',
    category: 'Bolos',
    price: 89.9,
    photo: '1578985545062-69928b1d9587',
  },
  {
    id: 'cupcake-morango',
    name: 'Cupcake de Morango',
    description: 'Baunilha fofinha com chantilly de morango e fruta fresca.',
    category: 'Cupcakes',
    price: 12.9,
    photo: '1563729784474-d77dbb933a9e',
  },
  {
    id: 'cheesecake-frutas-vermelhas',
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Cremoso, com base crocante de biscoito e calda artesanal.',
    category: 'Tortas',
    price: 19.9,
    photo: '1524351199678-941a58a3df50',
  },
  {
    id: 'macarons-sortidos',
    name: 'Macarons Sortidos',
    description: 'Caixa com 6 unidades em sabores da estação.',
    category: 'Caixas',
    price: 42.0,
    photo: '1569864358642-9d1684040f43',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisù da Casa',
    description: 'Camadas de mascarpone, café espresso e cacau em pó.',
    category: 'Sobremesas',
    price: 18.9,
    photo: '1571877227200-a0d98ea607e9',
  },
  {
    id: 'panna-cotta',
    name: 'Panna Cotta com Morangos',
    description: 'Creme de baunilha delicado servido no potinho.',
    category: 'Sobremesas',
    price: 16.9,
    photo: '1488477181946-6428a0291777',
  },
  {
    id: 'brownie-calda',
    name: 'Brownie com Calda',
    description: 'Chocolate meio amargo, casquinha crocante e calda quente.',
    category: 'Doces',
    price: 11.9,
    photo: '1606313564200-e75d5e30476c',
  },
  {
    id: 'cookies-gotas',
    name: 'Cookies com Gotas de Chocolate',
    description: 'Pacote com 4 cookies amanteigados, crocantes por fora.',
    category: 'Biscoitos',
    price: 22.5,
    photo: '1558961363-fa8fdf82db35',
  },
];

export function unsplashUrl(photoId, width) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}
