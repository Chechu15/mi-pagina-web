// src/routes/tails.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Tails" },
    { name: "description", content: "Información sobre Tails" },
  ];
}

export default function Tails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Tails
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Tails es una distribución de Linux diseñada para preservar la privacidad y la anonimato. Se ejecuta directamente desde una memoria USB o CD/DVD, sin dejar rastro en el sistema.
      </p>
    </div>
  );
}