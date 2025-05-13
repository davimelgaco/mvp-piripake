
import { Link } from 'react-router-dom';
//import Logo from '../components/Logo';
import { ArrowRight } from 'lucide-react';

import '../index.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm">
      {/*  <Logo />*/}
        <nav className="hidden md:flex space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">Sobre</Link>
          <Link to="/help" className="text-gray-600 hover:text-primary transition-colors">Ajuda</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10 animate-fade-in">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-bounce-in">
            Piripake do Chavs
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-xl mx-auto">
            Bem-vindo ao sistema de divisão de contas! Organize seus eventos e divida as despesas de forma justa e fácil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/event/create" className="animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <button 
                type="button" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Iniciar Piripake
                <ArrowRight className="h-5 w-5 transition-transform transform group-hover:translate-x-1" />
              </button>
            </Link>

            <Link to="/events" className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <button 
                type="button" 
                className="w-full bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Ver Eventos
              </button>
            </Link>

            <Link to="/participants" className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <button 
                type="button" 
                className="w-full bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Ver Participantes
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-50 text-center text-gray-500 border-t border-gray-200">
        <p>© 2025 Piripake do Chavs. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;