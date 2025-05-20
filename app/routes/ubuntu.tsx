



import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "Ubuntu" },
    { name: "description", content: "Información sobre Ubuntu" },
  ];
}

export default function Ubuntu() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Ubuntu
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
      Ubuntu es un sistema operativo basado en Linux, lo que llamamos comúnmente una distribución. Como toda distro (como se conocen comúnmente las distribuciones de Linux), es de código abierto. Además el sistema operativo es totalmente gratuito para cualquier uso, tanto en sus versiones para ordenadores personales como para servidores.

Como decíamos, Ubuntu se destaca por su versatilidad, ya que tiene distintas ediciones que están pensadas para distintos usos. Por ejemplo, las ediciones para ordenadores personales vienen con soporte para interfaces gráficas y programas típicos de ofimática. Por su parte, las versiones para servidores solo admiten el trabajo con la consola de comandos. Pero también existen ediciones especiales para IoT y trabajo en la nube. 
      </p>
    </div>
  );
}