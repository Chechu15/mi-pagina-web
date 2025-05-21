// src/routes/redhat.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Red Hat" },
    { name: "description", content: "Información sobre Red Hat" },
  ];
}

export default function RedHat() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Red Hat
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        Red Hat Enterprise Linux (RHEL) es una distribución de Linux empresarial respaldada por Red Hat. Se caracteriza por su alta disponibilidad, seguridad y soporte premium.

        <br /><br />
        Si quieres saber más sobre RedHat puedes visitar la pagina web en el siguiente enlace:
        <br /><br />
        <a className='link-hover' href="https://www.redhat.com/es">Pagina Oficial de RedHat</a>


      </p>
    </div>
  );
}