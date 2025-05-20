

// src/routes/alpine.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Debian" },
    { name: "description", content: "Información sobre Debian" },
  ];
}

export default function Debian() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Debian
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
      Debian es una organización formada totalmente por voluntarios dedicada a desarrollar software libre y promocionar los ideales de la comunidad del software libre. El Proyecto Debian comenzó en 1993, cuando Ian Murdock hizo una invitación a todos los desarrolladores de software a contribuir a una distribución completamente coherente basada en el, entonces relativamente nuevo, núcleo Linux. Ese grupo relativamente pequeño de entusiastas, al principio patrocinados por la Free Software Foundation e influenciados por la filosofía GNU, ha crecido a lo largo de los años hasta convertirse en una organización de alrededor de 1000 desarrolladores Debian.
      </p>
    </div>
  );
}