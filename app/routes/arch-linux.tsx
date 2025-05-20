// src/routes/arch-linux.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Arch Linux" },
    { name: "description", content: "Información sobre Arch Linux" },
  ];
}

export default function ArchLinux() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Arch Linux
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Arch Linux es una distribución de Linux independiente y de código abierto, enfocada en simplicidad y flexibilidad. Se considera una de las distribuciones más avanzadas y personalizables.
      </p>
    </div>
  );
}