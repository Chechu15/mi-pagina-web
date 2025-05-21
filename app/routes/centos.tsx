// src/routes/centos.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "CentOS" },
    { name: "description", content: "Información sobre CentOS" },
  ];
}

export default function CentOS() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        CentOS
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
        CentOS es una distribución de Linux basada en Red Hat Enterprise Linux (RHEL). Se caracteriza por ser estable y confiable, ideal para servidores y entornos empresariales.

        <br /><br />
        Si quieres saber más sobre CentOS puedes visitar la pagina web en el siguiente enlace:
        <br /><br />
        <a className='link-hover' href="https://www.centos.org/">Pagina Oficial de CentOS</a>
      </p>


    </div>
  );
}