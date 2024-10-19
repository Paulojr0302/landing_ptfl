import React from 'react';
import { Linkedin, Mail, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Olá, eu sou Paulo Junior!npx vite build
</h1>
        <p className="text-xl mb-8">Desenvolvedor Junior apaixonado por criar soluções web incríveis</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Paulojr0302" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center">
            <Code className="mr-2" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/paulorrosajr/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center">
            <Linkedin className="mr-2" /> LinkedIn
          </a>
          <a href="mailto:paulojr0302@outlook.com" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center">
            <Mail className="mr-2" /> E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;