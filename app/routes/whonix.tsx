// src/routes/whonix.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Whonix" },
    { name: "description", content: "Información sobre Whonix" },
  ];
}

export default function Whonix() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Whonix
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
      Whonix es un sistema operativo anónimo que se ejecuta como una aplicación y enruta todo el tráfico de Internet a través de la red de anonimato Tor. Ofrece protección de privacidad y anonimato en línea y está disponible para todos los principales sistemas operativos.

        <br /> <br />
Si quieres saber más sobre Whonix puedes visitar la pagina web en el siguiente enlace:
<br /><br />
<a className='link-hover' href="https://www.whonix.org/">Pagina Oficial de Whonix</a>

      </p>
    </div>
  );
}