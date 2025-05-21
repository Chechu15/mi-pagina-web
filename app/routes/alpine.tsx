// src/routes/alpine.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Alpine" },
    { name: "description", content: "Información sobre Alpine" },
  ];
}

export default function Alpine() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Alpine
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Alpine Linux es una distribución de Linux minimalista y ligera, diseñada para ser rápida y eficiente en entornos de servidor y embebidos.
        <br /><br />
        Si quieres saber más sobre Alpine puedes visitar la pagina web en el siguiente enlace:
        <br /><br />
        <a className='link-hover' href="https://www.alpinelinux.org/">Pagina Oficial de Alpine</a>
      </p>
    </div>
  );
}