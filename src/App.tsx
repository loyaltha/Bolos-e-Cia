import { Routes, Route } from 'react-router-dom'; // Removi o BrowserRouter daqui
import { CartProvider } from './contexts/CartContext'; 
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home'; 
import { Catalogo } from './pages/Catalogo';
import { Produto } from './pages/Produto';
import { Carrinho } from './pages/Carrinho';
import Contato from './pages/Contato'; 
import Sobre from './pages/Sobre';      
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';

function App() {
  return (
    <CartProvider>
      {/* O BrowserRouter foi removido daqui porque já está no main.tsx */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
