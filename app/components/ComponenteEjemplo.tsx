// src/components/ComponenteEjemplo.tsx
import Titulo from "./Titulo";
import ubuntu from "../assets/ubuntu.png";
import debian from "../assets/debian.png";
import linuxMint from "../assets/linux-mint.png";
import fedora from "../assets/fedora.png";
import archLinux from "../assets/arch.png";
import kaliLinux from "../assets/kali-linux.jpeg";
import manjaro from "../assets/manjaro.png";
import zorin from "../assets/zorin.jpeg";
import garuda from "../assets/garuda.png";
import alpine from "../assets/alpine.jpeg";
import centos from "../assets/centos.jpeg";
import redhat from "../assets/redhat.svg";
import quebesos from "../assets/QubesOS.png";
import tails from "../assets/tails.png";
import whonix from "../assets/whonix.png";

export const paginas = [
  {
    title: "Ubuntu",
    description: "La distribución más famosa de Linux",
    url: "/ubuntu",
    color: "#ff76df",
    image: ubuntu
  },
  {
    title: "Debian",
    description: "El padre de la mayoria de distribuciones",
    url: "/debian",
    color: "#55dfff",
    image: debian
  },
  {
    title: "Linux Mint",
    description: "Alternativa de Windows en Linux",
    url: "/linux-mint",
    color: "#FFFF00",
    image: linuxMint
  },
  {
    title: "Fedora",
    description: "Si te gusta tener lo ultimo en tecnologías y parches de seguridad",
    url: "/fedora",
    color: "#FFFF00",
    image: fedora
  },
  {
    title: "Arch Linux",
    description: "Si te gusta hacertelo tu mismo (Alto nivel de conocimiento)",
    url: "/arch-linux",
    color: "#179bd7",
    image: archLinux
  },
  {
    title: "Kali Linux",
    description: "Si te gusta el mundo de la ciberseguridad",
    url: "/kali-linux",
    color: "#26a0da",
    image: kaliLinux
  },
  {
    title: "Manjaro",
    description: "Si te gusta las distribuciones basada en Arch Linux",
    url: "/manjaro",
    color: "#2398f6",
    image: manjaro
  },
  {
    title: "Zorin",
    description: "Si te gusta los entornos de Apple",
    url: "/zorin",
    color: "#004c97",
    image: zorin
  },
  {
    title: "Garuda",
    description: "Si te gusta algo moderno y funcional para jugar",
    url: "/garuda",
    color: "#19171c",
    image: garuda
  },
  {
    title: "Alpine",
    description: "Distribución ligera para servidor",
    url: "/alpine",
    color: "#0e9aa7",
    image: alpine
  },
  {
    title: "CentOS",
    description: "Alto rendimiento y disponibilidad en servidor",
    url: "/centos",
    color: "#6cc04a",
    image: centos
  },
  {
    title: "Red Hat",
    description: "Soluciones empresariales con tecnologías de alto rendimiento de Linux",
    url: "/redhat",
    color: "#cc0000",
    image: redhat
  },
  {
    title: "QuebesOS",
    description: "Centrado en la seguridad del escritorio a través de aislamiento",
    url: "/quebesos",
    color: "#f4c430",
    image: quebesos
  },
  {
    title: "Tails",
    description: "Sistema operativo amnésico y privado",
    url: "/tails",
    color: "#1a1a1a",
    image: tails
  },
  {
    title: "Whonix",
    description: "Basado en Kicksecure que está enfocado a la seguridad digital",
    url: "/whonix",
    color: "#004950",
    image: whonix
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
                  className="w-full h-90 object-cover rounded-lg mb-4" 
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