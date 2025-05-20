

  
  import React from 'react';
  
  export function meta({}: { [key: string]: any }) {
    return [
      { title: "Fedora" },
      { name: "description", content: "Información sobre Fedora" },
    ];
  }
  
  export default function Fedora() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Fedora
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        El proyecto Fedora es una comunidad de personas que trabajan en conjunto para crear una plataforma libre y de código abierto y para colaborar y compartir soluciones centradas en el usuario basadas en dicha plataforma. O, en términos más sencillos: hacemos un sistema operativo y le facilitamos hacer cosas provechosas en él.
        </p>
      </div>
    );
  }