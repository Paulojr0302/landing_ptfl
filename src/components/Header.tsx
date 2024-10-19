import React from 'react';
import { Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-600 mr-2" />
          <span className="font-bold text-xl text-gray-800">Paulo Junior</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#sobre" className="text-gray-600 hover:text-blue-600">Sobre</a></li>
            <li><a href="#habilidades" className="text-gray-600 hover:text-blue-600">Habilidades</a></li>
            <li><a href="#projetos" className="text-gray-600 hover:text-blue-600">Projetos</a></li>
            <li><a href="#contato" className="text-gray-600 hover:text-blue-600">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;