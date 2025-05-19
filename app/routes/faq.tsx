// src/routes/faq.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "FAQ" },
    { name: "description", content: "Preguntas frecuentes" },
  ];
}

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        FAQ
      </h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Pregunta 1</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Respuesta 1
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Pregunta 2</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Respuesta 2
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Pregunta 3</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Respuesta 3
          </p>
        </div>
      </div>
    </div>
  );
}