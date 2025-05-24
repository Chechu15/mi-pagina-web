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
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">¿Que distribución escoger para el uso cotidiano?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Para el uso cotidiano recomendamos distribuciones como Ubuntu, Linux Mint o Fedora
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">¿Que distribución escoger para crear un servidor?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Para crear un servidor depende de las necesidades y la infraesctructura que vayas a escoger , para algo sencillo recomendamos Alpine Linux, en cambio 
            si requieres de un SO mas potente recomendamos Ubuntu Server o centOS y para un uso empreasarial RedHat
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Si soy un punto de mira de países u organismos oficiales , ¿que distribución escojo?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Para una persona que se tenga que esconder de gente muy poderosa y que si comete algún error le pueda costar la vida. Recomendamos SO como 
            QubesOS o un sistema que no deja huella en ningún ordenador como Tails
  
          </p>
        </div>
      </div>
    </div>
  );
}