import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/Paulo-Junior.png" alt="Paulo Junior" className="rounded-full w-64 h-64 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-600 leading-relaxed mb-4">
            Olá! Meu nome é Paulo Junior, sou estudante de Engenharia da Computação, atualmente no 2º semestre. Já sou formado em Análise e Desenvolvimento de Sistemas e, no momento, atuo como técnico de suporte.

Estou em busca do meu primeiro estágio ou uma oportunidade como desenvolvedor júnior, onde possa aplicar e expandir meus conhecimentos em programação e tecnologia, além de contribuir com soluções eficazes para os desafios da empresa. Sou apaixonado por resolver problemas e sempre busco melhorar minhas habilidades técnicas e interpessoais.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Estou sempre buscando aprender novas tecnologias e melhores práticas de desenvolvimento. Meu objetivo é criar soluções eficientes e intuitivas que possam impactar positivamente a vida das pessoas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Quando não estou codando, gosto de assistir filmes e séries. Acredito que um bom equilíbrio entre vida profissional e pessoal é essencial para manter a criatividade e produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;