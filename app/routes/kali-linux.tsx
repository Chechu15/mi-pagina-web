// src/routes/kali-linux.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Kali Linux" },
    { name: "description", content: "Información sobre Kali Linux" },
  ];
}

export default function KaliLinux() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Kali Linux
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Kali Linux es una distribución de Linux diseñada específicamente para pruebas de penetración y auditoría de seguridad. Ofrece una amplia gama de herramientas de hacking ético.
      </p>
    </div>
  );
}