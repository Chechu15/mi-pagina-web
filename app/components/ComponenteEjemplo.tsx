// src/welcome/ComponenteEjemplo.tsx
import Titulo from "./Titulo";
import ubuntu from "../assets/ubuntu.png";
import debian from "../assets/debian.png";
import linuxMint from "../assets/linux-mint.png";
import fedora from "../assets/fedora.png";

export const paginas = [
  {
    title: "Página 1",
    description: "Descripción de la página 1",
    url: "/pagina-1",
    color: "#ff76df",
    image: ubuntu
  },
  {
    title: "Página 2",
    description: "Descripción de la página 2",
    url: "/pagina-2",
    color: "#55dfff",
    image: debian
  },
  {
    title: "Página 3",
    description: "Descripción de la página 3",
    url: "/pagina-3",
    color: "#FFFF00",
    image: linuxMint
  },
  {
    title: "Página 4",
    description: "Descripción de la página 4",
    url: "/pagina-4",
    color: "#FFFF00",
    image: fedora
  }
  
];

export default function ComponenteEjemplo() {
  return (
    <section>
      <div className="px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <Titulo 
          titulo="Los distintos universos de Linux" 
          descripcion="Aquí exploraremos diferentes SO en linux, sus características y para quién van dirigidos.
          Relájate, tómate un refresco o lo que te guste y aprende con nosotros." 
        />
        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {
            paginas.map((pagina) => (
              <div key={pagina.url} className="space-y-4">
                <img 
                  src={pagina.image} 
                  alt={pagina.title} 
                  className="w-full h-100 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-2xl font-bold leading-tight text-pink-600 dark:text-white">
                  {pagina.title}
                </h3>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  {pagina.description}
                </p>
                <a href={pagina.url} title=""
                  className="bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  Ver {pagina.title}
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}