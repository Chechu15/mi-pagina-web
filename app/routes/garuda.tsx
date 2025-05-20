// src/routes/garuda.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Garuda" },
    { name: "description", content: "Información sobre Garuda" },
  ];
}

export default function Garuda() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Garuda
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Garuda Linux es una distribución de Linux basada en Arch Linux, enfocada en la velocidad y el rendimiento. Ofrece una experiencia de usuario fluida y personalizable.
      </p>
    </div>
  );
}