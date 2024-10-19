import React from 'react';
import { Code, Database, Globe, Palette } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    { name: 'HTML/CSS', icon: <Palette className="h-8 w-8 text-blue-500" /> },
    { name: 'JavaScript', icon: <Code className="h-8 w-8 text-yellow-500" /> },
    { name: 'React', icon: <Globe className="h-8 w-8 text-blue-400" /> },
    { name: 'Node.js', icon: <Database className="h-8 w-8 text-green-500" /> },
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Minhas Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {skill.icon}
              <h3 className="mt-4 font-semibold text-gray-700">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;