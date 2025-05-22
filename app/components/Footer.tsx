// src/components/Footer.tsx
import React from 'react';

// Componente Footer que muestra el pie de página de la aplicación

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
           {/* Contenedor que contiene el texto del pie de página */}
       
        <div>
               {/* Texto del año y derechos de autor */}
          <p>&copy; 2025 Mi Página Web. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;