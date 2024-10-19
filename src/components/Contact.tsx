import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Entre em Contato</h2>
        <div className="max-w-lg mx-auto">
          <div className="flex items-center mb-6">
            <Mail className="h-6 w-6 text-blue-600 mr-4" />
            <span className="text-gray-700">paulojr0302@outlook.com</span>
          </div>
          <div className="flex items-center mb-6">
            <Phone className="h-6 w-6 text-blue-600 mr-4" />
            <span className="text-gray-700">(15) 99674-8539</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-blue-600 mr-4" />
            <span className="text-gray-700">Sorocaba, São Paulo, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;