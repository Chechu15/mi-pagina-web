// src/routes/quebesos.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "QuebesOS" },
    { name: "description", content: "Información sobre QuebesOS" },
  ];
}

export default function QuebesOS() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        QuebesOS
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        QuebesOS es una distribución de Linux enfocada en la simplicidad y la facilidad de uso. Ofrece una experiencia de usuario sencilla y personalizable.
      </p>
    </div>
  );
}