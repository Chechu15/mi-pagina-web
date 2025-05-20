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
        Whonix es una distribución de Linux diseñada para maximizar la anonimato y la seguridad en línea. Utiliza una arquitectura de dos máquinas virtuales para aislar el tráfico de red.
      </p>
    </div>
  );
}