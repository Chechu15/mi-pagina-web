
// src/components/Header.tsx

// Importación del logo

import logo from '../assets/tux.jpeg';

// Componente Header que muestra la barra de navegación superior de la aplicación

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo y nombre del sitio */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
             {/* Imagen del logo */}
          <img src={logo} className="w-12 h-12" alt="El pingüino se llama Tux, que bonito nombre jaja" />
            {/* Nombre del sitio */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tux
          </span>
        </a>
          {/* Botón para menú en dispositivos móviles */}
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
           {/* Icono del menú */}
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
           {/* Menú de navegación visible en dispositivos de escritorio */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {/* Enlace a la página "About Me" */}
              <a href="/about-me" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                About Me
              </a>
            </li>
            <li>
               {/* Enlace a la página "FAQ" */}
              <a href="/faq" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
