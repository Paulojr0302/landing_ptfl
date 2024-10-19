import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: 'Projeto 1',
      description: 'Breve descrição do projeto 1.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      github: 'https://github.com/seu-usuario/projeto1',
      demo: 'https://seu-usuario.github.io/projeto1'
    },
    {
      title: 'Projeto 2',
      description: 'Breve descrição do projeto 2.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      github: 'https://github.com/seu-usuario/projeto2',
      demo: 'https://seu-usuario.github.io/projeto2'
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meus Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Code className="mr-2" /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="mr-2" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;