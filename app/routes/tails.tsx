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

        <br /><br />
        Tails es un sistema operativo portátil que te protege de la vigilancia y la censura.
        <br /><br />
        Evita la vigilancia, la censura, la publicidad y los virus
Tails usa la red Tor para proteger tu privacidad en línea y ayudarte a evitar la censura. Disfruta de Internet como debería ser.

<br /><br />
Tu computadora segura en cualquier lugar
Apaga tu computadora e inicia en tu memoria USB con Tails en lugar de iniciarla con Windows, macOS o Linux. Tails no deja rastros en la computadora cuando la apagas.

<br /><br />
Caja de herramientas de seguridad digital
Tails incluye una selección de aplicaciones para trabajar en documentos confidenciales y para comunicarse de forma segura. Todo en Tails está listo para usar y tiene una configuración segura por defecto.

<br /><br />
Software Libre
Puedes descargar Tails de forma gratuita e investigadores de seguridad independientes pueden verificar nuestro trabajo. Tails está basado en Debian GNU/Linux.


        <br /><br />
        Si quieres saber más sobre Tails puedes visitar la pagina web en el siguiente enlace:
        <br /><br />
        <a className='link-hover' href="https://tails.net/">Pagina Oficial de Tails</a>


      </p>
    </div>
  );
}