import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Paulo R. Rosa Junior. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;