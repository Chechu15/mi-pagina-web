// src/routes/tails.tsx
import React from 'react';

// Función para definir los metadatos de la página
export function meta({}: { [key: string]: any }) {
  return [
    { title: "Tails" },
    { name: "description", content: "Información sobre Tails" },
  ];
}

// Componente principal para la página de Tails
export default function Tails() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Título principal de la página */}
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Tails
      </h1>
      {/* Descripción general de Tails */}
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Tails es una distribución de Linux diseñada para preservar la privacidad y la anonimato. Se ejecuta directamente desde una memoria USB o CD/DVD, sin dejar rastro en el sistema.
      </p>

      {/* Sección sobre la protección de la vigilancia y censura */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Protección contra la vigilancia y censura
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Tails es un sistema operativo portátil que te protege de la vigilancia y la censura. Evita la vigilancia, la censura, la publicidad y los virus. Tails usa la red Tor para proteger tu privacidad en línea y ayudarte a evitar la censura. Disfruta de Internet como debería ser.
        </p>
      </div>

      {/* Sección sobre la seguridad portátil */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Computadora segura en cualquier lugar
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Apaga tu computadora e inicia en tu memoria USB con Tails en lugar de iniciarla con Windows, macOS o Linux. Tails no deja rastros en la computadora cuando la apagas.
        </p>
      </div>

      {/* Sección sobre las herramientas de seguridad digital */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Caja de herramientas de seguridad digital
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Tails incluye una selección de aplicaciones para trabajar en documentos confidenciales y para comunicarse de forma segura. Todo en Tails está listo para usar y tiene una configuración segura por defecto.
        </p>
      </div>

      {/* Sección sobre el software libre */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Software Libre
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Puedes descargar Tails de forma gratuita. Investigadores de seguridad independientes pueden verificar nuestro trabajo. Tails está basado en Debian GNU/Linux.
        </p>
      </div>

      <br /><br />
      <p className="text-center">
      Si quieres saber más sobre Tails puedes visitar la pagina web en el siguiente enlace:
      </p>




      {/* Enlace a la página oficial de Tails */}
      <div className="mt-8 text-center">
        <a className="link-hover text-blue-600 dark:text-blue-400 text-lg font-semibold" href="https://tails.net/" target="_blank" >
          Página Oficial de Tails
        </a>
      </div>
    </div>
  );
}


