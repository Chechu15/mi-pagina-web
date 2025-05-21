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
      Qubes OS es un sistema operativo gratuito y de código abierto, orientado a la seguridad para computación de escritorio de un solo usuario. Qubes OS aprovecha Virtualización basada en xen permitir la creación y gestión de compartimentos aislados llamados qubes.

Estos qubes, que se implementan como virtual máquinas VM, tener específico: <br /><br />
<ul>
  <li>Propósitos: con un conjunto predefinido de uno o muchos aislados aplicaciones, para proyectos personales o profesionales, para gestionar el pila de red, el firewall, o para cumplir con otros propósitos definidos por el usuario.</li> <br />
  <li>Naturas: completo o despojado máquinas virtuales basadas en sistemas operativos populares, como Fedora, Debian, y Windows.</li> <br />
  <li>
Niveles de confianza: de completo a inexistente. Todas las ventanas son se muestra en un entorno de escritorio unificado con bordes de ventana de colores implacables entonces que los diferentes niveles de seguridad son fácilmente identificables.
</li>
</ul>



        <br /><br />
        Si quieres saber más sobre QubesOS puedes visitar la pagina web en el siguiente enlace:
        <br /><br />
        <a className='link-hover' href="https://www.qubes-os.org/">Pagina Oficial de QubesOS</a>


      </p>
    </div>
  );
}