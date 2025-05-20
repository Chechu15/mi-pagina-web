// src/routes/manjaro.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Manjaro" },
    { name: "description", content: "Información sobre Manjaro" },
  ];
}

export default function Manjaro() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Manjaro
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Manjaro es una distribución de Linux basada en Arch Linux, diseñada para ser fácil de usar e intuitiva. Se destaca por su enfoque en la facilidad de instalación y la experiencia de usuario.
      </p>
    </div>
  );
}