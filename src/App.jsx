import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MenuPreview from './components/MenuPreview.jsx';

export default function App() {
  return (
    <>
      <Header onCartClick={() => { /* TODO: open cart drawer */ }} />
      <main>
        <Hero />
        <MenuPreview />
      </main>
      <footer className="py-10 text-center text-sm text-cocoa-light">
        © {new Date().getFullYear()} Doce Nuvem · Confeitaria artesanal
      </footer>
    </>
  );
}
