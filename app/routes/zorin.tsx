// src/routes/zorin.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Zorin" },
    { name: "description", content: "Información sobre Zorin" },
  ];
}

export default function Zorin() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Zorin
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Zorin OS es una distribución de Linux diseñada para ser compatible con Windows, con una interfaz similar a la de Windows 10 y 11. Es ideal para usuarios que desean una transición suave desde Windows.
      </p>
    </div>
  );
}